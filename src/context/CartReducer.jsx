// CartReducer -> funcion que se va a disparar para modificar el contexto 
// y para ello requiere del estado actual del contexto

// Accion que se va a realizar
// Contenido que me va a permitir realizar esa acción

const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        
        case "REMOVE_FROM_CART":
            return {state, cart: [...state.cart.filter( c => c.id !== action.payload.id)]}
        
        case "CLEAR_CART":
            return {cart: []}
    
        default:
            return state;
    }

}

export default CartReducer