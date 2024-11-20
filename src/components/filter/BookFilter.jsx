import React, { useState } from "react";
import ExpandableFilter from "./ExpandableFilter";
import { Filter, X } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import Loader from "../atoms/Loader";

const BookFilter = ( { filtros, setFiltros, libros, actualizarLibrosFiltrados } ) => {
    console.log(libros)

    const [isOpen, setIsOpen] = useState(false);
    const toggleFilters = () => setIsOpen(!isOpen);

    // Obtener autores únicos y ordenarlos
    const autoresUnicos = [...new Set(libros.map(libro => libro.autor).filter(autor => autor))];
    const autoresOrdenados = autoresUnicos.sort((a, b) => a.localeCompare(b));
    
    // OBTENEMOS Y ORDENAMOS LOS EDITORIALES
    const {data: editoriales, error: errorEditorial, loading: loadingEditorial} = useFetch(`api/editorial`)
    const editorialOrdenados = editoriales.map(editorial => editorial.nombre).sort((a, b) => a.localeCompare(b))

    const filterData = {
        autores: autoresOrdenados,
        editoriales: editorialOrdenados,
    };

    const handleFilterChange = (filterType, selectedOptions) => {
        const nuevosFiltros = {
            ...filtros,
            [filterType.toLowerCase()]: selectedOptions
        };
        setFiltros(nuevosFiltros);
    
        // Filtrar los libros basándose en los nuevos filtros
        const librosFiltrados = libros.filter(libro => {
            const autorCoincide = 
                !nuevosFiltros.autores.length || 
                nuevosFiltros.autores.includes(libro.autor);
            const editorialCoincide = 
                !nuevosFiltros.editoriales.length || 
                nuevosFiltros.editoriales.includes(libro.editorial?.nombre);
            return autorCoincide && editorialCoincide;
        });
    
        actualizarLibrosFiltrados(librosFiltrados);
    };
    

    // ESTADO DE CARGA
    if(loadingEditorial) return <Loader />

    // MANEJO DE ERRORES
    if(errorEditorial) {
        return (
            <div className="container mx-auto text-center py-10">
                <h1 className="text-black text-xl">Error al cargar el contenido. Por favor, intente más tarde.</h1>
            </div>
        )
    }

    return ( 
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
                    onClick={toggleFilters}
                />
            )}
            
            <button 
                onClick={toggleFilters}
                className="lg:hidden fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg z-40"
            >
                <Filter size={24} />
            </button>

            <div className={`
                fixed lg:relative top-0 right-0 h-screen w-80 lg:w-[390px] z-50 lg:z-0
                bg-white text-black shadow-md p-4 
                overflow-y-auto scrollbar-hide
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                        <Filter size={20}/>
                        <h2 className="text-2xl font-bold">Filtros</h2>
                    </div>
                    <button onClick={toggleFilters} className="lg:hidden">
                        <X size={19} />
                    </button>
                </div>
                
                <aside className="flex flex-col gap-3 overflow-y-auto scrollbar-hide">
                    {Object.entries(filterData).map(([filterType, options]) => (
                        <ExpandableFilter
                            key={filterType}
                            title={filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                            options={options}
                            onFilterChange={handleFilterChange}
                        />
                    ))}
                </aside>
            </div>
        </>
    );
};

export default BookFilter;