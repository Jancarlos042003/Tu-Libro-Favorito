import { Link } from "react-router-dom"
import LoginTemplate from "../components/templates/LoginTemplate"
import { Lock, Mail } from 'lucide-react'
import SendButton from "../components/review/SendButtom"

const Login = () => {
    return (
        <LoginTemplate title="Iniciar sesión">
            <form>
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
                <div className="text-center mb-12">
                    <SendButton text="Ingresar"/>
                    <Link className="text-gray-500 hover:underline" to="/registro">
                        ¿Deseas registrarte?
                    </Link>
                </div>
            </form>
        </LoginTemplate>
    )
}

export default Login