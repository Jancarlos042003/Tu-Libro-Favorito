import React from 'react';
import { useState } from 'react';
import Loader from '../atoms/Loader';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Navigation({ categoriaSeleccionada }) {
    const [isOpen, setIsOpen] = useState(false);
    const {data: categories, error: errorCategoria, loading: loadingCategoria} = useFetch(`api/categoria`)

    if(loadingCategoria) return <Loader />
    if(errorCategoria) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    return (
        <nav className="bg-gray-200 p-2 shadow-lg w-full">
            <button 
                className="py-2 bg-black lg:hidden w-full focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-center">
                    <span className="mr-2">Categorías</span>
                    <span className="icon-[memory--menu-down]"></span>
                </div>
            </button>
            <ul className={`${isOpen ? 'block' : 'hidden'} pt-2 lg:pt-0 lg:flex lg:justify-center lg:space-x-5 flex-nowrap text-center`}>
                {categories.map((category) => (
                    <li 
                        key={category.id} 
                        className={`p-2 lg:py-1 hover:bg-slate-300 rounded-lg 
                            ${categoriaSeleccionada == category.id ? 'bg-slate-300' : ''}`}
                    >
                        <Link 
                            to={`/categoria/${category.id}`} 
                            className={`font-medium ${
                                categoriaSeleccionada == category.id 
                                    ? 'text-indigo-600' 
                                    : 'text-gray-700 hover:text-indigo-600'
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {category.nombre}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;