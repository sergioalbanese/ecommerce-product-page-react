import React from 'react';

function Avatar(props) {    
    const {toggleCart} = props;      
    return(
        <div className="avatar" onClick={toggleCart}>
           <img className='avatar__image' src={props.image} alt="Avatar" />
        </div>
    );
}

export default Avatar;