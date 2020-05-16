import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import  './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';

import  {connect} from 'react-redux';

import {selectCartItem} from '../../redux/cart/cart-selector';
import {togglecartHidden} from '../../redux/cart/cart.actions';


import {createStructuredSelector} from 'reselect';
import cartItem from '../cart-item/cart-item.component';

import {withRouter,Link,NavLink } from 'react-router-dom';



const cartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                
            
                {
                    cartItems.length ? 
                    cartItems.map(cartItem=>(
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    : (<span>Cart is empty</span>)
                }


              <CustomButton onClick={()=>{
                  history.push('/checkout');
                  dispatch(togglecartHidden())
                }}>Go To Checkout</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItem
})



export default withRouter(connect(mapStateToProps)(cartDropdown))
