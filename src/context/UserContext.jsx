import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../env";
import { deleteToken, setToken, token } from "../helpers/auth";

// 1. CREAMOS EL CONTEXTO
// ESTE ES EL QUE DEBEMOS DE CONSUMIR
const UserContext = createContext()

// 2. CREAER PROVIDER
// ES EL QUE NOS PROVEE DE ACCESO A LOS DATOS DEL CONTEXTO
const UserProvider = ({children}) => {

    const[userData, setUserData] = useState(null)
    const [userToken, setUserToken] = useState(token()); // Estado para el token

    useEffect(() =>{
        if(userToken){
            axios.get(`${API_URL}/api/usuario/me`, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            .then(resp => {
                setUserData(resp.data)
            })
            .catch(() => setUserData(null));
        } else {
            setUserData(null); // Si no hay token, limpiamos los datos del usuario
        }
    },[userToken]);

    const login = (token) => {
        setToken(token); // Guardar en almacenamiento local
        setUserToken(token); // Actualizar estado local
    };

    const logout = () => {
        deleteToken(); // Eliminar de almacenamiento local
        setUserToken(null); // Actualizar estado local
        setUserData(null); // Limpiar datos de usuario
    };

    // Value -> valor que se le pasara como contexto a los componentes hijos 
    return(
        <UserContext.Provider value={ { userData, login, logout } }>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}