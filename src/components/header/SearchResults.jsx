import { useSearchParams } from 'react-router-dom';
import useBookSearch from '../../hooks/useBookSearch';
import Loader from '../atoms/Loader';
import Navigation from './Navigation';
import BookFilter from '../filter/BookFilter';
import { useState } from 'react';
import BookList from '../BookList';
import NoResultsFound from './NoResultsFound';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { data: libros, isLoading, isError } = useBookSearch(query);

    // Estado de los filtros
    const [filtros, setFiltros] = useState({ 
        autores: [], 
        editoriales: [] 
    });
    const [librosFiltrados, setLibrosFiltrados] = useState([]);

    console.log(libros)

    if (isLoading) return <Loader />;
    if (isError) return <p>Error al cargar los resultados. Por favor, intente más tarde.</p>;

    return (
        <div>
            {
                libros.length === 0 ? (
                    <div className='w-full h-full mt-16 flex items-center justify-center'>
                        <NoResultsFound query={query} />
                    </div>
                ) : (
                    <div>
                        <Navigation />
                        <div className='container mx-auto mt-5'>
                            <h1 className="text-2xl text-black font-bold">Resultados para: {query}</h1>
                        </div>
                        <div className="flex container mx-auto py-10">
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
                    </div>
                )
            }
        </div>
    );
};

export default SearchResults;