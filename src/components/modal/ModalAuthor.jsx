import Close from "../buttons/Close"
import CreateButton from "../buttons/CreateButton"
import Description from "../form/Description"
import Input from "../input/Input"

const ModalAuthor = ({onClose}) => {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">Crear Nuevo Autor</h2>
                        <Close onClose={onClose} />
                    </div>

                    <Description descripcion={"Ingrese el nombre del nuevo autor para agregarlo a la lista."}/>

                    <Input tipo={"text"} placeholder={"Nombre del autor"} />

                    <CreateButton palabra={"autor"} />
                </div>
            </div>
        </div>
    )
}

export default ModalAuthor