import { CirclePlus } from "lucide-react"

const AddButton = ({palabra, onClick}) => {
    return(
        <button
        type="button"
        onClick={onClick} 
        className="flex bg-black w-auto rounded-lg justify-center items-center gap-1 py-2 px-3 hover:bg-neutral-800 mt-1">
            <CirclePlus size={20} />
            <span className="md:flex hidden">Agregar {palabra}</span>
        </button>
    )
}

export default AddButton