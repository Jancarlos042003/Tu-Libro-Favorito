import { Link, useNavigate } from "react-router-dom"
import LoginTemplate from "../components/templates/LoginTemplate"
import { Lock, Mail, User } from "lucide-react"
import SendButton from "../components/review/SendButtom"
import axios from "axios"
import { API_URL } from "../../env"
import { useState } from "react"

const Register = () => {

    const nav = useNavigate()
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data= {
            nombreCompleto: e.target.fullname.value,
            username: e.target.email.value,
            contrasenia: e.target.password.value
        }

        axios
            .post(`${API_URL}/api/usuario/registrar`, data)
            .then((response) => {nav("/login")})
            .catch((error) => setError("Error al registrarse.")) // Cambiar por en mensaje de error específico que envia backend
    }

    return (
        <LoginTemplate title="Regístrate">
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="font-bold">Nombre completo:</span>
                    <div className="mb-4 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            name="fullname"
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
                            name="email"
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
                            name="password"
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-black sm:text-sm"
                        />
                    </div>
                </label>

                {error !== null && (
                    <p className="text-center p-2 bg-red-100 text-red-800 mb-3">
                        {error}
                    </p>
                )}

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