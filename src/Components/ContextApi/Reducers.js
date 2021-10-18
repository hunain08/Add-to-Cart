export const cartReducer = (state,action) =>{
    switch (action.type){
    case "ADD_To_Cart":
        return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
    case "Remove_To_Cart":
        return {...state,cart:state.cart.filter(c=>c.id !== action.payload.id),
        };
    case "Change_Cart_qty":
        return { ...state,cart:state.cart.filter(c=>c.id === action.payload.id ? c.qty = action.payload.qty:c.qty)}        
        default:
            return state;
    }
}