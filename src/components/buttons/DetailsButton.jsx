import { Eye } from "lucide-react"

const DetailsButton = () =>{
    return(
        <button className="flex bg-black w-full rounded-lg justify-center items-center gap-1 py-2 hover:bg-neutral-800 mt-1">
            <Eye />
            <span>Ver detalles</span>
        </button>
    )
}

export default DetailsButton