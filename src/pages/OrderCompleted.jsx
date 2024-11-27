import { ArrowLeft, CircleCheckBig } from "lucide-react"
import { useNavigate } from "react-router-dom"

const OrderCompleted = () => {

    const nav = useNavigate()

    const handleClick = () => {
        nav("/")
    }

    return(
        <div className="p-3 w-full h-screen flex items-center">
            <div className="text-black m-auto max-w-lg h-96 border rounded-lg border-gray-300 p-5 flex flex-col justify-center items-center">
                <div className="rounded-full p-4 bg-green-200">
                    <CircleCheckBig className="h-10 w-10 text-green-600" />
                </div>
                <p className="text-3xl font-bold">¡Pago Realizado con Éxito!</p>
                <span className="text-zinc-500">Su pedido ha sido procesado correctamente</span>
                <button 
                onClick={handleClick}
                className="bt-black flex justify-center items-center gap-3 mt-5">
                    <ArrowLeft size={20} />
                    Volver a la Tienda
                </button>
            </div>
        </div>
    )
}

export default OrderCompleted