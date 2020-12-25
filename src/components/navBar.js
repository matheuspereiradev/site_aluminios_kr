import React from 'react'
import {StyledNavBar} from './navBarStyle'
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa'

export default function NavBarPadrao(){
    return(
        <StyledNavBar>
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                        VCommerce
                    </div>
                    
                </div>
                <input type="text" placeholder="O que você procura?"/>
                <button className="confirm-button">
                    Buscar
                </button>
                <div className="nav-btn">
                    <label className="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <div className="nav-links">
                    <a href="https://codepen.io/jo_Geek/"><FaShoppingCart/> Carrinho</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/"><FaUserAlt/> Login</a>
                </div>
        </div>
        </StyledNavBar>
    )
}
