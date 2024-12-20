import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const AddToCartButton = ({text="", onClick}) => {
    const [margin, setMargin] = useState("mr-0");

    useEffect(()=>{
        setMargin(text ? "mr-2" : "mr-0");
    }, [text]);

    return(
        <button 
            className="text-white font-bold px-4 py-2 rounded-lg bg-black hover:bg-neutral-800 transition-colors duration-300 ease-in-out focus:outline-none text-sm flex justify-betwee"
            aria-label="Añadir al carrito"
            onClick={onClick}
        >
            <ShoppingCart className={margin} size={18} /> 
            <span>{text}</span>
        </button>
    )
};

export default AddToCartButton