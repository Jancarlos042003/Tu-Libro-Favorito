import { Star } from "lucide-react"

const ReviewsSection = ({ reviews }) =>{
    return(
        <section className="bg-white text-gray-800 w-full mx-auto p-6 rounded-lg border mt-8">
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">Reseñas de Lectores</h3>
            {reviews.map((review) => (
                <div key={review.id} className="mb-4 pb-4 border-b last:border-b-0">
                    <div className="flex items-center mb-2">
                        <span className="font-bold mr-2">{review.user}</span>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                </div>
                
            ))}
        </section>
    )
}

export default ReviewsSection