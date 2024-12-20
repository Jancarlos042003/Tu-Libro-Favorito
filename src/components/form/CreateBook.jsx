import { useEffect, useState } from 'react';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";
import SendButton from "../review/SendButtom";
import { FilePenLine, Trash2, X } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { API_URL } from '../../../env';
import { token } from '../../helpers/auth';
import Loader from '../atoms/Loader';
import { useNavigate, useParams } from 'react-router-dom';

const CreateBook = () => {
    // Definir el estado inicial
    const initialState = {
        titulo: '',
        autor: '',
        fechaPublicacion: '',
        editorial: '',
        isbn: '',
        precio: '',
        descuento: '0',
        descripcion: '',
        resumen: '',
        vistaPrevia: '',
        imgPortada: '',
        imgSubportada: ''
    };

    // Función para resetear el formulario
    const resetForm = () => {
        setProducto(initialState);
        setSelectedCategories([]);
        setSelectedEditorial('');
        setCurrentCategory('');
    };

    // REDIRECCIONAMIENTO
    const nav = useNavigate()

    // PARAMS
    const params = useParams() // Obtener los parámetros de la URL
    const [producto, setProducto] = useState()
    const [originalProducto, setOriginalProducto] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {   
        if (params.id) {
            setLoading(false)
            axios
                .get(`${API_URL}/api/libro/${params.id}`)
                .then((resp) => {
                    setProducto(resp.data)
                    setOriginalProducto(resp.data) // Hacemos una copia del objeto original para evitar referencias

                    // Restablecemos las categorías ya que se actualizarán a través del useEffect
                    setSelectedCategories(originalProducto.categorias);
                    // Restablecemos la editorial ya que se actualizará a través del useEffect
                    setSelectedEditorial(originalProducto.editorial.id.toString());
                })
                .catch((error) => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [])

    // EDITAR
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // ELIMINAR PRODUCTO
    const eliminarProducto = (prod) => {
        if(window.confirm("Estás seguro de eliminar?")){
            axios
            .delete(`${API_URL}/api/libro/${prod.id}`, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            }).then(
                nav("/admin")
            )
        }
    }

    // CANCELAR ACTUALIZACIÓN
    const handleCancelClick = () => {
        setIsEditing(false) // Cancelamos la edición
        setProducto(originalProducto); // Restablecer los campos a los valores originales
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    // Actualizar editorial cuando producto cambie
    useEffect(() => {
        if (producto?.editorial?.id) {
            setSelectedEditorial(producto.editorial.id.toString());
        }
    }, [producto]);

    // Actualizar categorías cuando producto cambie
    useEffect(() => {
        if (producto?.categorias) {
            setSelectedCategories(producto.categorias);
        }
    }, [producto]);

    // EDITORIAL
    const [selectedEditorial, setSelectedEditorial] = useState('');

    const handleEditorialChange = (e) => {
        const editorialId = e.target.value;
        setSelectedEditorial(editorialId);
        // Actualizamos también el producto para mantener la consistencia
        setProducto(prev => ({
            ...prev,
            editorial: editoriales.find(ed => ed.id.toString() === editorialId)
        }));
    };

    // Actualizar cuando producto se cargue
    useEffect(() => {
        if (producto?.editorial?.id) {
            setSelectedEditorial(producto.editorial.id.toString());
        }
    }, [producto]);

    //CATEGORIAS
    //Los Hooks deben estar al inicio, sin depender de ningún condicional.
    const {data: editoriales, error: errorEditorial, loading: loadingEditorial} = useFetch("api/editorial")
    const {data: categorias, error: errorCategoria, loading: loadingCategoria} = useFetch("api/categoria")

    const categories = categorias

    // Estado iniciales
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    // Actualizar cuando producto se cargue
    useEffect(() => {
        if (producto?.categorias) {
            setSelectedCategories(producto.categorias);
        }
    }, [producto]);

    // Manejador de cambio de categoría
    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        setCurrentCategory(categoryId);
        
        if (categoryId && !selectedCategories.find(cat => cat.id === parseInt(categoryId))) {
            const category = categories.find(cat => cat.id === parseInt(categoryId));
            const updatedCategories = [...selectedCategories, category];
            setSelectedCategories(updatedCategories);
            // Actualizamos también el producto para mantener la consistencia
            setProducto(prev => ({
                ...prev,
                categorias: updatedCategories
            }));
        }
        setCurrentCategory('');
    };

    // Manejador para remover categoría
    const removeCategory = (categoryId) => {
        const updatedCategories = selectedCategories.filter(cat => cat.id !== categoryId);
        setSelectedCategories(updatedCategories);
        // Actualizamos también el producto para mantener la consistencia
        setProducto(prev => ({
            ...prev,
            categorias: updatedCategories
        }));
    };

    const handleSubmit= (e) => {
        e.preventDefault()
        const data = {
            titulo: e.target.titulo.value,
            autor: e.target.autor.value,
            fechaPublicacion: e.target.fechaPublicacion.value,
            editorialId: parseInt(selectedEditorial),
            isbn: e.target.isbn.value,
            precio: Number(e.target.precio.value),
            descuento: Number(e.target.descuento.value),
            descripcion: e.target.descripcion.value,
            resumen: e.target.resumen.value,
            vistaPrevia: e.target.vistaPrevia.value,
            imgPortada: e.target.imgPortada.value,
            imgSubportada: e.target.imgSubportada.value,
            categorias: selectedCategories.map(category => category.id)
        }

        // CONDICIONAL PARA VER QUE TIPO PETICION
        if (params.id){
            axios
            .put(`${API_URL}/api/libro/${params.id}`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
            .then(() => {
                alert("Libro actualizado exitosamente.")
                setIsEditing(false)
            })
            .catch((error) => {
                console.error('Error completo:', error);
                alert(`Error al actualizar el libro: ${error.response?.data?.message || error.message}`)
            })
        } else  {
            axios
            .post(`${API_URL}/api/libro`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
            .then(() => {
                alert("Libro creado exitosamente.")
                resetForm()
            })
            .catch((error) => {
                console.error('Error completo:', error);
                alert(`Error al crear el libro: ${error.response?.data?.message || error.message}`)
            })
        }
    }

    // Condicionales de retorno, fuera del alcance de los hooks
    if(loadingEditorial) return <Loader />
    if(errorEditorial) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    if(loadingCategoria) return <Loader />
    if(errorCategoria) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    if (loading) return <Loader />


    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-black text-3xl font-bold">
                    {`${params.id ? "Editar" : "Crear"}`} Libro
                </h1>
                {params.id && (
                    <div className="flex gap-3">
                        <button
                            title='Eliminar Libro'
                            className="bg-red-500 border-red-600 hover:bg-red-700 border-2 text-white font-bold py-2 px-3 rounded-md flex gap-2"
                            onClick={() => eliminarProducto(producto)}
                        >
                            <Trash2 />
                        </button>
                        {!isEditing && (
                            <button
                                title='Editar Libro'
                                className="bg-blue-500 border-blue-600 hover:bg-blue-700 border-2 text-white font-bold py-2 px-3 rounded-md flex gap-2"
                                onClick={handleEditClick}
                            >   
                                <FilePenLine />
                            </button>
                        )}
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div className="space-y-2">
                    <Input titulo={"Título"} nombre={"titulo"} tipo={"text"} value={producto?.titulo} onChange={handleInputChange}  disabled={params.id && !isEditing} placeholder={"Ingrese el título del libro"} />
                </div>
                
                <div className="space-y-2">
                    <Input titulo={"Autor"} nombre={"autor"} tipo={"text"} value={producto?.autor} onChange={handleInputChange}  disabled={params.id && !isEditing} placeholder={"Ingrese el autor del libro"} />
                </div>

                <div className="space-y-2">
                    <label>
                        <span className='text-black'>Fecha de Publicación</span>
                        <input 
                            className="text-black text-base w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-black focus:border-black disabled:bg-gray-100"
                            type="date"
                            name='fechaPublicacion'
                            value={producto?.fechaPublicacion || ''}
                            onChange={handleInputChange} 
                            disabled={params.id && !isEditing} 
                        />
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="text-base font-medium text-black">
                        Editorial
                        <select 
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white disabled:bg-gray-100"
                            required
                            disabled={params.id && !isEditing} 
                            value={selectedEditorial}
                            onChange={handleEditorialChange}
                        >
                            <option value="" className='text-neutral-500' >--Seleccione una editorial--</option>
                            {editoriales.map((editorial) => (
                                <option key={editorial.id} value={editorial.id}>
                                    {editorial.nombre}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="text-base font-medium text-black">
                        Categorías
                        <select 
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white disabled:bg-gray-100"
                            onChange={handleCategoryChange}
                            value={currentCategory}
                            disabled={params.id && !isEditing} 
                        >
                            <option value="" className='text-neutral-500'>--Seleccione las categorías--</option>
                            {categories.map((category) => (
                                <option 
                                    key={category.id}
                                    value={category.id}  
                                    disabled={selectedCategories.some(cat => cat.id === category.id)}
                                >
                                    {category.nombre}
                                </option>
                            ))}
                        </select>
                    </label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {selectedCategories.map((category) => (
                            <div 
                                key={category.id}
                                className="flex items-center gap-1 bg-gray-950 px-3 py-1 rounded-full"
                            >
                                <span>{category.nombre}</span>
                                <button
                                    disabled={params.id && !isEditing} 
                                    type="button"
                                    onClick={() => removeCategory(category.id)}
                                    className="hover:text-gray-500 text-gray-300"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <Input titulo={"ISBN"} nombre={"isbn"} tipo={"text"} value={producto?.isbn} onChange={handleInputChange} disabled={params.id && !isEditing} placeholder={"Ingrese el ISBN del libro"} />
                </div>

                <div className="space-y-2">
                    <label className="text-base font-medium text-black" htmlFor="precio">
                        Precio
                        <input 
                            name="precio" 
                            type="number" 
                            min="0" 
                            step="0.01" 
                            placeholder="0.00"
                            value={producto?.precio || ''}
                            onChange={handleInputChange}
                            disabled={params.id && !isEditing} 
                            required
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors disabled:bg-gray-100"
                        />
                    </label>
                </div>

                <div className="space-y-2">
                    <label className="text-base font-medium text-black" htmlFor="descuento">
                        Descuento (%)
                        <input 
                            name="descuento" 
                            type="number"
                            min="0" 
                            max="100" 
                            placeholder="0"
                            disabled={params.id && !isEditing} 
                            value={producto?.descuento || ''}
                            onChange={handleInputChange} 
                            required
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors disabled:bg-gray-100"
                        />
                    </label>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <TextArea titulo={"Descripción"} nombre={"descripcion"} value={producto?.descripcion} onChange={handleInputChange}  disabled={params.id && !isEditing} placeholder={"Ingrese una breve descripción del libro"} rows={2} />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <TextArea titulo={"Resumen"} nombre={"resumen"} value={producto?.resumen} onChange={handleInputChange}  disabled={params.id && !isEditing} placeholder={"Ingrese un resumen del libro"} rows={4} />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <TextArea titulo={"Vista Previa"} nombre={"vistaPrevia"} value={producto?.vistaPrevia} onChange={handleInputChange}  disabled={params.id && !isEditing} placeholder={"Ingrese el contenido de prueba para la vista previa"} rows={6} />
                </div>

                <div className="space-y-2">
                    <Input titulo={"Imagen de Portada"} nombre={"imgPortada"} value={producto?.imgPortada} onChange={handleInputChange}  disabled={params.id && !isEditing} tipo={"text"} placeholder={"Ingrese la URL de la portada del libro"} />
                </div>

                <div className="space-y-2">
                    <Input titulo={"Imagen de Subportada"} nombre={"imgSubportada"} value={producto?.imgSubportada} onChange={handleInputChange}  disabled={params.id && !isEditing} tipo={"text"} placeholder={"Ingrese la URL de la subportada del libro"} />
                </div>
                
                {isEditing &&
                    (<div className="md:col-span-2 flex justify-end mt-5 space-x-3">
                        <button
                            type="button"
                            className="bg-red-500 border-red-700 border-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
                            onClick={handleCancelClick}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-green-600 border-green-700 border-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
                        >
                            Guardar
                        </button>
                    </div>) 
                }
                <div className="md:col-span-2 flex justify-end mt-5">
                    {!params.id && <SendButton text={"Crear Libro"}/>}
                </div>
            </form>
        </div>
    );
};

export default CreateBook;