import React, { useState } from 'react';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";
import SendButton from "../review/SendButtom";
import AuthorInputs from "../input/AuthorInputs";
import { X } from 'lucide-react';

const CreateBook = () => {
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

    const subcategories = {
        1: [
            { id: 1, name: "Novela" },
            { id: 2, name: "Ciencia Ficción" },
            { id: 3, name: "Fantasía" },
        ],
        2: [
            { id: 4, name: "Historia" },
            { id: 5, name: "Ciencia" },
            { id: 6, name: "Biografía" },
        ],
        3: [
            { id: 7, name: "Cuentos" },
            { id: 8, name: "Educativo" },
            { id: 9, name: "Juvenil" },
        ],
    };

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        setCurrentCategory(categoryId);
        
        if (categoryId && !selectedCategories.find(cat => cat.id === parseInt(categoryId))) {
            const category = categories.find(cat => cat.id === parseInt(categoryId));
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSubcategoryChange = (e) => {
        const subcategoryId = parseInt(e.target.value);
        if (subcategoryId && !selectedSubcategories.find(sub => sub.id === subcategoryId)) {
            const currentCategoryId = parseInt(currentCategory);
            const subcategory = subcategories[currentCategoryId].find(
                sub => sub.id === subcategoryId
            );
            const categoryName = categories.find(cat => cat.id === currentCategoryId).name;
            setSelectedSubcategories([
                ...selectedSubcategories, 
                { ...subcategory, categoryName }
            ]);
        }
    };

    const removeCategory = (categoryId) => {
        setSelectedCategories(selectedCategories.filter(cat => cat.id !== categoryId));
        // Remove associated subcategories
        setSelectedSubcategories(selectedSubcategories.filter(
            sub => !subcategories[categoryId].find(catSub => catSub.id === sub.id)
        ));
    };

    const removeSubcategory = (subcategoryId) => {
        setSelectedSubcategories(selectedSubcategories.filter(sub => sub.id !== subcategoryId));
    };

    return (
        <div className="ml-16 p-4 md:p-6">
            <div className="container mx-auto">
                <h1 className="text-black text-3xl font-bold">Crear Nuevo Libro</h1>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    <div className="space-y-2">
                        <Input titulo={"Título"} tipo={"text"} placeholder={"Ingrese el título del libro"} />
                    </div>
                    
                    <AuthorInputs />

                    <div className="space-y-2">
                        <Input titulo={"Fecha de Publicación"} tipo={"date"} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-gray-700">
                            Editorial
                            <select 
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white"
                                required
                            >
                                <option value="">Seleccione una editorial</option>
                                {publishers.map((publisher) => (
                                    <option key={publisher.id} value={publisher.id}>
                                        {publisher.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-base font-medium text-gray-700">
                            Categorías
                            <select 
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white"
                                onChange={handleCategoryChange}
                                value={currentCategory}
                            >
                                <option value="">Seleccione las categorías</option>
                                {categories.map((category) => (
                                    <option 
                                        key={category.id} 
                                        value={category.id}
                                        disabled={selectedCategories.some(cat => cat.id === category.id)}
                                    >
                                        {category.name}
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
                                    <span>{category.name}</span>
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

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-base font-medium text-gray-700">
                            Subcategorías
                            <select 
                                className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white"
                                onChange={handleSubcategoryChange}
                                disabled={!currentCategory}
                            >
                                <option value="">Seleccione las subcategorías</option>
                                {currentCategory && subcategories[currentCategory]?.map((subcategory) => (
                                    <option 
                                        key={subcategory.id} 
                                        value={subcategory.id}
                                        disabled={selectedSubcategories.some(sub => sub.id === subcategory.id)}
                                    >
                                        {subcategory.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {selectedSubcategories.map((subcategory) => (
                                <div 
                                    key={subcategory.id}
                                    className="flex items-center gap-1 bg-gray-950 px-3 py-1 rounded-full"
                                >
                                    <span>{subcategory.name} ({subcategory.categoryName})</span>
                                    <button
                                        type="button"
                                        onClick={() => removeSubcategory(subcategory.id)}
                                        className="hover:text-gray-500 text-gray-300"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Input titulo={"ISBN"} tipo={"text"} placeholder={"Ingrese el ISBN del libro"} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-gray-700" htmlFor="precio">
                            Precio
                            <input 
                                id="precio" 
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
                        <label className="text-base font-medium text-gray-700" htmlFor="descuento">
                            Descuento (%)
                            <input 
                                id="descuento" 
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
                        <TextArea titulo={"Descripción"} placeholder={"Ingrese una breve descripción del libro"} rows={2} />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea titulo={"Resumen"} placeholder={"Ingrese un resumen del libro"} rows={4} />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <TextArea titulo={"Vista Previa"} placeholder={"Ingrese el contenido de prueba para la vista previa"} rows={6} />
                    </div>

                    <div className="space-y-2">
                        <Input titulo={"Imagen de Portada"} tipo={"text"} placeholder={"Ingrese la URL de la portada del libro"} />
                    </div>

                    <div className="space-y-2">
                        <Input titulo={"Imagen de Subportada"} tipo={"text"} placeholder={"Ingrese la URL de la subportada del libro"} />
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