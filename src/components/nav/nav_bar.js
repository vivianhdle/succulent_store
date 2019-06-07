import React, {Component,Fragment} from 'react';
import './nav.scss';
import {Link} from 'react-router-dom';
import SideNav from './side_nav';
import CartLink from './cart_link';

class Nav extends Component{
    renderLinks(){
        return(
            <Fragment>
                <li className="sidenav-close">
                    <Link to="/">Home</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/products">Products</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/product-care">Care Guide</Link>
                </li>
                <li className="sidenav-close">
                    <CartLink items={this.props.cartItems}/>
                </li>
            </Fragment>
        )
    }
    render(){
        const links = this.renderLinks();
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Succulents</Link>
                    <a href="#" data-target="sidenav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {links}
                    </ul>
                    </div>
                </nav>
                <SideNav links={links}/>
            </Fragment>
        )
    }
    
}

export default Nav;