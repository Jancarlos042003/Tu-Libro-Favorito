import { Link } from "react-router-dom";
import BookList from "../components/booklist/BookList"
import CreateButton from "../components/buttons/CreateButton"
import { CirclePlus, Search } from 'lucide-react';
import useFetch from "../hooks/useFetch";
import Loader from "../components/atoms/Loader";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../env";

const AdminHome = () => {

    const [termino, setTermino] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [busquedaActiva, setBusquedaActiva] = useState(false);

    const {data, error, loading} = useFetch("api/libro")

    const buscarLibros = async () => {
        if (!termino.trim()) { // Evita busquedas vacias
            setBusquedaActiva(false);
            setResultados([]);
            return;
        }
    
        setBusquedaActiva(true);
        setIsLoading(true)

        try {
            const response = await axios.get(`${API_URL}/api/libro/buscar`, {
                params: { termino },
            });
            
            console.log(response.data)
            setResultados(response.data);

        } catch (error) {
            console.error("Error al buscar libros:", error);
        } finally {
            setIsLoading(false)
        }
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        buscarLibros();
    };

    const manejarCambio = (e) => {
        setTermino(e.target.value);
        if (!e.target.value.trim()) {
            setBusquedaActiva(false);
            setResultados([]);
        }
    };

    if(loading) return <Loader />
    if(error) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>
    
    return(
        <div className="container m-auto">
            <div className="flex justify-between items-center py-2">
                <h1 className="text-black text-3xl font-bold">Todos los Libros</h1>
                <Link to={"/admin/crear"}>
                    <CreateButton Icon={CirclePlus} palabra={"Libro"} />
                </Link>
            </div>
            <div className="mb-3">
                <form className='flex justify-between mt-3 sm:mt-0 text-black' onSubmit={manejarSubmit}>
                    <input
                        type="text"
                        value={termino}
                        onChange={manejarCambio}
                        placeholder="Buscar ..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    <button 
                        type="submit"
                        title='buscar'
                        className="w-auto bg-black text-white px-3 ml-2 rounded-md hover:bg-neutral-800"
                    >
                        <Search size={20} />
                    </button>
                </form>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center mt-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-800"></div>
                    <span className="ml-2 text-black">Buscando...</span>
                </div>
            ) : (
                <BookList books={busquedaActiva ? resultados : data} />
            )}
        </div>
    )
}

export default AdminHome