import React, { Component } from 'react'
import FormInput  from '../form-input/form-input.component';
import FormButton from '../custom-button/custom-button.component';

import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';

import  './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


 class Signup  extends React.Component {

    constructor(){
        super();

        this.state={

            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

    }

    handleSubmit = async event =>{
    const { displayName, email, password, confirmPassword  } = this.state;

        event.preventDefault();

        if(password != confirmPassword){
            alert("password do notmatch");
        }

        try
        {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            createUserProfileDocument(user, {displayName});
            this.setState({
                
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            }, ()=>{console.log(this.state )})

        }
        catch(error){

            console.log(error);

        }

    }

    handleChange = event =>{

        const { name , value } = event.target;
        this.setState({ [name]:value});

    }



    render() {
        const  { displayName, email,password , confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I dont have account</h2>
                <span>Sign up with email and password</span>


                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required>
                    
                    </FormInput>
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="password"
                    required>
                    </FormInput>

                        <FormInput
                        type="text"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="confirm password"
                        required>
                    
                    </FormInput>

                    <CustomButton type="submit">
                    Sign Up
                    </CustomButton>

                </form>

            </div>
        )
    }
}

export default Signup
