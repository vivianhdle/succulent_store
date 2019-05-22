import React from 'react';
import '../assets/css/app.scss';
import Home from './home';
import Nav from './nav';
import {Route} from 'react-router-dom'
import Products from './products';
import Cart from './cart/view_cart';


const App = () => (
    <div className="app-container">
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/products" render={(routingProps)=>{
            return <Products {...routingProps} />
        }}/>
        <Route path="/cart" component={Cart}/>
    </div>
);

export default App;
