import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

// HOOK REDUCER -> modifica el valor que esta guardado en el contexto
// state -> valor que tiene el contexto
// dispatch -> funcion que dispara para modificar el estado
// initialState -> estado inicial del contexto

// CREAMOS EL CONTEXTO
const CartContext = createContext()

// CREAMOS EL PROVIDER
const CartProvider = ({children}) => {
    const initialState = {
        cart: [] // Estado inicial de como empieza nuestro contexto
    }
    const [state, dispatch] = useReducer(CartReducer, initialState)

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}