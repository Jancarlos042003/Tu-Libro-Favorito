import { useParams } from "react-router-dom"
import BookDetail from "../components/detail/BookDetail"
import BookPreview from "../components/review/BookPreview"
import ReviewForm from "../components/review/ReviewForm"
import ReviewsSection from "../components/review/ReviewsSection"
import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../env"
import axios from "axios"
import Loader from "../components/atoms/Loader"
import useFetch from "../hooks/useFetch"
import { UserContext } from "../context/UserContext"


const Detail = () => {
    
    // PARA OBTENER EL ID DE LA URL
    const params = useParams()
    
    const [resenias, setResenias] = useState([])

    // USEFETCH PARA OBTENER LAS RESEÑAS POR EL ID DEL LIBRO
    const{data, error: errorResenias, loading: loadingResenias} = useFetch(`api/resenia/${params.id}`)

    // CONTEXTO DEL USUARIO
    const { userData } = useContext(UserContext)

    // USEFETCH PARA LIBRO
    const [libro, setLibro] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    // Actualizamos el estado cuando llega la data
    useEffect(() => {
        if (data) {
            setResenias(data)
        }
    }, [data])

    useEffect(() => {   
        if (params.id) {
            setLoading(true)
            axios
                .get(`${API_URL}/api/libro/${params.id}`)
                .then((resp) => {
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
    if (error) return <div>Error: {error}</div>

    if (loadingResenias) return <Loader />
    if (errorResenias) return <div>Error: {errorResenias}</div>

    // Se verifica primero que libro obtenga la data obtenida de la API
    return(
        <>
            {libro ?
                <div className="mx-2 sm:mx-auto">
                    <BookDetail libro={libro} />
                    <BookPreview titulo={libro.titulo} vistaPrevia={libro.vistaPrevia} />
                </div> : <Loader />
            }
            <div className="block md:flex max-w-7xl mx-2 sm:mx-auto gap-3">
                <ReviewsSection resenias={resenias} setResenias={setResenias} userData={userData} />
                <ReviewForm resenias={resenias} setResenias={setResenias}  idLibro={params.id} />
            </div>
        </>
    )
}

export default Detail