import React from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';
import Home from './home';
import Nav from './nav';
import {Route} from 'react-router-dom'
import Products from './products';


const App = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
    </div>
);

export default App;
