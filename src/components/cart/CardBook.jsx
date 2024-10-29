import { Trash2 } from "lucide-react";
import { useState } from "react";

const CardBook = ({book}) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };
    return(
        <div className="flex justify-between items-center border border-neutral-300 p-2 rounded-lg">
                <div className="flex items-center">
                    <img className="w-20 h-30 object-cover rounded-md" src={book.image} alt={book.title} />
                    <div className="flex flex-col ml-4">
                    <span className="font-medium">{book.title}</span>
                    <span className="text-gray-500">S/.{book.price}</span>
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
                    <button className="hover:text-red-600 ml-4">
                        <Trash2 size={21} />
                    </button>
                </div>
            </div>
    )
}

export default CardBook