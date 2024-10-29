import { Trash2 } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

const CardBook = ({libro}) => {
    const [quantity, setQuantity] = useState(1);
    const { state, dispatch } = useContext(CartContext)

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: libro
        })
    }

    return(
        <div className="flex justify-between items-center border border-neutral-300 p-2 my-2 rounded-lg">
                <div className="flex items-center">
                    <img className="w-20 h-30 object-cover rounded-md" src={libro.imgPortada} alt={libro.titulo} />
                    <div className="flex flex-col ml-4">
                    <span className="font-medium">{libro.titulo}</span>
                    <span className="text-gray-500">S/.{libro.precio}</span>
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
                    <button className="hover:text-red-600 ml-4" onClick={removeFromCart}>
                        <Trash2 size={21} />
                    </button>
                </div>
            </div>
    )
}

export default CardBook