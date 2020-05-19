import React from 'react'
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItem ,selectCartTotal  ,selectCartItemsCount } from '../../../redux/cart/cart-selector';
import cartItem from '../../cart-item/cart-item.component';

import CheckoutItem from '../../checkout-item/checkout-item.component';



const CheckoutPage = ({cartItems,total}) => {

    console.log(cartItems)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            </div>

            {
                cartItems.map(
                cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
            )
            }

            

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    
    cartItems:selectCartItem,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
