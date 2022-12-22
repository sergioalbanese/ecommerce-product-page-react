import React from 'react';

function Button(props) { 
    
    const {icon, label, onAdd} = props
    
    return(       
        <button className='button' onClick={onAdd ? onAdd : () => console.log('clicked')}>
            {icon &&
                <img className='button__icon' src={icon} />
            }

            <span className='button__text'>
                {label}
            </span>
            
        </button>
    );
}

export default Button;