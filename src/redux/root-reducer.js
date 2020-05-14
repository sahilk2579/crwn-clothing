import {combineReducers} from 'redux'

import userReducer from './user/user.reduce';
import CartReducer from './cart/cart.reducer';

export default combineReducers({
    user:userReducer,
    cart:CartReducer
})