import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatMoney} from '../../helpers';
import './view_cart.scss';
import CartItem from './cart_item';
import Loader from '../general/loader';
import EmptyCart from './empty_cart';
import Checkout from './checkout_btn';

class Cart extends Component{
    state = {
        items:[],
        meta:{},
        totalItems:0,
        isLoaded:false
    }
    componentDidMount(){
        this.getCartData();
    }
    getCartData= async ()=>{
        const {data} = await axios.get('/api/getcartitems.php');
        if(data.success){
            this.setState({
                items:data.cartItems,
                meta:data.cartMetaData,
                isLoaded:true
            })
        }else {
            //error handling
        }
    }
    render(){
        const {meta,items,isLoaded} = this.state;
        let totalItems=0;
        const cartItems=items.map((item)=>{
            const {quantity,id} = item;
            totalItems+=quantity
            return(
                <CartItem  key={id} {...item} updateItem={this.getCartData} updateCart={this.props.updateCart}/>
            )
        });
        if (!isLoaded){
            return <Loader/>
        }
        if (!totalItems){
            return <EmptyCart/>
        }
        return (
            <div className="row view-cart">
                <div className="col s12 offset-m1 offset-l2">
                <div><Link to="/products"><i className="material-icons back-arrow green-text text-lighten-1">arrow_back</i></Link></div>
                </div>
                <div className="order-summary col s12 m3 offset-m7 offset-l7 l3">
                    <h5>Order Summary</h5>
                    <div>Subtotal Price: <span className="right">{formatMoney(meta.total)}</span></div>
                    <div>Sales Tax: <span className="right">{formatMoney(meta.total*.0725)}</span></div>
                    <div>Shipping:<span className="right">--</span></div>
                    <div>Total:<span className="right">{formatMoney(meta.total + meta.total*.0725)}</span></div>
                    <Checkout/>
                </div>
                <div className="cart col s12 m6 offset-m1 l5 offset-l2">
                    {cartItems}
                </div>
            </div>
        )
    }
}

export default Cart;

