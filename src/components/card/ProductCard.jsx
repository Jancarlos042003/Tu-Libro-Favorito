import BookImage from "./BookImage"
import PriceDisplay from "./PriceDisplay";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CircleCheck } from "lucide-react";

const ProductCard = ({ book }) => {
    const {state, dispatch} = useContext(CartContext)

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: book // Se le asigna al contexto que almacene libros
        })
    }

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: book
        })
    }

    return (
        <div className="w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer relative transition-transform duration-300 ease-in-out">
            <Link to={`libro/${book.id}`}>
                <BookImage 
                    image={book.imgPortada}
                    title={book.titulo}
                    discount={book.descuento}
                    description={book.descripcion}
                />
            
                <div className="w-full h-36 p-3 flex flex-col justify-between">
                    <h3 className="text-black text-sm font-bold mb-1 uppercase line-clamp-2">{book.titulo}</h3>
                    <div>
                        <p className="text-gray-700 uppercase text-xs font-bold truncate">{book.autor}</p>
                        <div className="flex justify-between items-center mt-2 sm:mt-4">
                            <PriceDisplay 
                                price={book.precio}
                                discount={book.descuento}
                                fontSize={"base"}
                            />
                        </div>
                    </div>
                </div>
            </Link>
            <div className="absolute bottom-3 right-3">
                {!state.cart.find((item) => item.id === book.id) ?(
                    <AddToCartButton onClick={addToCart} />
                ) : (
                    <CircleCheck size={30} className="text-green-600" onClick={removeFromCart} />
                )}
            </div>
        </div>
    );
};

export default ProductCard;