    import { useParams } from "react-router-dom"
    import BookList from "../components/BookList"
    import BookFilter from "../components/filter/BookFilter"
    import useFetch from "../hooks/useFetch"
    import Loader from "../components/atoms/Loader"
    import FilterCategory from "../components/filter/FilterCategory"
    import Navigation from "../components/header/Navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../env"

    const ContentCategory = () => {
        // OBTENER EL ID DE LA CATEGORIA
        const params = useParams()

        // OBTENEMOS LOS LIBROS Y LA CATEGORIA
        const {data: libros, error: errorLibro, loading: loadingLibro} = useFetch(`api/libro`)

        // USEFETCH PARA CATEGORIA
        const [categoria, setCategoria] = useState()
        const [errorCategoria, setErrorCategoria] = useState()
        const [loadingCategoria, setLoadingCategoria] = useState(false)

        useEffect(() => {   
            if (params.id) {
                setLoadingCategoria(true)
                axios
                    .get(`${API_URL}/api/categoria/${params.id}`)
                    .then((resp) => {
                        setCategoria(resp.data)
                    })
                    .catch((error) => {
                        setErrorCategoria(error)
                    })
                    .finally(() => {
                        setLoadingCategoria(false)
                    })
            }
        }, [params.id])

        // ESTADO DE CARGA
        if(loadingCategoria || loadingLibro) return <Loader />

        // MANEJO DE ERRORES
        if(errorCategoria || errorLibro) {
            return (
                <div className="container mx-auto text-center py-10">
                    <h1 className="text-black text-xl">Error al cargar el contenido. Por favor, intente más tarde.</h1>
                </div>
            )
        }

        // Filtrar libros por categoría
        const librosCategoria = FilterCategory(libros, categoria.nombre)

        return(
            <>  
                <Navigation categoriaSeleccionada={params.id}/>
                <div className="container flex mx-auto justify-center my-1 sm:my-7 py-3 rounded-md">
                    <h1 className="text-black text-2xl font-bold uppercase">{categoria.nombre}</h1>
                </div>
                <div className="container flex mx-auto">
                    <BookFilter />
                    <BookList libros={librosCategoria} />
                </div>
            </>
        )
    }

    export default ContentCategory