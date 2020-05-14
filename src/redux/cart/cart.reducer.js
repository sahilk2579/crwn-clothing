import CartActiontypes from './cart.types';
import { addItemToCart } from './cart.utils';


const INTIAL_STATE={
    hidden :true,
    cartItems : []
}


const cartReducer = (state= INTIAL_STATE, action ) => {
    switch(action.type)
    {
        case CartActiontypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden // changes to opp of current boolena
            }
        case CartActiontypes.ADD_ITEM:
            return{
                ...state,
                //cartItems:[...state.cartItems, action.payload] // adding current val in array + new vakyes
                
                cartItems: addItemToCart(state.cartItems,action.payload)
          
            }
            default:
                return state;
    }
}

export default cartReducer