import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';
import {Switch , Route , Link , Redirect } from 'react-router-dom';

import Shopage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';

import Signin from './components/pages/sign-in-up/sign-in-up.component';

import {auth , createUserProfileDocument } from './firebase/firebase.utils';


import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelector';


import CheckoutPage from './components/pages/checkout/checkout.component';


class App extends React.Component{

  
  unsubscribeFromAuth= null;

    componentDidMount(){

      const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth =
        auth.onAuthStateChanged (async userAuth => {
      
        if(userAuth){
          const userRefer= await createUserProfileDocument(userAuth);
          
          userRefer.onSnapshot(snapshot =>{
            setCurrentUser({

              id:snapshot.id,
              ...snapshot.data()
            } , () =>{ })
          })
        }

        setCurrentUser( userAuth)

       //this.setState({currentUser:user});

        //passing all data  recvived from google sign in
        

      })
    }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }  
   
    

  render(){
  return (
    <div className="App">
    <Header />
      <Switch>

      
      <Route exact  path='/' component={Homepage } />
      <Route exact  path='/checkout' component={CheckoutPage } />
        <Route   path='/shop/' component={Shopage } />
        <Route exact exact    path='/signin/'   
        render={()=>this.props.currentUser ? (<Redirect to="/"/>) : <Signin/> } />
        

       

      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({

  currentUser:selectCurrentUser
  
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
