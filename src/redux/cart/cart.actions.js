import CartActiontypes from './cart.types';

export const  togglecartHidden =()=>({
    type: CartActiontypes.TOGGLE_CART_HIDDEN
  });

 
  export const addItem = item => ({
    type: CartActiontypes.ADD_ITEM,
    payload: item
  });
  
change 1

  