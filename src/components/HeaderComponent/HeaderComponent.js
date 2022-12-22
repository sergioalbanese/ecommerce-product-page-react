import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Cart from '../Cart/Cart';
import CartPopup from '../CartPopup/CartPopup';

 
class Header extends Component {

    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        
        this.state = {
          isNavOpen: false,
          isCartOpen: false
        };
    }
    

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    toggleCart() {        
        this.setState({
            isCartOpen: !this.state.isCartOpen
        });
      }


    render() {    
                    
        console.log('head', this.props.products)
        return(            
            <div className={`navigation ${this.state.isNavOpen ? 'open' : ''}`}>
                <img src={this.state.isNavOpen ? '/assets/images/icon-close.svg' : '/assets/images/icon-menu.svg'} onClick={this.toggleNav} className="navigation__hamburger"  alt="menu" />
                <NavLink className={'navigation__logo'} to='/home'><img src={'/assets/images/logo.svg'} alt="Logo" /></NavLink>
                
                <ul className={`navigation__ul`}>
                    <li className='navigation__li'><NavLink className={'navigation__link'}  to='/collections'>Collections</NavLink></li>
                    <li className='navigation__li'><NavLink className={'navigation__link'}  to='/man'>Man</NavLink></li>
                    <li className='navigation__li'><NavLink className={'navigation__link'}  to='/women'>Women</NavLink></li>                                        
                    <li className='navigation__li'><NavLink className={'navigation__link'}  to='/about'>About</NavLink></li>                                        
                    <li className='navigation__li'><NavLink className={'navigation__link'}  to='/contact'>Contact</NavLink></li>                                        
                </ul>   

                <div className='navigation__user'>
                    <Cart cartItems={this.props.products} toggleCart={this.toggleCart} />
                    <Avatar image={this.props.user[0].image} toggleCart={this.toggleCart} />
                    <CartPopup products={this.props.products} clearCart={this.props.clearCart} visible={this.state.isCartOpen}/>
                </div>                            
            </div>            
        );
    }
}

export default Header;