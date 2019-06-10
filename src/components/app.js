import React, {Component} from 'react';
import '../assets/css/app.scss';
import Home from './home';
import Nav from './nav';
import {Route} from 'react-router-dom'
import Products from './products';
import Cart from './cart/view_cart';
import axios from 'axios';
import ProductCare from './product_care';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            cartItems:0,
            homepage:false
        }
    }
    updateCartItems=(count,direction)=>{
        if (count>0 && !direction){
            this.setState({
                cartItems:count
            })
        } else if(count>0 && direction){
            this.setState({
                cartItems:parseInt(this.state.cartItems) +1
            })
        }else {
            this.setState({
                cartItems:parseInt(this.state.cartItems)+count
            })
        }
    }
    isHomePage=()=>{
        this.setState({
            homepage:!this.state.homepage
        })
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
                {this.state.homepage ? <Nav cartItems={this.state.cartItems} navColor="transparent"/>:<Nav cartItems={this.state.cartItems}/>}
                <Route exact path="/" render={(routingProps)=>{
                    return <Home {...routingProps} isHomePage={this.isHomePage}/>
                }}/>
                <Route path="/products" render={(routingProps)=>{
                    return <Products {...routingProps} updateCart={this.updateCartItems}/>
                }}/>
                <Route path="/cart" render={(routingProps)=>{
                    return <Cart {...routingProps} updateCart={this.updateCartItems}/>
                }}/>
                <Route path="/product-care" component={ProductCare}/>
            </div>
        )
    }
}

export default App;
