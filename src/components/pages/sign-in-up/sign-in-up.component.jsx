import React from 'react';

import './sign-in-up.styles.scss'

import SignIn from '../../sign-in/sign-in.component';
import Signup from '../../sign-up/sign-up.component';

const Singup = () => {

return(

    <div className="sign-in-and-sign-up">
            
        <SignIn/>
        <Signup/>
    </div>
)
    }

export default Singup;