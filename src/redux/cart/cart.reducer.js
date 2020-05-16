import CartActiontypes from './cart.types';
import { addItemToCart,removeItemFromCart } from './cart.utils';
import cartItem from '../../components/cart-item/cart-item.component';


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
        case CartActiontypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>
                    cartItem.id !== action.payload.id)
                //  cartItems: clearItemFromCart(state.cartItems,action.payload)
            
            }
        case CartActiontypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
                //  cartItems: clearItemFromCart(state.cartItems,action.payload)
            
            }
    
            default:
                return state;
    }
}

export default cartReducer