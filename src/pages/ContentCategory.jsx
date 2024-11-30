import { useParams } from "react-router-dom"
import BookList from "../components/BookList"
import BookFilter from "../components/filter/BookFilter"
import Loader from "../components/atoms/Loader"
import Navigation from "../components/header/Navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../env"

const ContentCategory = () => {
    // OBTENER EL ID DE LA CATEGORIA
    const params = useParams()

    // Estado de la categoría y libros
    const [categoria, setCategoria] = useState(null);
    const [libros, setLibros] = useState([]);
    const [errorCategoria, setErrorCategoria] = useState(null);
    const [errorLibro, setErrorLibro] = useState(null);
    const [loadingCategoria, setLoadingCategoria] = useState(false);
    const [loadingLibro, setLoadingLibro] = useState(false);

    // Estado de los filtros
    const [filtros, setFiltros] = useState({ 
        autores: [], 
        editoriales: [] 
    });
    const [librosFiltrados, setLibrosFiltrados] = useState([]);

    // Obtener la categoría y los libros cuando cambia params.id
    useEffect(() => {   
        if (params.id) {
            // Resetear lo estados
            setCategoria(null);
            setLibros([]);
            setErrorCategoria(null);
            setErrorLibro(null);
            setLibrosFiltrados([]);
            setFiltros({ autores: [], editoriales: [] });

            // Obtener la categoria
            setLoadingCategoria(true);
            axios
                .get(`${API_URL}/api/categoria/${params.id}`)
                .then((resp) => {
                    setCategoria(resp.data);
                })
                .catch((error) => {
                    setErrorCategoria(error);
                })
                .finally(() => {
                    setLoadingCategoria(false);
                });

            // Obtener los libros por categoria
            setLoadingLibro(true);
            axios
                .get(`${API_URL}/api/libro/categoria/${params.id}`)
                .then((resp) => {
                    setLibros(resp.data);
                })
                .catch((error) => {
                    setErrorLibro(error);
                })
                .finally(() => {
                    setLoadingLibro(false);
                });
        }
    }, [params.id]);

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

    return(
        <>  
            <Navigation categoriaSeleccionada={params.id}/>
            {categoria && (
                <div className="container flex mx-auto justify-center my-1 sm:my-7 py-3 rounded-md">
                    <h1 className="text-black text-2xl font-bold uppercase">{categoria.nombre}</h1>
                </div>
            )}
            <div className="container flex mx-auto">
                <BookFilter 
                    filtros={filtros} 
                    setFiltros={setFiltros} 
                    libros={libros} 
                    actualizarLibrosFiltrados={setLibrosFiltrados}
                />
                {
                    // Verificamos si hay filtros aplicados
                    (filtros.autores.length > 0 || filtros.editoriales.length > 0) && librosFiltrados.length === 0 ? (
                        <div className="w-full h-screen p-4 text-left">
                            <h2 className="text-gray-600 text-base">No hay libros que coincidan con los filtros seleccionados.</h2>
                        </div>
                    ) : (
                        <BookList libros={librosFiltrados.length ? librosFiltrados : libros} />
                    )
                }
            </div>
        </>
    )
}

export default ContentCategory