import React, { useState } from "react";
import Header from '../HeaderComponent/HeaderComponent';
import  CollectionsDetail from "../CollectionsComponent/CollectionsComponent";
import  SimplePage from "../SimplePage/SimplePage";
import { USER } from '../../shared/user';
import { PRODUCTS } from '../../shared/products';
import { Switch, Route, Redirect } from 'react-router-dom'


function Main() {

    const products = PRODUCTS
    let [cartItems, setCartItems] = useState(0);    
        
    
    const onAdd = () => {        
        let counterValue = document.getElementById('counter').value;        
        setCartItems(products[0].qty = (Number(cartItems) + Number(counterValue)))      
    }

    const clearCart = () => {  
        setCartItems(cartItems = 0, (products[0].qty = 0))        
    }
    

    return(
        <div>
            <Header user={USER} products={products} clearCart={clearCart}/>

            <Switch>                                
                <Route exact path="/collections" component={
                    () => <CollectionsDetail products={products} cartItems={cartItems} onAdd={onAdd}/>}
                 />
                <Route exact path="/man" component={SimplePage} />
                <Route exact path="/women" component={SimplePage} />
                <Route exact path="/about" component={SimplePage} />
                <Route exact path="/contact" component={SimplePage} />
                <Redirect to="/collections" />
            </Switch>
        </div>
    )
}

export default Main;

