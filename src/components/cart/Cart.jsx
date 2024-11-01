import { ShoppingCart, X } from "lucide-react"
import CardBook from "./CardBook";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({onClose}) => {

    const {state} = useContext(CartContext)

    return(
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                onClose ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />
            <section className="fixed top-0 right-0 h-screen w-screen sm:w-[450px] px-4 pb-4 text-black bg-stone-100 shadow-lg z-50">
                <div className="flex justify-between py-6">
                    <h1 className="font-bold">CARRITO DE COMPRAS</h1>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div> 
                {state.cart.length > 0 ?  state.cart.map((libro) => 
                    (<CardBook key={libro.id} libro={libro} />)
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <ShoppingCart size={100} className="text-gray-300" />
                        <span className="text-gray-300">Tu carrito esta vacío.</span>
                    </div>
                )}
                <div className="mt-6">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full">
                        Finalizar Compra
                    </button>
                </div>
            </section>
        </>
    )
}

export default Cart