import React, {Component,Fragment} from 'react';
import './nav.scss';
import {Link} from 'react-router-dom';
import SideNav from './side_nav';
import {CartLink, SideCartLink} from './cart_link';

class Nav extends Component{
    renderLinks(){
        return(
            <Fragment>
                <li className="sidenav-close">
                    <Link to="/"><i className="fas fa-home"></i></Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/products"><i className="fas fa-leaf"></i></Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/diy-terrarium"><i class="fas fa-tools"></i></Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/product-care"><i className="fas fa-book-open"></i></Link>
                </li>
                <li className="sidenav-close">
                    <CartLink items={this.props.cartItems}/>
                </li>
            </Fragment>
        )
    }
    renderSideLinks(){
        return (
            <Fragment>
                <li className="sidenav-close">
                    <Link to="/"><i className="fas fa-home"></i>Home</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/products"><i className="fas fa-leaf"></i>Products</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/diy-terrarium"><i class="fas fa-tools"></i>DIY Terrarium Guide</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/product-care"><i className="fas fa-book-open"></i>Care Guide</Link>
                </li>
                <li className="sidenav-close">
                    <SideCartLink items={this.props.cartItems}/>
                </li>
            </Fragment>
        )
    }
    render(){
        const {navColor = ''}=this.props
        const links = this.renderLinks();
        const sideLinks = this.renderSideLinks();
        return (
            <Fragment>
                <div className="navbar-fixed">
                    <nav className={`row ${navColor} `}>
                        <div className="nav-wrapper col s12 offset-l2 l8">
                            <Link to="/" className="brand-logo"><i className="fas fa-seedling"></i></Link>
                            <a href="#" data-target="sidenav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                {links}
                            </ul>
                        </div>
                    </nav>
                </div>
                <SideNav links={sideLinks}/>
            </Fragment>
        )
    }
    
}

export default Nav;