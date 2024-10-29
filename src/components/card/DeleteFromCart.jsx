import { ShoppingCart } from "lucide-react";

const DeleteFromCart = ({ onClick}) => {

    return(
        <button 
            className="text-white font-bold px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-300 ease-in-out focus:outline-none text-sm flex justify-betwee"
            aria-label="Eliminar del carrito"
            onClick={onClick}
        >
            <ShoppingCart className="mr-2" size={18} /> 
            <span>Libro agregado</span>
        </button>
    )
};

export default DeleteFromCart