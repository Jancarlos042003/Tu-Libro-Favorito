import { Check } from "lucide-react"

const CheckboxFilter = ({ value, isChecked, onChange }) => {
    return(
        <label className="inline-flex cursor-pointer">
            <div className="flex items-center">
                <input 
                type="checkbox" 
                className="sr-only" // Ocultar el checkbox original
                checked={isChecked} 
                onChange={onChange}
                />

                <div className={`flex items-center justify-center w-4 h-4 border rounded-sm ${isChecked ? 'bg-black border-black' : 'border-black' }`}>
                    <Check size={14} className={`text-white transition-opacity duration-200 ${isChecked ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                <span className={`ml-2 hover:text-black ${isChecked ? "text-black" : "text-gray-500"}`}>
                    {value}
                </span>
            </div>
        </label>
    )
}

export default CheckboxFilter