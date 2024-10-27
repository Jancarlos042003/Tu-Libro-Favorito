import Input from "../input/Input";
import { FilePenLine, Trash2 } from "lucide-react"
import TextArea from "../textArea/TextArea";
import { useState, useEffect } from "react";
import CategorySelector from "./CategorySelector";
import axios from "axios";
import { API_URL } from "../../../env";
import { token } from "../../helpers/auth";
import { useParams } from "react-router-dom";

const EditBook = () => {

    const params = useParams()
    const [producto, setProducto] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (params.id) {
            setLoading(false)
            axios
                .get(`${API_URL}/api/libro/${params.id}`)
                .then((resp) => {
                    setProducto(resp.data)
                })
                .catch((error) => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [])
    
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        titulo: "",
        isbn: "",
        precio: 0,
        descuento: 0,
        descripcion: "",
        resumen: "",
        vistaPrevia: "",
        imagenPortada: "",
        imagenSubportada: "",
        fechaPublicacion: "",
        autores: [""],
        editorial: "",
        categorias: ["0"],
        subcategorias: ["0"]
    });

    // Actualizar el formData cuando se proporciona un libro
    useEffect(() => {
        if (producto) {
            setFormData({
                titulo: producto.titulo || "",
                isbn: producto.isbn || "",
                precio: producto.precio || 0,
                descuento: producto.descuento || 0,
                descripcion: producto.descripcion || "",
                resumen: producto.resumen || "",
                vistaPrevia: producto.vistaPrevia || "",
                imagenPortada: producto.imagenPortada || "",
                imagenSubportada: producto.imagenSubportada || "",
                fechaPublicacion: producto.fechaPublicacion || "",
                autores: producto.autor || [],
                editorial: producto.editorial || "",
                categorias: producto.categorias || [],
                subcategorias: producto.subcategorias || []
            });
        }
    }, [producto]);

    const handleInputChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        // Restauramos los valores originales del libro y desactivamos el modo de edición
        setIsEditing(false);
        setFormData({
            titulo: producto.titulo || "",
            isbn: producto.isbn || "",
            precio: producto.precio || 0,
            descuento: producto.descuento || 0,
            descripcion: producto.descripcion || "",
            resumen: producto.resumen || "",
            vistaPrevia: producto.vistaPrevia || "",
            imagenPortada: producto.imagenPortada || "",
            imagenSubportada: producto.imagenSubportada || "",
            fechaPublicacion: producto.fechaPublicacion || "",
            autores: producto.autor || [],
            editorial: producto.editorial || "",
            categorias: producto.categorias || [],
            subcategorias: producto.subcategorias || []
        });
    };



    const publishers = [
        { id: 1, name: "Editorial Planeta" },
        { id: 2, name: "Penguin Random House" },
        { id: 3, name: "Anagrama" },
    ];

    const categories = [
        { id: 1, name: "Ficción" },
        { id: 2, name: "No Ficción" },
        { id: 3, name: "Infantil" },
    ];

    const eliminarProducto = (prod) => {
        if(window.confirm("Estás seguro de eliminar?")){
            axios
            .delete(`${API_URL}/api/libro/${prod.id}`, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
        }
    }


    const handleSaveClick = async () => {
        // Lógica para guardar los cambios en el libro
        try {
            // await updateBook(book.id, formData); // Descomenta para guardar en la base de datos
            alert("Libro actualizado exitosamente");
            setIsEditing(false);
        } catch (error) {
            alert("Error al guardar el libro");
            console.error(error);
        }
    };

    return (
        <div className="ml-16 px-4 py-6 md:p-6">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-black text-3xl font-bold">Detalles del Libro</h1>
                    
                    <div className="flex gap-3">
                        <button
                            className="bg-red-500 border-red-600 hover:bg-red-700 border-2 text-white font-bold py-2 px-3 rounded-md flex gap-2"
                            onClick={() => eliminarProducto(producto)}
                        >
                            <Trash2 />
                            <span className="hidden md:flex">Eliminar Libro</span>
                        </button>
                        {!isEditing && (
                            <button
                                className="bg-blue-500 border-blue-600 hover:bg-blue-700 border-2 text-white font-bold py-2 px-3 rounded-md flex gap-2"
                                onClick={handleEditClick}
                            >   
                                <FilePenLine />
                                <span className="hidden md:flex">Editar Libro</span>
                            </button>
                        )}
                    </div>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    <div className="space-y-2">
                        <Input
                            titulo="Título"
                            tipo="text"
                            placeholder="Ingrese el título del libro"
                            value={formData.titulo}
                            onChange={(e) => handleInputChange(e, 'titulo')}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2">
                        <Input
                            titulo="Autor"
                            tipo="text"
                            placeholder="Ingrese el autor del libro"
                            value={formData.autores}
                            onChange={(e) => handleInputChange(e, 'autores')}
                            disabled={!isEditing}
                        />
                    </div>

                    <CategorySelector 
                        isEditing={isEditing}
                        formData={formData}
                        setFormData={setFormData}
                        categories={categories}
                    />

                    <div className="space-y-2">
                        <Input
                            titulo="Fecha de Publicación"
                            tipo="date"
                            value={formData.fechaPublicacion}
                            onChange={(e) => handleInputChange(e, 'fechaPublicacion')}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-black">
                            Editorial
                            <select
                                disabled={!isEditing}
                                value={publishers.find(p => p.name === formData.editorial)?.id || ""}
                                onChange={(e) => setFormData({ ...formData, editorial: publishers.find(p => p.id === parseInt(e.target.value))?.name })}
                                className="text-black w-full px-3 py-4 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors disabled:bg-gray-100"
                            >
                                <option value="">Seleccione un editorial</option>
                                {publishers.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="space-y-2">
                        <Input
                            titulo="ISBN"
                            tipo="text"
                            placeholder="Ingrese el ISBN del libro"
                            value={formData.isbn}
                            onChange={(e) => handleInputChange(e, 'isbn')}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-black" htmlFor="precio">
                            Precio
                            <input 
                                id="precio" 
                                type="number" 
                                min="0" 
                                step="0.01" 
                                placeholder="0.00"
                                value={formData.precio}
                                onChange={(e) => handleInputChange(e, 'precio')}
                                required
                                disabled={!isEditing}
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors disabled:bg-gray-100"
                            />
                        </label>
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-black" htmlFor="descuento">
                            Descuento (%)
                            <input 
                                id="descuento" 
                                type="number" 
                                min="0" 
                                max="100" 
                                placeholder="0"
                                value={formData.descuento}
                                onChange={(e) => handleInputChange(e, 'descuento')}
                                required
                                disabled={!isEditing}
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors disabled:bg-gray-100"
                            />
                        </label>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea
                            titulo="Descripción"
                            placeholder="Ingrese una breve descripción del libro"
                            value={formData.descripcion}
                            onChange={(e) => handleInputChange(e, 'descripcion')}
                            rows={2}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea
                            titulo="Resumen"
                            placeholder="Ingrese un resumen del libro"
                            value={formData.resumen}
                            onChange={(e) => handleInputChange(e, 'resumen')}
                            rows={4}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea
                            titulo="Vista Previa"
                            placeholder="Ingrese un avance del primer capítulo del libro"
                            value={formData.vistaPrevia}
                            onChange={(e) => handleInputChange(e, 'vistaPrevia')}
                            rows={6}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2">
                        <Input
                            titulo="Imagen de Portada"
                            tipo="text"
                            placeholder="Ingrese la URL de la portada del libro"
                            value={formData.imagenPortada}
                            onChange={(e) => handleInputChange(e, 'imagenPortada')}
                            disabled={!isEditing}
                        />
                    </div>

                    <div className="space-y-2">
                        <Input
                            titulo="Imagen de Subportada"
                            tipo="text"
                            placeholder="Ingrese la URL de la subportada del libro"
                            value={formData.imagenSubportada}
                            onChange={(e) => handleInputChange(e, 'imagenSubportada')}
                            disabled={!isEditing}
                        />
                    </div>

                    {isEditing && (
                        <div className="md:col-span-2 flex justify-end mt-5 space-x-3">
                            <button
                                type="button"
                                className="bg-red-500 border-red-700 border-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
                                onClick={handleCancelClick}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="bg-green-600 border-green-700 border-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
                                onClick={handleSaveClick}
                            >
                                Guardar
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default EditBook;
