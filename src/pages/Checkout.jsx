import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import CardBook from "../components/cart/CardBook"
import axios from "axios"
import { API_URL } from "../../env"
import { token } from "../helpers/auth"
import { UserContext } from "../context/UserContext"
import PayPalPayment from "../components/cart/PayPalPayment"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Checkout = () => {

    // OBTENEMOS LOS CONTEXTOS
    const {state} = useContext(CartContext)
    const { userData } = useContext(UserContext)

     // ESTADOS PARA LA INFORMACION DE ENVIO
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState(null);

    // ESTADO PARA LA CREACION DE LA ORDEN
    const [orden, setOrden] = useState()

    // ESTADO PARA EL TOTAL
    const [total, setTotal] = useState(0);

    const nav = useNavigate()

    const handleClick = () => {
        nav("/")
    }

    // Función para calcular el total del carrito
    useEffect(() => {
        const calculateTotal = () => {
            const totalAmount = state.cart.reduce((acc, item) => {
                const precioConDescuento = item.descuento
                    ? item.precio * (1 - item.descuento / 100)
                    : item.precio;
                return acc + precioConDescuento * item.quantity;
            }, 0);

            setTotal(totalAmount.toFixed(2)); // Guardamos el total en el estado con 2 decimales
        };

        calculateTotal();
    }, [state.cart]); // Vuelve a calcular cuando cambia el carrito

    const data = {
        idUsuario: userData.id,
        items: state.cart.map(item =>{
            return {
                idLibro: item.id,
                cantidad: item.quantity,
                precio: item.precio,
                descuento: item.descuento
            }
        }),
        total: total,
        informacionEnvio: {
            direccion,  //Equivalente a escribir direccion: direccion
            telefono,   //Equivalente a escribir telefono; telefono
        }
    }

    const handleOrden = () => {
        if (!direccion.trim() || !telefono.trim()) {
            setError("Por favor complete todos los campos requeridos");
            return;
        }

        setError(null);

        axios.post(`${API_URL}/api/pagos/crear`, data, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then(resp => {
            setOrden(resp.data)
        })
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 py-16 text-black border-gray-300">
            <h1 className="text-3xl font-bold">Finalizar Compra</h1>
            <span>Complete su información para procesar su pedido</span>

            {error && (
                <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
                    {error}
                </div>
            )}

            <div className="mt-8">
                <h2 className="text-xl font-bold">Resumen del Pedido</h2>
                {state.cart.length > 0 && state.cart.map((libro) => (
                    <CardBook key={libro.id} libro={libro} />
                ))}
            </div>
            {state.cart.length > 0 && (
                <>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold">Información de Envío</h2>
                        <input 
                            className="border border-gray-300 rounded-lg w-full py-2 px-2 mt-3" 
                            type="text" 
                            name="direccion" 
                            placeholder="Dirección de Envío"
                            value={direccion} 
                            onChange={(e) => setDireccion(e.target.value)}
                            required  
                        />
                        <input 
                            className="border border-gray-300 rounded-lg w-full py-2 px-2 mt-3" 
                            type="tel" 
                            name="celular" 
                            placeholder="Número de Celular"
                            value={telefono} 
                            onChange={(e) => setTelefono(e.target.value)}  
                            required
                        />
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <h2 className="text-xl font-bold">Total</h2>
                        <span className="text-xl">${total}</span>
                    </div>
                    {!orden ? (
                        <button 
                            className="mt-8 bt-black"
                            onClick={handleOrden}
                        >
                            Realizar Pedido
                        </button>
                    ) : (
                        <div className="mt-8">
                            <PayPalPayment value={total} orden={orden} />
                        </div>
                    )}
                </>
            )}
            {state.cart.length === 0 && (
                <div className="mt-8 text-center text-gray-500">
                    Su carrito está vacío
                    <button 
                    onClick={handleClick}
                    className="bt-black flex justify-center items-center gap-3 mt-5">
                        <ArrowLeft size={20} />
                        Volver a la Tienda
                    </button>
                </div>
                
            )}
        </div>
    )
}

export default Checkout