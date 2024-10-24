import { CirclePlus } from "lucide-react"

const AddBook = () => {
    return(
        <button className="flex bg-black w-auto rounded-lg justify-center items-center gap-1 py-2 px-3 hover:bg-neutral-800 mt-1">
            <CirclePlus />
            <span className="md:flex hidden">Agregar Libro</span>
        </button>
    )
}

export default AddBook