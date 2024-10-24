import CreateButton from "../buttons/CreateButton";
import Input from "../input/Input";
import { BookPlus } from "lucide-react"
import TextArea from "../textArea/TextArea";
import SendButton from "../review/SendButtom";
import AuthorInputs from "../input/AuthorInputs";

const CreateBook = () => {
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
                        <Input titulo={"Editorial"} tipo={"text"} placeholder={"Ingrese el editorial del libro"} />
                        <div className="flex space-x-2">
                            <CreateButton Icon={BookPlus} palabra={"Editorial"} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Input titulo={"ISBN"} tipo={"text"} placeholder={"Ingrese el ISBN del libro"} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-gray-700" htmlFor="precio">
                            Precio
                        </label>
                        <input 
                            id="precio" 
                            type="number" 
                            min="0" 
                            step="0.01" 
                            placeholder="0.00"
                            required
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-base font-medium text-gray-700" htmlFor="descuento">
                            Descuento (%)
                        </label>
                        <input 
                            id="descuento" 
                            type="number" 
                            min="0" 
                            max="100" 
                            placeholder="0"
                            required
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors"
                        />
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