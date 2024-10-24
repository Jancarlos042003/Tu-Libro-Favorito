import { UserPlus } from "lucide-react";
import CreateButton from "../buttons/CreateButton";
import Description from "../form/Description";
import Close from "../buttons/Close";
import Input from "../input/Input";
import { useState } from "react";

const CreateAuthorModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true); // Abre el modal
    const handleClose = () => setIsOpen(false); // Cierra el modal

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica para crear el autor
        console.log('Crear autor');
        handleClose(); // Cierra el modal después de enviar
    };

    return (
        <div>
            {/* Botón para abrir el modal */}
            <div>
                <CreateButton Icon={UserPlus} palabra={"Autor"} onClick={handleOpen} />
            </div>

            {/* Modal flotante */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    {/* Fondo oscuro */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleClose}></div>

                    {/* Contenedor del modal */}
                    <div className="relative bg-white sm:max-w-[425px] p-6 rounded-lg shadow-lg z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg text-black font-semibold">Crear Nuevo Autor</h2>
                            <Close onClose={handleClose} />
                        </div>
                        <Description descripcion={"Ingrese el nombre del nuevo autor para agregarlo a la lista."} />
                        
                        <form onSubmit={handleSubmit} className="space-y-4 mt-3">
                            <div className="space-y-2">
                                <Input 
                                    titulo={"Nombre del Autor"} 
                                    tipo={"text"} 
                                    placeholder={"Ingrese el nombre del autor"} 
                                />
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button 
                                    type="button" 
                                    className="text-black px-4 py-2 border rounded-md hover:bg-neutral-100" 
                                    onClick={handleClose}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-md"
                                >
                                    Guardar Autor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateAuthorModal;