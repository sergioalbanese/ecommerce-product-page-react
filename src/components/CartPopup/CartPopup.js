import React from 'react';
import Button from '../Button/Button';

function CartPopup(props) {

    const {products, clearCart, visible} = props;    
    console.log(props)
    return(
        <div className={`cart-popup ${visible ? 'opened' : ''}`}>
            <div className={'cart-popup__head'}>
                <p className={'cart-popup__head__title'}>Cart</p>
            </div>      
            {products[0].qty > 0 ?
                <div className={'cart-popup__body cart-popup__body--full'}>
                    <div className={'cart-popup__body__product-row'}>
                        <img className={'cart-popup__body__product-img'} src={products[0].image} />
                        <div className={'cart-popup__body__product-recap'}>
                            <p className={'cart-popup__body__product-title'}>
                            {products[0].name}
                            </p>
                            <p className={'cart-popup__body__product-price'}>
                                {products[0].currency}{products[0].price} x  {products[0].qty} <strong>{Number(products[0].price)* Number(products[0].qty)}</strong>
                            </p>
                           
                        </div>

                        <button className='cart-popup__clear-btn' onClick={clearCart}>
                            <img src={'/assets/images/icon-delete.svg'} />
                        </button>

                    </div>

                    <div className={'cart-popup__body__btn-wrapper'}> 
                        <Button label={'Checkout'} />
                    </div>
                    
                </div>
                :
                <div className={'cart-popup__body cart-popup__body--empty'}>
                     <p className={'cart-popup__body__text'}>Your cart is empty</p>
                    
                </div>
            }     
        </div>
    );
}

export default CartPopup;