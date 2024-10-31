import { Pencil, PencilLine, Star, Trash2 } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import { API_URL } from "../../../env"
import { token } from "../../helpers/auth"

const ReviewsSection = ({ resenias, setResenias, userData }) => {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
    const [editRating, setEditRating] = useState(0);

    const handleDelete = (reseniaId) => {
        axios.delete(`${API_URL}/api/resenia/${reseniaId}`, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then(() => {
            // Actualizar el estado removiendo la reseña eliminada
            setResenias(resenias.filter(resenia => resenia.id !== reseniaId));
        })
        .catch(error => {
            console.error('Error al eliminar la reseña:', error);
        });
    };

    const handleEdit = (reseniaId) => {
        const data = {
            comentario: editText,
            calificacion: editRating
        };

        axios.put(`${API_URL}/api/resenia/${reseniaId}`, data, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then(response => {
            // Actualizar el estado con la reseña editada
            setResenias(resenias.map(resenia => 
                resenia.id === reseniaId ? { 
                    ...resenia,           // Mantén todas las propiedades existentes
                    ...data,     // Sobrescribe con los datos actualizados
                    usuario: resenia.usuario // Asegúrate de mantener el usuario
                } 
                : resenia
            ));
            
            // Resetear el estado de edición
            setEditingId(null);
            setEditText('');
            setEditRating(0);
        })
        .catch(error => {
            console.error('Error al editar la reseña:', error);
        });
    };

    const startEditing = (resenia) => {
        setEditingId(resenia.id);
        setEditText(resenia.comentario);
        setEditRating(resenia.calificacion);
    };

    return(
        <section className="bg-white text-gray-800 w-full mx-auto p-6 rounded-lg border border-gray-300 mt-8">
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">Reseñas de Lectores</h3>
            {resenias.length !== 0 ? resenias.map((resenia) => (
                <div key={resenia.id} className="mb-4 pb-4 border-b last:border-b-0">
                    {editingId === resenia.id ? (
                        // Formulario de edición
                        <div className="space-y-4">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => {
                                    const starValue = index + 1;
                                    return (
                                        <button
                                            type="button"
                                            key={`${resenia.id}-edit-star-${starValue}`}
                                            className={`bg-transparent border-none outline-none cursor-pointer ${
                                                starValue <= editRating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                            onClick={() => setEditRating(starValue)}
                                        >
                                            <Star 
                                                className="w-7 h-7"
                                                fill={starValue <= editRating ? "currentColor" : "none"} 
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                            <textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="w-full rounded-md p-2 bg-transparent border resize-none"
                                rows={3}
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(resenia.id)}
                                    className="px-4 py-2 bg-neutral-700 text-white rounded-md hover:bg-black"
                                >
                                    Guardar
                                </button>
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Vista normal de la reseña
                        <>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <span className="font-bold mr-2">{resenia.usuario.nombreCompleto}</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={`${resenia.id}-star-${i}`}
                                                className={`w-4 h-4 ${i < resenia.calificacion ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {userData?.id === resenia.usuario.id && (
                                    <div className="flex gap-4 items-end">
                                        <button
                                            onClick={() => startEditing(resenia)}
                                            className="text-neutral-700 hover:text-black"
                                            title="Editar reseña"
                                        >
                                            <Pencil size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(resenia.id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Eliminar reseña"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-700">{resenia.comentario}</p>
                        </>
                    )}
                </div>
            )) : (
                <div className="w-full h-60 flex flex-col items-center justify-center">
                    <PencilLine size={60} className="text-gray-300" />
                    <span className="text-gray-300">Sé el primero en comentar ...</span>
                </div>
            )}
        </section>
    )
}

export default ReviewsSection