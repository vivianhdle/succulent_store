import React from 'react';
import './empty_cart.scss';
import {Link} from 'react-router-dom';

function EmptyCart(){
    return(
        <div className="empty-container">
            <div className="empty-cart"></div>
            <div className="empty-text">You have nothing in your cart. Click to <span><Link to="/products">+products</Link></span></div>
        </div>
    )
}

export default EmptyCart