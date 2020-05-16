import React from 'react';

import './header.styles.scss';

import { Link } from 'react-router-dom';
 
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import Carticon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


import {createStructuredSelector} from 'reselect';

import {selectCartHidden } from '../../redux/cart/cart-selector';
import {selectCurrentUser} from '../../redux/user/userSelector';



const Header = ({currentUser ,hidden}) => {

    
    return(

    <div className="header">

        <Link className='logo-container' to="/">
            <h4>Logo Space</h4>
        </Link>

        <div className="options">

            <Link className='option' to="/shop">
                <h4>SHOP</h4>
            </Link>

            {
                currentUser ? 
                (<div className="options" 
                onClick={() => auth.signOut()}> Sign Out </div>)
                :
                <Link className='option' to="/signin">
                    <h4>Sign IN</h4>
                </Link>

            }
           
            <Carticon/>


         </div>
         {
            hidden ? null : <CartDropDown/>
         }
         
    </div>

)


}



const mapStateToProps  = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})


// const mapStateToProps = (state) =>({

//     currentUser:selectCurrentUser(state),
//     hidden:selectCartHidden(state)
// })





//passing individual state without reselect (memoize)
// const mapStateToProps= ({user:{currentUser},
//      cart:{hidden}}) =>({
         
//     //currentUser:state.user.currentUser
//     currentUser,
//     hidden
// })



// const mapStateToProps= (state) =>({
//     //currentUser:state.user.currentUser
// })


export default connect(mapStateToProps)( Header);