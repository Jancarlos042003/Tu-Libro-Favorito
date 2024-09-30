import SendButton from "./SendButtom"
import StarRating from "./StarRating";
import { useState } from "react";

const ReviewForm = ({reviews, setReviews}) => {
    const [rating, setRating] = useState(0);
    const [userRating, setUserRating] = useState(0);
    const [reviewText, setReviewText] = useState('')

    const handleSubmitReview = (e) => {
        e.preventDefault()
        
        // Aquí iría la lógica para enviar la reseña al servidor
        const newReview = {
            id: reviews.length + 1,
            user: 'Usuario',
            rating: userRating,
            comment: reviewText
        }

        // Actualizar el estado con la nueva reseña
        setReviews([...reviews, newReview])

        // Reiniciar el formulario
        setRating(0);
        setUserRating(0)
        setReviewText('')
    }

    return(
        <>
            <section className="bg-white text-gray-800 w-full mx-auto p-6 rounded-lg border mt-8 h-96">
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">Añadir una Reseña</h3>
                <form onSubmit={handleSubmitReview}>
                    <div>
                        <h4 className="text-base text-gray-900 mb-2">Tu calificación</h4>
                        <StarRating 
                            rating={rating}
                            setRating={setRating}
                            userRating={userRating}
                            setUserRating={setUserRating}
                            totalStars={5}
                            size="w-7 h-7"
                            activeColor="text-yellow-400"
                            inactiveColor="text-gray-300"
                        />
                    </div>

                    <label>
                        <h4 className="text-base text-gray-900 mb-2 mt-4">Tu reseña</h4>
                        <textarea 
                            className="w-full rounded-md p-2 bg-transparent border resize-none mb-2" 
                            name="" 
                            id="review"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)} 
                            placeholder="Escribe tu reseña aquí..." 
                            rows={5}>
                        </textarea>
                    </label>

                    <SendButton />
                </form>
            </section>
        </>
    )
}

export default ReviewForm