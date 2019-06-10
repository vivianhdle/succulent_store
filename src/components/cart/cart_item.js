import React, {Component} from 'react';
import {formatMoney} from '../../helpers';
import DeleteConfirmation from '../general/delete_modal';
import axios from 'axios';
import Loader from '../general/loader';
import './cart_item.scss';
import { withRouter } from 'react-router-dom';

class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity:this.props.quantity,
            deleting:false,
            isOpen:false,
            updating:false
        }
    }
    deleteItemFromCart= async ()=>{
        this.setState({
            deleting:true
        })
        const {id,updateItem,products_id,updateCart} = this.props
        const resp = await axios.get(`/api/deletecartitem.php?id=${id}&products_id=${products_id}`);
        if (resp.data.success){
            updateItem();
            updateCart(-this.state.quantity);
        }else {
            //error handling
        }
    }
    toggleDeleteConfirm=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    goToDetails = id => {
        this.props.history.push(`/products/${this.props.products_id}`)
    }
    incrementQty=async()=>{
        this.setState({
            updating:true
        })
        const {products_id,quantity,price,updateItem,updateCart} = this.props
        const resp = await axios.put('/api/incrementquantity.php',{
            products_id: products_id,
            quantity:quantity,
            price:price
        })
        if (resp.data.success){
            this.setState({
                quantity:this.state.quantity+1,
                updating:false
            })
            updateItem();
            updateCart(1,'inc');
        }
    }
    decrementQty=async()=>{
        this.setState({
            updating:true
        })
        const {products_id,quantity,price,updateItem,updateCart} = this.props
        if (this.state.quantity>1){
            const resp = await axios.put('/api/decrementquantity.php',{
                products_id: products_id,
                quantity:quantity,
                price:price
            })
            if (resp.data.success){
                this.setState({
                    quantity:this.state.quantity-1,
                    updating:false
                })
                updateItem();
                updateCart(-1);
            }
        }
    }
    render(){
        const {image,name,price} = this.props;
        const {quantity,isOpen,deleting,updating}=this.state
        const itemTotalPrice= formatMoney(quantity*price);
        return(
            <div className="cart-item">
                <div className="row">
                    <div className="col s12 m6 l6 item-details">
                        <img className="col m6 s6" src={`/dist/${image}`} alt={`${name} product image`}/>
                        <div className="order-description col m6 s6">
                            <div>Name: {name}</div>
                            <div className="quantity">Quantity: 
                                <span className="quantity-dec" onClick={this.decrementQty}><i className="far fa-minus-square"></i></span>
                                <span>{quantity}</span>
                                <span className="quantity-inc" onClick={this.incrementQty}><i className="far fa-plus-square"></i></span>
                            </div>
                            <div>Price: {formatMoney(price)}</div>
                            <div>Total: {itemTotalPrice}</div>
                            <div className="action-container">
                                <span className="action" onClick={this.toggleDeleteConfirm}>Remove</span>
                                <span className="action" onClick={this.goToDetails}>Full Details</span>
                            </div>
                        </div>
                    </div>
                </div>
                <DeleteConfirmation isOpen={isOpen} closeModal={this.toggleDeleteConfirm} handleDelete={this.deleteItemFromCart}/>
            </div>
        )
    }
}

export default withRouter(CartItem);
