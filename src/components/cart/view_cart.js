import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatMoney} from '../../helpers';
import './view_cart.scss';
import CartItem from './cart_row';
import Loader from '../general/loader';
import EmptyCart from './empty_cart';

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
            <div className="row">
                <div className="cart col s12 m10 offset-m1">
                    <Link to="/products"><i className="material-icons back-arrow green-text text-lighten-1">arrow_back</i></Link>
                    <div className="right-align total-items">Total Items In Cart: {totalItems}</div>
                    <table className="">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems}
                        </tbody>
                    </table>
                </div>
                    <div className="col s12 m10 offset-m1 price-total right-align">Total: {formatMoney(meta.total)}</div>
            </div>
            
        )
    }
}

export default Cart;