import React, {Component} from 'react';
import '../assets/css/app.scss';
import Home from './home';
import Nav from './nav';
import {Route} from 'react-router-dom'
import Products from './products';
import Cart from './cart/view_cart';
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            cartItems:0
        }
    }
    updateCartItems=(count,direction)=>{
        debugger;
        if (count>0 && !direction){
            this.setState({
                cartItems:count
            })
        } else if(count>0 && direction){
            this.setState({
                cartItems:this.state.cartItems +1
            })
        }else {
            this.setState({
                cartItems:parseInt(this.state.cartItems)+count
            })
        }
    }
    componentDidMount(){
        this.getCartItemCount();
    }
    getCartItemCount=async ()=>{
        const resp = await axios.get('/api/getcartitemcount.php');
        this.updateCartItems(resp.data.itemCount);
    }
    render(){
        return (
            <div className="app-container">
                <Nav cartItems={this.state.cartItems}/>
                <Route exact path="/" component={Home}/>
                <Route path="/products" render={(routingProps)=>{
                    return <Products {...routingProps} updateCart={this.updateCartItems}/>
                }}/>
                <Route path="/cart" render={(routingProps)=>{
                    return <Cart {...routingProps} updateCart={this.updateCartItems}/>
                }}/>
            </div>
        )
    }
}

export default App;
