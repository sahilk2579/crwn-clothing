import React from 'react';

import './custom-button.style.scss';


const CustomButton = ({ children , inverted , ...otherpropsbutton }) => {



    return(
    <button {...otherpropsbutton}
     className={`${inverted ? 'inverted' : ''} custom-button `}>
        {children}
    </button>
    )
}


export default CustomButton;