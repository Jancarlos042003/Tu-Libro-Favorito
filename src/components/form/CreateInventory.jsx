import React, { useState } from 'react';

const CreateInventary = ({ onAgregarLibro }) => {
    const [nuevoLibro, setNuevoLibro] = useState({
    nombre: '',
    autor: '',
    stock: ''
    });

    const [sugerenciasLibros, setSugerenciasLibros] = useState([]);
    const [sugerenciasAutores, setSugerenciasAutores] = useState([]);
    const [mostrarSugerenciasLibros, setMostrarSugerenciasLibros] = useState(false);
    const [mostrarSugerenciasAutores, setMostrarSugerenciasAutores] = useState(false);

    const buscarLibros = async (query) => {
    if (query.length < 2) return;
    try {
        const response = await fetch(`https://tu-api.com/books/search?q=${query}`);
        const data = await response.json();
        setSugerenciasLibros(data);
    } catch (error) {
        console.error('Error al buscar libros:', error);
    }
    };

    const buscarAutores = async (query) => {
    if (query.length < 2) return;
    try {
        const response = await fetch(`https://tu-api.com/authors/search?q=${query}`);
        const data = await response.json();
        setSugerenciasAutores(data);
    } catch (error) {
        console.error('Error al buscar autores:', error);
    }
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoLibro.nombre || !nuevoLibro.autor || !nuevoLibro.stock) {
        alert('Por favor complete todos los campos');
        return;
    }
    
    onAgregarLibro(nuevoLibro);
    
    setNuevoLibro({
        nombre: '',
        autor: '',
        stock: ''
    });
    };

    return (
        <div className="container mx-auto mb-8 bg-white rounded-lg border p-6 text-black">
            <h2 className="text-xl font-bold mb-6">Agregar Nuevo Libro</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col relative">
                <input
                type="text"
                placeholder="Nombre del libro"
                value={nuevoLibro.nombre}
                onChange={(e) => {
                    setNuevoLibro({...nuevoLibro, nombre: e.target.value});
                    buscarLibros(e.target.value);
                    setMostrarSugerenciasLibros(true);
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                />
                {mostrarSugerenciasLibros && sugerenciasLibros.length > 0 && (
                <div className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {sugerenciasLibros.map((libro, index) => (
                    <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                        setNuevoLibro({...nuevoLibro, nombre: libro.nombre});
                        setMostrarSugerenciasLibros(false);
                        }}
                    >
                        {libro.nombre}
                    </div>
                    ))}
                </div>
                )}
            </div>

            <div className="flex flex-col relative">
                <input
                type="text"
                placeholder="Autor"
                value={nuevoLibro.autor}
                onChange={(e) => {
                    setNuevoLibro({...nuevoLibro, autor: e.target.value});
                    buscarAutores(e.target.value);
                    setMostrarSugerenciasAutores(true);
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                />
                {mostrarSugerenciasAutores && sugerenciasAutores.length > 0 && (
                <div className="absolute z-10 w-full bg-white mt-1 border border-neutral-800 rounded-md shadow-lg max-h-60 overflow-auto">
                    {sugerenciasAutores.map((autor, index) => (
                    <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                        setNuevoLibro({...nuevoLibro, autor: autor.nombre});
                        setMostrarSugerenciasAutores(false);
                        }}
                    >
                        {autor.nombre}
                    </div>
                    ))}
                </div>
                )}
            </div>

            <div className="flex flex-col">
                <input
                type="number"
                placeholder="Stock"
                value={nuevoLibro.stock}
                onChange={(e) => setNuevoLibro({...nuevoLibro, stock: parseInt(e.target.value)})}
                min="0"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                />
            </div>

            <button 
                type="submit"
                className="w-auto bg-black text-white py-2 px-4 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800"
            >
                Agregar Libro
            </button>
            </form>
        </div>
    );
};

export default CreateInventary;