import React from "react";
import ProductDetail from '../ProductDetail/ProductDetail';
import Slider from '../Slider/Slider';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';

    
function CollectionsDetail(props) {
    const {products,onAdd} = props;    
    if(products != null) {                       
            return (
                
                <div className="collections-component">
                    
                    <div className="collections-component__row">   
                        <Slider images={products[0].images}/>
                        <div className="collections-component__product">
                            <ProductDetail details={products[0]} />                        
                            <div className="collections-component__actions">
                                <Counter />                        
                                <Button onAdd={onAdd} icon={'/assets/images/icon-cart-white.svg'} label={'Add to cart'}/>
                            </div>
                        </div>
                    </div>
                </div>
            );            
        } else {
        return(<div></div>)
    }
}


export default CollectionsDetail;