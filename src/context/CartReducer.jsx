// CartReducer -> funcion que se va a disparar para modificar el contexto 
// y para ello requiere del estado actual del contexto

// Accion que se va a realizar
// Contenido que me va a permitir realizar esa acción

const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, { ...action.payload, quantity: 1 }]} // SE AGREGA Y SE ESTABLECE COMO CANTIDAD MIN 1
        
        case "REMOVE_FROM_CART":
            return {...state, cart: [...state.cart.filter( c => c.id !== action.payload.id)]}
        
        case "CLEAR_CART":
            return {cart: []}

        case "INCREMENT_QUANTITY":
            return {
                ...state, 
                cart: state.cart.map(item =>
                    item.id === action.payload.id && item.quantity < action.payload.stock
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        
        case "DECREMENT_QUANTITY":  
            return {...state, cart: state.cart.map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
    
        default:
            return state;
    }

}

export default CartReducer