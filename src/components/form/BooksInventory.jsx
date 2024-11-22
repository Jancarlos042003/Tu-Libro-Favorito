import { useState } from 'react';
import { Pencil, Save, Search, X } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../../../env';
import { token } from '../../helpers/auth';

const BooksInventory = ({ data, onUpdateSuccess }) => {
    const [editando, setEditando] = useState(null);
    const [stockEditado, setStockEditado] = useState(null);
    const [termino, setTermino] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [busquedaActiva, setBusquedaActiva] = useState(false);

    const iniciarEdicion = (inventario) => {
        setEditando(inventario.id);
        setStockEditado(inventario.stock);
    };


    const cancelarEdicion = () => {
        setEditando(null);
        setStockEditado(null);
    };


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
            
            setResultados(response.data);

        } catch (error) {
            console.error("Error al buscar libros:", error);
        } finally {
            setIsLoading(false)
        }
    };

    // Se está actualizando el estado "termino" cada vez que el usuario escribe algo
    const manejarCambio = (e) => {
        setTermino(e.target.value);
        if (!e.target.value.trim()) {
            setBusquedaActiva(false);
            setResultados([]);
        }
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        buscarLibros();
    };


    const guardarCambios = (id) => {
        const newData = {
            idLibro: editando,
            stock: stockEditado
        }

        axios.put(`${API_URL}/api/inventario/${id}`, newData, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then((resp) => {
            alert("Stock actualizado exitosamente.")

            onUpdateSuccess(resp.data); // Actualiza el estado del padre

            setEditando(null);
            setStockEditado(null);
        })
        .catch((error) => {
            console.error('Error completo:', error);
            alert(`Error al actualizar el libro: ${error.response?.data?.message || error.message}`)
        })
    };


    // Extrae los IDs de 'resultados'
    const idsResultados = busquedaActiva ? resultados.map(resultado => resultado.id) : [];

    // Filtra los elementos de 'data' cuyo 'libro.id' está en 'idsResultados'
    const inventariosConIdsEnData = busquedaActiva
    ? data.filter(inventario => idsResultados.includes(inventario.libro.id))
    : [];

    // Mostrar data completa si no hay búsqueda activa
    const displayData = !busquedaActiva ? data : inventariosConIdsEnData;

    return (
        <div className="container mx-auto bg-white rounded-lg border text-neutral-800">
            <div className='sm:flex justify-between p-4'>
                <h2 className="text-xl font-bold">Inventario</h2>

                <form className='flex justify-between mt-3 sm:mt-0' onSubmit={manejarSubmit}>
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
            
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">Libro</th>
                        <th className="text-left py-3 px-4">Autor</th>
                        <th className="text-left py-3 px-4">Stock</th>
                        <th className="text-left py-3 px-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan="4" className="py-20">
                                    <div className="flex justify-center items-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-800"></div>
                                        <span className="ml-2">Buscando...</span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            <>
                                {displayData.map(inventario => (
                                    <tr key={inventario.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4">{inventario.libro.titulo}</td>
                                        <td className="py-3 px-4">{inventario.libro.autor}</td>
                                        <td className="py-3 px-4">
                                            {editando === inventario.id ? (
                                                <input
                                                type="number"
                                                value={stockEditado}
                                                onChange={(e) => setStockEditado(parseInt(e.target.value))} // Se actualiza el stock
                                                min="0"
                                                className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            ) : (
                                                inventario.stock
                                            )}
                                        </td>
                                        <td className="py-3 px-4">
                                        {editando === inventario.id ? (
                                            <div className="flex gap-2">
                                            <button
                                                onClick={() => guardarCambios(inventario.id)}
                                                className="p-2 border border-green-600 bg-green-500 bg-opacity-50 rounded-lg text-green-600 hover:text-green-800 hover:border-green-800"
                                                title="Guardar"
                                            >
                                                <Save size={19} />
                                            </button>
                                            <button
                                                onClick={cancelarEdicion}
                                                className="p-2 border border-red-600 bg-red-500 bg-opacity-50 rounded-lg text-red-600 hover:text-red-800 hover:border-red-800"
                                                title="Cancelar"
                                            >
                                                <X size={19} />
                                            </button>
                                            </div>
                                        ) : (
                                            <button
                                            onClick={() => iniciarEdicion(inventario)}
                                            className="text-neutral-600 hover:text-neutral-800 p-2 border rounded-lg hover:bg-neutral-300 hover:border-neutral-800"
                                            title="Editar stock"
                                            >
                                            <Pencil size={18} />
                                            </button>
                                        )}
                                        </td>
                                    </tr>
                                ))}
                                {busquedaActiva && inventariosConIdsEnData.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="py-20 px-4 text-center font-bold text-gray-600">
                                            No se encontraron resultados para "{termino}"
                                        </td>
                                    </tr>
                                )}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BooksInventory;