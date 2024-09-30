import BookDetail from "../components/detail/BookDetail"
import BookPreview from "../components/review/BookPreview"
import ReviewForm from "../components/review/ReviewForm"
import ReviewsSection from "../components/review/ReviewsSection"
import { useState } from "react"

const libro = { 
    id: 11, 
    title: "Invitación al viaje y otros cuentos inéditos", 
    description: "Es una colección póstuma de relatos del escritor peruano Julio Ramón Ribeyro, que reúne cuentos inéditos o poco conocidos, mostrando su capacidad para captar la cotidianidad con una mirada melancólica y reflexiva. Ribeyro, reconocido por su estilo sobrio y observador, explora en estas historias temas recurrentes como la soledad, las frustraciones, y las pequeñas tragedias humanas. En este libro, su prosa íntima invita a los lectores a un viaje a través de las emociones y experiencias de personajes sencillos, revelando su gran talento para retratar la condición humana.", 
    discount: 15, 
    author: "Julio Ramón Ribeyro", 
    publication_date: "04/03/2003",
    price: 59.00, 
    image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0",
    categories: [
        {id: 20, name: "Ficción"}, 
        {id: 21, name: "Clásico"}, 
        {id: 22, name: "Novela"}
    ],
    reviews:[
        { id: 1, user: 'Alice', rating: 5, comment: '¡Un clásico imprescindible!' },
        { id: 2, user: 'Bob', rating: 4, comment: 'Me encantó la prosa de Fitzgerald.' }
    ],
    averageRating: 3
}

const Detail = () => {
    const [reviews, setReviews] = useState(libro.reviews)

    return(
        <>
            <BookDetail book={libro} />
            <BookPreview />
            <div className="block md:flex max-w-7xl mx-auto gap-3">
                <ReviewsSection reviews={reviews} />
                <ReviewForm reviews={reviews} setReviews={setReviews} />
            </div>
        </>
    )
}

export default Detail