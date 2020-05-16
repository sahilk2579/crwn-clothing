import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg'

import './cart-icon-styles.scss';
import {connect} from 'react-redux';
import {togglecartHidden} from '../../redux/cart/cart.actions';
import cartItem from '../cart-item/cart-item.component';

import {selectCartItemsCount } from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';



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

const mapStateToProps = createStructuredSelector({

    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(carticon)
