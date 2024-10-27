import React, { useState } from 'react';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";
import SendButton from "../review/SendButtom";
import { X } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { API_URL } from '../../../env';
import { token } from '../../helpers/auth';

const CreateBook = () => {
    //Los Hooks deben estar al inicio, sin depender de ningún condicional.
    const {data: editoriales, error: errorEditorial, loading: loadingEditorial} = useFetch("api/editorial")
    const {data: categorias, error: errorCategoria, loading: loadingCategoria} = useFetch("api/categoria")

    const categories = categorias

    const [publishDate, setPublishDate] = useState('');
    const [selectedEditorial, setSelectedEditorial] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        setCurrentCategory(categoryId);
        
        if (categoryId && !selectedCategories.find(cat => cat.id === parseInt(categoryId))) {
            const category = categories.find(cat => cat.id === parseInt(categoryId));
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const removeCategory = (categoryId) => {
        setSelectedCategories(selectedCategories.filter(cat => cat.id !== categoryId));
    };

    const handleSubmit= (e) => {
        e.preventDefault()
        const data = {
            titulo: e.target.titulo.value,
            autoresIds: e.target.autor.value,
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
            categoriasIds: selectedCategories.map(category => category.id)
        }

        axios
            .post(`${API_URL}/api/libro`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
            .then(() => {
                alert("Libro creado exitosamente.")
            })
            .catch((error) => {
                console.error('Error completo:', error);
                alert(`Error al crear el libro: ${error.response?.data?.message || error.message}`)
            })

        console.log(data.imgPortada)
    }

    // Condicionales de retorno, fuera del alcance de los hooks
    if(loadingEditorial) return <h1 className="text-black">CARGANDO ...</h1>
    if(errorEditorial) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    if(loadingCategoria) return <h1 className="text-black">CARGANDO ...</h1>
    if(errorCategoria) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    return (
        <div className="ml-16 p-4 md:p-6">
            <div className="container mx-auto">
                <h1 className="text-black text-3xl font-bold">Crear Nuevo Libro</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    <div className="space-y-2">
                        <Input titulo={"Título"} nombre={"titulo"} tipo={"text"} placeholder={"Ingrese el título del libro"} />
                    </div>
                    
                    <div className="space-y-2">
                        <Input titulo={"Autor"} nombre={"autor"} tipo={"text"} placeholder={"Ingrese el autor del libro"} />
                    </div>

                    <div className="space-y-2">
                        <label>
                            <span className='text-black'>Fecha de Publicación</span>
                            <input 
                                className="text-black text-base w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-black focus:border-black disabled:bg-gray-100"
                                type="date"
                                name='fechaPublicacion'
                                value={publishDate}
                                onChange={(e) => setPublishDate(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-black">
                            Editorial
                            <select 
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white"
                                required
                                value={selectedEditorial}
                                onChange={(e) => setSelectedEditorial(e.target.value)}
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
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white"
                                onChange={handleCategoryChange}
                                value={currentCategory}
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
                        <Input titulo={"ISBN"} nombre={"isbn"} tipo={"text"} placeholder={"Ingrese el ISBN del libro"} />
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
                                required
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors"
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
                                required
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors"
                            />
                        </label>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea titulo={"Descripción"} nombre={"descripcion"} placeholder={"Ingrese una breve descripción del libro"} rows={2} />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea titulo={"Resumen"} nombre={"resumen"} placeholder={"Ingrese un resumen del libro"} rows={4} />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea titulo={"Vista Previa"} nombre={"vistaPrevia"} placeholder={"Ingrese el contenido de prueba para la vista previa"} rows={6} />
                    </div>

                    <div className="space-y-2">
                        <Input titulo={"Imagen de Portada"} nombre={"imgPortada"} tipo={"text"} placeholder={"Ingrese la URL de la portada del libro"} />
                    </div>

                    <div className="space-y-2">
                        <Input titulo={"Imagen de Subportada"} nombre={"imgSubportada"} tipo={"text"} placeholder={"Ingrese la URL de la subportada del libro"} />
                    </div>

                    <div className="md:col-span-2 flex justify-end mt-5">
                        <SendButton text={"Crear Libro"}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBook;