import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../env";
import { token } from "../helpers/auth";

// 1. CREAMOS EL CONTEXTO
// ESTE ES EL QUE DEBEMOS DE CONSUMIR
const UserContext = createContext()

// 2. CREAER PROVIDER
// ES EL QUE NOS PROVEE DE ACCESO A LOS DATOS DEL CONTEXTO
const UserProvider = ({children}) => {

    const[userData, setUserData] = useState()

    useEffect(() =>{
        if(token()){
            axios.get(`${API_URL}/api/usuario/me`, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
            .then(resp => {
                setUserData(resp.data)
            })
        }
    },[])

    // Value -> valor que se le pasara como contexto a los componentes hijos 
    return(
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}