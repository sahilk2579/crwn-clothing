import React from 'react';

import FormInput  from '../form-input/form-input.component';


import FormButton from '../custom-button/custom-button.component';


import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

 
import './sign-in.styles.scss';

class SignInComp extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            
            email :'',
            password: ''
           
        };


    }

    handleSubmit= async event =>{
        event.preventDefault();

        const { email , password }=this.state;

        try{ 
           const signinEvent =  await auth.signInWithEmailAndPassword(email,password);
        
        }
        catch(error){
            console.log(error);
        }
        

        this.setState({email:'', password:''})
    }



    handlechange = event =>{
        const {value,name} = event.target;

        this.setState({ [name]: value });
    }

    render(){

        return (

            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email address</span>
            
            
                <form onSubmit={this.handleSubmit}>
                <FormInput
                 name="email" 
                 value={this.state.email}
                 handleChange={this.handlechange}
                 label='Email'/>
                <label  ></label>


                <FormInput  handleChange={this.handlechange}
                name="password" 
                value={this.state.password}
                label='Password'/>
               


                <FormButton type="submit" value="Submit form">
                 Sign In
                </FormButton>
                <br></br>

                <FormButton  onClick={ signInWithGoogle }>
                Sign In with Google
               </FormButton>


                </form>

                
            </div>

        )
    }

}

export default SignInComp;