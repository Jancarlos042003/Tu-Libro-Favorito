import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

const CartIcon = ({ size }) => {
    const { state } = useContext(CartContext);

    return(
        <div className="relative">
            {state.cart.length > 0 && (
                <div className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {state.cart.length}
                </div>
            )}
            <ShoppingCart size={size} className="mr-2" strokeWidth={2.5} />
        </div>
    )
}

export default CartIcon