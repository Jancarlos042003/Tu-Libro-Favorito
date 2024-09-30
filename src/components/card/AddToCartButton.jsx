import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const AddToCartButton = ({text}) => {
    const [margin, setMargin] = useState("mr-0");

    useEffect(()=>{
        setMargin(text ? "mr-2" : "mr-0");
    }, [text]);

    return(
        <button 
            className="text-white font-bold px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none text-sm flex justify-betwee"
            aria-label="Añadir al carrito"
        >
            <ShoppingCart className={margin} size={18} /> 
            <span>{text}</span>
        </button>
    )
};

export default AddToCartButton