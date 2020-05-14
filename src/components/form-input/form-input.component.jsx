import React from 'react';

import './form-input.style.scss';


const FormInput = ({handleChange,label, ...otherProps}) => {


   //  console.log(otherProps);


    return(
    <div className="group">
        <input className="form-input" onChange={handleChange}
        {...otherProps}/>

        {  label }
    </div>
    )
}


export default FormInput;