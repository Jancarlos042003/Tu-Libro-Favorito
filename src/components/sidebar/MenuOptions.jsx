import { LogOut } from "lucide-react"

const MenuOptions = ({onLogout}) => {
    return(
        <div className="p-2">
            <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 border border-gray-500 hover:bg-gray-700 rounded-md"
            >
                <LogOut size={18} />
                <span>Cerrar Sesión</span>
            </button>
        </div>
    )
}

export default MenuOptions