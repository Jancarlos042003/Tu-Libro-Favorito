import { X } from "lucide-react"
import CardBook from "./CardBook";
const book = {
    title: "Elon Musk",
    image: "https://th.bing.com/th/id/OIP.oqHCJx-8e1y5vqCmM7j5LwHaLW?rs=1&pid=ImgDetMain",
    price: 70
};
const Cart = ({onClose}) => {
    return(
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                onClose ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />
            <section className="fixed top-0 right-0 h-screen w-[450px] px-4 pb-4 text-black bg-stone-100 shadow-lg z-50">
                <div className="flex justify-between py-6">
                    <h1 className="font-bold">CARRITO DE COMPRAS</h1>
                    <button onClick={onClose}>
                    <X />
                    </button>
                </div>
                <CardBook book={book} />
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