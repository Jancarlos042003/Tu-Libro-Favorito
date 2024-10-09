import { Link } from "react-router-dom"
import LoginTemplate from "../components/templates/LoginTemplate"
import { Lock, Mail, MapPinHouse, User } from "lucide-react"
import SendButton from "../components/review/SendButtom"

const Register = () => {
    return (
        <LoginTemplate title="Regístrate">
            <form>
                <label>
                    <span className="font-bold">Nombre completo:</span>
                    <div className="mb-4 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="name"
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-black sm:text-sm"
                        />
                    </div>
                </label>
                <label>
                    <span className="font-bold">Direccion:</span>
                    <div className="mb-4 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPinHouse className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="address"
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-black sm:text-sm"
                        />
                    </div>
                </label>
                <label>
                    <span className="font-bold">Correo:</span>
                    <div className="mb-4 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-black sm:text-sm"
                        />
                    </div>
                </label>
                <label>
                    <span className="font-bold">Contraseña:</span>
                    <div className="mb-4 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="password"
                            id="password"
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-black sm:text-sm"
                        />
                    </div>
                </label>
                <div className="text-center pt-1 mb-12 pb-1">
                    <SendButton text="Crear cuenta"/>
                    <Link className="text-gray-500 hover:underline" to="/login">
                        ¿Ya tienes cuenta? Inicia sesión
                    </Link>
                </div>
            </form>
        </LoginTemplate>
    )
}

export default Register