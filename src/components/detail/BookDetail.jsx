import AddToCartButton from "../card/AddToCartButton"
import { Star } from "lucide-react" 
import Categories from "./Categories"
import PriceDisplay from "../card/PriceDisplay"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import DeleteFromCart from "../card/DeleteFromCart"

const BookDetail = ({libro}) => {
    const {state, dispatch} = useContext(CartContext)

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: libro
        })
    }

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: libro
        })
    }

    return(
        <div className="bg-white text-gray-800 w-full max-w-7xl mx-auto p-6 rounded-lg border mt-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        className="w-full h-auto rounded-lg shadow-md object-cover" 
                        src={libro.imgPortada} 
                        alt={libro.titulo} 
                    />
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-2">{libro.titulo}</h2>
                        <p className="text-xl text-gray-600">por {libro.autor}</p>
                        {/* <div className="flex my-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-6 h-6 ${i < libro.averageRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">({libro.reviews.length} reseñas)</span>
                        </div>  */}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <p className="text-justify text-gray-700 leading-relaxed">{libro.resumen}</p>
                    </div>

                    <div> 
                        <div className="flex items-end justify-between gap-4 mt-4">
                            <div className="text-center sm:text-left">
                                <PriceDisplay price={libro.precio} discount={libro.descuento} fontSize="2xl"/>
                            </div>
                            {!state.cart.find(item => item.id === libro.id) ? (
                                <AddToCartButton text="Añadir al carrito" onClick={addToCart} />
                            ) : (
                                <DeleteFromCart onClick={removeFromCart} />
                            )}
                        </div>

                        <Categories categorias={libro.categorias}/>

                        <div>
                            <p className="text-sm">Fecha de Publicación: {libro.fechaPublicacion} </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>  
    )   
}

export default BookDetail