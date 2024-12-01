import { Trash2 } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { token } from "../../helpers/auth";
import { API_URL } from "../../../env";

const CardBook = ({ libro }) => {

    //const [quantity, setQuantity] = useState(1);
    const { state, dispatch } = useContext(CartContext)
    const [inventario, setInventario] = useState([])
    const [error, setError] = useState()

    // Buscar si el libro ya está en el carrito y obtener su cantidad actual
    const bookInCart = state.cart.find(item => item.id === libro.id);
    const quantity = bookInCart ? bookInCart.quantity : 0;

    // OBTENEMOS TODO EL INVENTARIO
    useEffect(() => {
        axios.get(`${API_URL}/api/inventario`, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then((resp) => {
            setInventario(resp.data)
        })
        .catch((e) => {
            setError("Error: " + e)
            console.log(error)
        })
    }, []); 

    // FILTRAMOS EL INVENTARIO QUE COINCIDA CON EL ID DEL LIBRO
    const filterInventory = inventario.filter(i => i.libroCardDTO.id == libro.id)

    const handleIncrement = () => {
        dispatch({
            type: "INCREMENT_QUANTITY",
            payload: { 
                id: libro.id,
                stock: filterInventory[0].stock // establecemos como maximo el stock disponible
            }
        })
    };

    const handleDecrement = () => {
        dispatch({
            type: "DECREMENT_QUANTITY",
            payload: { id: libro.id }
        })
    };

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: libro
        })
    }

    const calcularDescuento = (precio, descuento) => {
        const precioFinal = precio*(100-descuento)/100
        return precioFinal.toFixed(2)
    }

    return(
        <div className="flex justify-between items-center border border-gray-300 p-2 my-2 rounded-lg">
                <div className="flex items-center">
                    <img className="w-20 h-30 object-cover rounded-md" src={libro.imgPortada} alt={libro.titulo} />
                    <div className="flex flex-col ml-4">
                        <span className="font-medium text-black">{libro.titulo}</span>
                        
                        <span className={`text-gray-500 ${libro.descuento > 0 && "line-through"} `}>${libro.precio}</span>
                        {libro.descuento > 0 && <span className="text-green-600">${calcularDescuento(libro.precio, libro.descuento)}</span>}
                    </div>
                </div>
                <div className="flex items-center">
                    <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-1 px-2 rounded-l"
                    onClick={handleDecrement}
                    >
                        -
                    </button>

                    <span className="bg-gray-200 text-gray-700 font-medium py-1 px-3">{quantity}</span>

                    <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-1 px-2 rounded-r"
                    onClick={handleIncrement}
                    >
                        +
                    </button>
                    <button className="hover:text-red-600 text-neutral-400 ml-4" onClick={removeFromCart}>
                        <Trash2 size={21} />
                    </button>
                </div>
            </div>
    )
}

export default CardBook