import axios from "axios";
import SendButton from "./SendButtom"
import { useCallback, useContext, useState } from "react";
import { API_URL } from "../../../env";
import { token } from "../../helpers/auth";
import { UserContext } from "../../context/UserContext";
import { Star } from "lucide-react";

const ReviewForm = ({resenias= [], setResenias, idLibro}) => {
    const [rating, setRating] = useState(0);
    const [userRating, setUserRating] = useState(0);
    const [reviewText, setReviewText] = useState('')

    const {userData} = useContext(UserContext)

    const handleSubmitReview = (e) => {
        e.preventDefault()
        
        const data =  {
            comentario: e.target.comentario.value,
            calificacion: userRating
        }

        // Enviar la reseña al servidor
        axios.post(`${API_URL}/api/resenia/${userData.id}/${idLibro}`, data, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then(resp => {
            // Actualizamos el estado con la nueva reseña incluyendo los datos del usuario
            const nuevaResenia = {
                ...resp.data,
                usuario: {
                    id: userData.id,
                    nombreCompleto: userData.nombreCompleto
                }
            }
            setResenias([...resenias, nuevaResenia])

            // Reiniciar el formulario
            setRating(0);
            setUserRating(0)
            setReviewText('')
        })
        .catch(error => {
            console.error('Error al enviar la reseña:', error)
        })
    }

    const handleClick = useCallback((index) => {
        setRating(index);
        setUserRating(index);
    }, [setRating, setUserRating]);

    const handleMouseEnter = useCallback((index) => {
        setUserRating(index);
    }, [setUserRating]);

    const handleMouseLeave = useCallback(() => {
        setUserRating(rating);
    }, [setUserRating, rating]);

    return(
        <>
            <section className="bg-white text-gray-800 w-full mx-auto p-6 rounded-lg border border-gray-300 mt-8 h-96">
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">Añadir una Reseña</h3>
                <form onSubmit={handleSubmitReview}>
                    <div>

                        <div className="flex" role="group" aria-label={`Rate this item ${rating} out of ${5} stars`}>
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <button
                                        type="button"
                                        key={starValue}
                                        className={`bg-transparent border-none outline-none cursor-pointer ${
                                            starValue <= (userRating || rating) ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                        onClick={() => handleClick(starValue)}
                                        onMouseEnter={() => handleMouseEnter(starValue)}
                                        onMouseLeave={handleMouseLeave}
                                        aria-label={`Rate ${starValue} star${starValue !== 1 ? 's' : ''}`}
                                        aria-pressed={starValue <= rating}
                                    >
                                        <Star 
                                            className="w-7 h-7"
                                            fill={starValue <= (userRating || rating) ? "currentColor" : "none"} 
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <label>
                        <h4 className="text-base text-gray-900 mb-2 mt-4">Tu reseña</h4>
                        <textarea 
                            className="w-full rounded-md p-2 bg-transparent border border-gray-300 resize-none mb-2" 
                            name="comentario" 
                            id="review"
                            value={reviewText}
                            required
                            onChange={(e) => setReviewText(e.target.value)} 
                            placeholder="Escribe tu reseña aquí..." 
                            rows={5}>
                        </textarea>
                    </label>

                    <SendButton text="Publicar Reseña" />
                </form>
            </section>
        </>
    )
}

export default ReviewForm