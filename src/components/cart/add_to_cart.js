import React, {Component} from 'react';
import {formatMoney} from '../../helpers'
import './add_to_cart.scss';
import axios from 'axios';
import Modal from '../general/modal';
import { withRouter } from 'react-router-dom';
import Loader from '../general/loader';


class addToCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty:1,
            modalOpen:false,
            totalPrice:0,
            cartQty:0,
            adding:false
        }
    }
    incrementQty=()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }
    decrementQty=()=>{
        if (this.state.qty>1){
            this.setState({
                qty:this.state.qty-1
            })
        }
    }
    addToCart=()=>{
        this.setState({
            adding:true
        })
        const {id,updateCart}=this.props
        const {qty} = this.state
        axios.get(`/api/addtocart.php?product_id=${id}&quantity=${qty}`).then((resp)=>{
            if (resp.data.success){
                const {cartCount,cartTotal}=resp.data;
                updateCart(cartCount);
                this.setState({
                    modalOpen:true,
                    cartQty:cartCount,
                    totalPrice:cartTotal,
                    adding:false
                })
            } else {
                //error handling
            }
        })
    }
    closeModal=()=>{
        this.setState({
            modalOpen:false,
            qty:1
        })
    }
    goToProducts=()=>{
        this.props.history.push('/products');
    }
    goToCart=()=>{
        this.props.history.push('/cart');
    }
    render(){
        const {price} = this.props;
        const {modalOpen, qty, cartQty, totalPrice,adding} = this.state
        if (adding){
            return <Loader/>
        }
        return(
                <div className="add-cart-container row">
                    <Modal isOpen={modalOpen} defaultAction={this.goToProducts} defaultActionText="Continue Shopping" secondaryAction= {this.goToCart} secondaryActionText="View Cart">
                        <div className="center items-added">{qty} item{qty>1 && 's'} added to your cart</div>
                        <div className="row">
                            <div className="col s5 offset-s1 cart-quantity">Cart Total Items:</div>
                            <div className="col s5 left-align cart-quantity">{cartQty}</div>
                        </div>
                        <div className="row">
                            <div className="col s5 offset-s1 cart-total">Cart Total Price:</div>
                            <div className="col s5 left-align cart-total">{formatMoney(totalPrice)}</div>
                        </div>
                    </Modal>
                    <div className="col s6">
                        <div className="price">{formatMoney(price)}</div>
                        <div className="green-text stock">In Stock.</div>
                    </div>
                    <div className="col s6">
                        <div className="quantity-container">
                            <div className="quantity-content">
                                <div className="quantity-dec" onClick={this.decrementQty}><i className="material-icons">remove</i></div>
                                <div className="quantity green lighten-1">{this.state.qty}</div>
                                <div className="quantity-inc" onClick={this.incrementQty}><i className="material-icons">add</i></div>
                            </div>
                        </div>
                        <button className="btn green lighten-1" onClick={this.addToCart}>Add to <i className="material-icons">shopping_cart</i></button>
                    </div>
                </div>
        )
    }
}

export default withRouter(addToCart);