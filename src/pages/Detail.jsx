import { useParams } from "react-router-dom"
import BookDetail from "../components/detail/BookDetail"
import BookPreview from "../components/review/BookPreview"
import ReviewForm from "../components/review/ReviewForm"
import ReviewsSection from "../components/review/ReviewsSection"
import { useEffect, useState } from "react"
import { API_URL } from "../../env"
import axios from "axios"
import Loader from "../components/atoms/Loader"


const Detail = () => {
    // const [reviews, setReviews] = useState(libro.reviews)

    // PARA OBTENER EL ID DE LA URL
    const params = useParams()
    const [libro, setLibro] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    console.log(params.id)

    useEffect(() => {   
        if (params.id) {
            setLoading(true)
            axios
                .get(`${API_URL}/api/libro/${params.id}`)
                .then((resp) => {
                    console.log(resp)
                    setLibro(resp.data)
                })
                .catch((error) => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [params.id])

    if (loading) return <Loader />
    if (error) return <div>Error: {error.message}</div>

    // Se verifica primero que libro obtenga la data obtenida de la API
    return(
        <>
            {libro ?
                <>
                    <BookDetail libro={libro} />
                    <BookPreview titulo={libro.titulo} vistaPrevia={libro.vistaPrevia} />
                </> : <Loader />
            }
            {/* <div className="block md:flex max-w-7xl mx-auto gap-3">
                <ReviewsSection reviews={reviews} />
                <ReviewForm reviews={reviews} setReviews={setReviews} />
            </div> */}
        </>
    )
}

export default Detail