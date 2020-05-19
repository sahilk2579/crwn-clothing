import {combineReducers} from 'redux'

import userReducer from './user/user.reduce';
import CartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig ={
    key:'root',
    storage,
    whitelist:['cart']    //reducers we want to store
}

const  rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer
})

export default persistReducer(persistConfig,rootReducer);