import React from 'react';
import {Link} from 'react-router-dom';

export function CartLink(props){
    return(
        <Link className="cart-link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-items">{props.items}</span>
        </Link>
    )
}



export function SideCartLink(props){
    return (
        <Link className="cart-link" to="/cart">
            <i className="fas fa-shopping-cart"></i>Cart
            <span className="cart-items">{props.items}</span>
        </Link>
    )
}