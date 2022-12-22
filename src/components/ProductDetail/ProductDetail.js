import React from 'react';

function Product(props) {       
    return(
        <div className="product">
           <h5 className='product__category'>
                {props.details.category}
           </h5>
           <h3 className='product__name'>
                {props.details.name}
           </h3>
           <p className='product__description'>
                {props.details.description}
           </p>
           <div className='product__price-wrapper'>
                <div className='product__price-value'>
                    <p className='product__price'>
                        {props.details.currency}{props.details.price}
                    </p>
                    <p className='product__discount'>
                        {props.details.discount}
                    </p>
                </div>
               
                <p className='product__old-price'>
                    <s>{props.details.currency}{props.details.old_price}</s>
                </p>
           </div>
        </div>
    );
}

export default Product;