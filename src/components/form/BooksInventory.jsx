import { useState } from 'react';
import { Pencil, Save, X } from 'lucide-react';

const BooksInventory = ({ libros, onActualizarStock }) => {
    const [editando, setEditando] = useState(null);
    const [stockEditado, setStockEditado] = useState(null);

    const iniciarEdicion = (libro) => {
        setEditando(libro.id);
        setStockEditado(libro.stock);
    };

    const cancelarEdicion = () => {
        setEditando(null);
        setStockEditado(null);
    };

    const guardarCambios = (id) => {
        onActualizarStock(id, stockEditado);
        setEditando(null);
        setStockEditado(null);
    };

    return (
        <div className="container mx-auto bg-white rounded-lg border text-neutral-800">
            <h2 className="text-xl font-bold p-6 border-b">Inventario de Libros</h2>
            
            <div className="overflow-x-auto">
                <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4">Nombre</th>
                    <th className="text-left py-3 px-4">Autor</th>
                    <th className="text-left py-3 px-4">Stock</th>
                    <th className="text-left py-3 px-4">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => (
                    <tr key={libro.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">{libro.nombre}</td>
                        <td className="py-3 px-4">{libro.autor}</td>
                        <td className="py-3 px-4">
                        {editando === libro.id ? (
                            <input
                            type="number"
                            value={stockEditado}
                            onChange={(e) => setStockEditado(parseInt(e.target.value))}
                            min="0"
                            className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ) : (
                            libro.stock
                        )}
                        </td>
                        <td className="py-3 px-4">
                        {editando === libro.id ? (
                            <div className="flex gap-2">
                            <button
                                onClick={() => guardarCambios(libro.id)}
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
                            onClick={() => iniciarEdicion(libro)}
                            className="text-neutral-600 hover:text-neutral-800 p-2 border rounded-lg hover:bg-neutral-300 hover:border-neutral-800"
                            title="Editar stock"
                            >
                            <Pencil size={18} />
                            </button>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default BooksInventory;