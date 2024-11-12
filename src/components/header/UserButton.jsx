import { LogOut, UserRound } from "lucide-react"
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const UserButton = ({ 
    isAuthenticated, 
    isUserMenuOpen, 
    setIsUserMenuOpen, 
    handleLogout 
}) => {

    // Crear una referencia para el menú, de manera que puedas verificar si el clic ocurre dentro o fuera de este.
    const menuRef = useRef(null);

    useEffect(() => {
        // Función para manejar clics fuera del menú
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };

        // Manejador para la tecla Escape
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsUserMenuOpen(false);
            }
        };

        if (isUserMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }
        
        // Limpiar el listener al desmontar el componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isUserMenuOpen, setIsUserMenuOpen]);

    return(
        isAuthenticated ? (
            <div className="relative" ref={menuRef}>
                <button
                    onClick={setIsUserMenuOpen}
                    className="flex items-center focus:outline-none"
                >
                    <UserRound size={25} className="mr-2" strokeWidth={2.5} />
                </button>
                
                {/* Menú desplegable */}
                {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-black">
                        <button
                            onClick={handleLogout}
                            className="w-auto m-auto rounded-lg px-5 py-2 text-left flex items-center hover:bg-black hover:text-white"
                        >
                            <LogOut size={20} className="mr-2" />
                            <span>Cerrar sesión</span>
                        </button>
                    </div>
                )}
            </div>
        ) : (
            <Link to="/login">
                <UserRound size={25} className="mr-2" strokeWidth={2.5} />
            </Link>
        )
    )
}

export default UserButton