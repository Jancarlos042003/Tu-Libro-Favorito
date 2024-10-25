import { X } from "lucide-react"

const Close = ({onClick}) => {
    return(
        <button 
            type="button"
            onClick={onClick}
            className=" text-gray-400 hover:text-red-600 hover:bg-red-300 hover:border-red-600 border px-2 py-3 rounded-md"
        >
            <X className="h-5 w-5" />
        </button>
    )
}

export default Close