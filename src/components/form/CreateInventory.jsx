import React, { useRef, useState } from 'react';
import { API_URL } from '../../../env';
import axios from 'axios';
import { token } from '../../helpers/auth';
import { Search } from 'lucide-react';

const CreateInventary = ({ inventario }) => {

    const [termino, setTermino] = useState("");
    const [resultados, setResultados] = useState([]);

    const [showWarning, setShowWarning] = useState(false);

    // Agregar una referencia al formulario de inventario
    const formRef = useRef(null);

    const buscarLibros = async () => {
        if (!termino.trim()) return; // Evitar búsquedas vacías

        try {
            const response = await axios.get(`${API_URL}/api/libro/buscar`, {
                params: { termino },
            });
            
            const librosEncontrados = Array.isArray(response.data) ? response.data : [];
            
            // Si no hay resultados, muestra el mensaje de advertencia
            if (librosEncontrados.length === 0) {
                setShowWarning(true);
            } else {
                setShowWarning(false);
            }

            setResultados(librosEncontrados);

            console.log(librosEncontrados)
        } catch (error) {
            console.error("Error al buscar libros:", error);
        }
    };

    // Se está actualizando el estado "termino" cada vez que el usuario escribe algo
    const manejarCambio = (e) => {
        setTermino(e.target.value);
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        buscarLibros();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si hay resultados y si el libro ya existe en el inventario
        if (inventario.some(item => item.libro.id === resultados[0].id)) {
            alert("Este libro ya existe en el inventario.");

            // Resetear todos los campos
            setTermino("");
            setResultados([]);
            formRef.current.reset();
            return;
        }

        const data = {
            idLibro: resultados[0].id,
            stock: e.target.stock.value
        }
        
        axios.post(`${API_URL}/api/inventario`, data, {
            headers:{
                Authorization: `Bearer ${token()}`
            }
        })
        .then(() => {
            alert("Inventario creado exitosamente.")
            
            // Resetear todos los campos
            setTermino("");
            setResultados([]);
            formRef.current.reset();
        })
        .catch((error) => {
            console.error('Error completo:', error);
            alert(`Error al crear el libro: ${error.response?.data?.message || error.message}`)
        })
    };

    return (
        <div className="container mx-auto mb-8 bg-white rounded-lg border p-4 sm:p-6 text-black">
            <h2 className="text-xl font-bold mb-6">Agregar Stock</h2>

            {showWarning && (
                <p className="text-center p-2 bg-red-100 text-red-800 mb-3">
                    No se encontraron resultados.
                </p>
            )}

            <form className='flex justify-between mb-4' onSubmit={manejarSubmit}>
                <input
                    type="text"
                    value={termino}
                    onChange={manejarCambio}
                    placeholder="Buscar por ISBN"
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
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col relative">
                    <input
                    type="text"
                    placeholder="Nombre del libro"
                    value={resultados && resultados.length > 0 ? resultados[0].titulo : ''}
                    disabled={!!resultados}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                </div>

                <div className="flex flex-col relative">
                    <input
                    type="text"
                    placeholder="Autor"
                    value={resultados && resultados.length > 0 ? resultados[0].autor : ''}
                    disabled={!!resultados}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                    type="number"
                    name='stock'
                    placeholder="Stock"
                    min="1"
                    required
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                </div>

                <button 
                    type="submit"
                    title='agregar'
                    disabled={resultados.length > 0 ? false : true}
                    className="w-auto bg-black text-white py-2 px-4 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                >
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default CreateInventary;