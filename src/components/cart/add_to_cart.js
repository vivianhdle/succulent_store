import React, {Component,Fragment} from 'react';
import {formatMoney} from '../../helpers'
import './add_to_cart.scss';
import axios from 'axios';
import Modal from '../general/modal';


class addToCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty:1,
            modalOpen:true,
            totalPrice:0,
            cartQty:0,
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
        const {id}=this.props
        const {qty} = this.state
        axios.get(`/api/addtocart.php?product_id=${id}&quantity=${qty}`).then((resp)=>{
            const {cartCount,cartTotal}=resp.data;
            this.setState({
                'modalOpen':false,
                'cartQty':cartCount,
                'totalPrice':cartTotal
            })
        })
    }
    closeModal=()=>{
        this.setState({
            modalOpen:false,
            qty:1
        })
    }
    render(){
        const {price} = this.props;
        const {modalOpen, qty, cartQty, totalPrice} = this.state
        return(
            <Fragment>
                <div className="add-cart-container row">
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
                <Modal isOpen={modalOpen} defaultAction={this.closeModal} defaultActionText="Continue Shopping" secondaryAction= {this.goToCart} secondaryActionText="View Cart">
                    <div className="center items-added">{qty} item{qty>1 && 's'} added to your cart</div>
                    <div className="row">
                        <div className="col s6">Cart Total Items:</div>
                        <div className="col s6 left-align">{cartQty}</div>
                    </div>
                    <div className="row">
                        <div className="col s6">Cart Total Price:</div>
                        <div className="col s6 left-align">{formatMoney(totalPrice)}</div>
                    </div>
                </Modal>
            </Fragment>
        )
    }
}

export default addToCart