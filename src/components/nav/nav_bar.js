import React from 'react';
import './nav.scss';

export default props => {
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">Succulents</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">Products</a></li>
                <li><i className="material-icons">shopping_cart</i></li>
            </ul>
            </div>
        </nav>
    )
}