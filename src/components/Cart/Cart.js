import React from 'react';

function Cart(props) {

    const {cartItems, toggleCart} = props;    
    return(
        <div className={'cart'} onClick={toggleCart}>
            {cartItems[0].qty > 0 && <span className={'cart__notify'}>{cartItems[0].qty}</span>}
           <img src={'/assets/images/icon-cart.svg'} alt="Cart" />
        </div>
    );
}

export default Cart;