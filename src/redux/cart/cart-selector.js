import {createSelector} from 'reselect';
import cartItem from '../../components/cart-item/cart-item.component';

//input /outpur selector


const selectCart = state =>state.cart; // input selector

export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems

);



export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItem => cartItem.reduce(
        (accumalated , cartItem)=>
        accumalated+cartItem.quantity,0)
    
)


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)


export const selectCartTotal = createSelector(
    [selectCartItem],
    cartItem => cartItem.reduce(
        (accumalated , cartItem)=>
        accumalated+cartItem.quantity * cartItem.price ,0)
    
)




