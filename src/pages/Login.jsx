import { Link, useNavigate } from "react-router-dom"
import LoginTemplate from "../components/templates/LoginTemplate"
import { Lock, Mail } from 'lucide-react'
import SendButton from "../components/review/SendButtom"
import axios from 'axios';
import { API_URL } from "../../env";
import { setToken } from "../helpers/auth";
import { useState } from "react";

const Login = () => {

    const nav = useNavigate()

    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {
            username: e.target.email.value, //obtenemos el valor que ingreso el usuario
            contrasenia: e.target.password.value,//obtenemos el valor que ingreso el usuario
        } 

        axios
            .post(`${API_URL}/login`, data) // Enviamos la petición
            .then((resp) => {               // Obtenemos la respuesta
                setToken(resp.data.token);
                
                //Obtenemos el rol del usuario
                const roles = resp.data.roles;

                // Redirigir según el rol del usuario
                if (roles.includes("ROLE_ADMIN")) {
                    nav("/admin"); // Página de inicio para administradores
                } else {
                    nav("/"); // Página de inicio para usuarios regulares
                }
            })
            .catch(() => {             // Si el login es incorrecto 
                setError("Contraseña o email inválido.")
            })
            
    } 

    return (
        <LoginTemplate title="Iniciar sesión">
            <form onSubmit={handleSubmit}>
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