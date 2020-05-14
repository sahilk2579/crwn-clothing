import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg'

import './cart-icon-styles.scss';
import {connect} from 'react-redux';
import {togglecartHidden} from '../../redux/cart/cart.actions';
import cartItem from '../cart-item/cart-item.component';

function carticon({togglecartHidden,itemCount}) {
    return (
        <div className='cart-icon' onClick={togglecartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    togglecartHidden: ()=> dispatch(togglecartHidden())
})

const mapStateToProps = ({cart:{cartItems}}) =>({

    itemCount:cartItems.reduce(
        (accumalated , cartItem)=>
        accumalated+cartItem.quantity,0)

})

export default connect(mapStateToProps,mapDispatchToProps)(carticon)
