import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { API_URL, PAYPAL_ID } from "../../../env"
import { token } from "../../helpers/auth";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const PayPalPayment = ({ orden }) => {
    const [error, setError] = useState(null);
    const nav = useNavigate()
    const { dispatch } = useContext(CartContext)

    const handleApprove = async () => {
        try {
            const response = await axios.post(
                `${API_URL}/api/pagos/capturar/${orden.idOrden}`,
                {},  // Cuerpo vacío ya que backend no necesita datos adicionales
                {
                    headers: {
                        Authorization: `Bearer ${token()}`
                    }
                }
            );

            if (response.data.estado === "COMPLETED") {
                nav("/orden-completada")
                dispatch({ type: "CLEAR_CART" });
                
            } else {
                setError("El estado de la orden no es válido");
            }
        } catch (error) {
            setError("Error al procesar el pago. Por favor, intente nuevamente.");
            console.error("Error capturando la orden:", error);
        }
    };

    return (
        <div className="w-full">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            
            {orden.urlAprobacion ? (
                <PayPalScriptProvider options={{ 
                    clientId: PAYPAL_ID,
                    currency: "USD"
                }}>
                    <PayPalButtons
                        style={{
                            layout: "vertical",
                            color: "blue",
                            shape: "rect",
                            label: "pay"
                        }}
                        createOrder={() => {
                            return orden.idOrden; // Retornamos el ID de la orden que ya fue creada en el backend
                        }}
                        onApprove={handleApprove}
                        onError={(err) => {
                            setError("Error en el proceso de pago con PayPal");
                            console.error("Error de PayPal:", err);
                        }}
                    />
                </PayPalScriptProvider>
            ) : (
                <div className="text-red-600">
                    Error: No se pudo obtener la URL de aprobación de PayPal
                </div>
            )}
        </div>
    );
};

export default PayPalPayment