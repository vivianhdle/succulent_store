import React, {Component,Fragment} from 'react';
import {formatMoney} from '../../helpers';
import DeleteConfirmation from '../general/delete_modal';
import axios from 'axios';
import Loader from '../general/loader';
import './cart_item.scss';

class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity:this.props.quantity,
            deleting:false,
            isOpen:false
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
    render(){
        const {image,name,price} = this.props;
        const {quantity,isOpen,deleting,updating}=this.state
        const itemTotalPrice= formatMoney(quantity*price);
        return(
            <div className="cart-item">
                <div className="row">
                    <div className="col s12 m6 l6 item-details">
                        <img className="col m6 s6" src={`/dist/${image}`} alt={`${name} product image`}/>
                        <div className="col m6 s6">
                            <div>Name: {name}</div>
                            <div>Quantity: {quantity}</div>
                            <div>Price: {formatMoney(price)}</div>
                            <div>Total: {itemTotalPrice}</div>
                            <div className="action-container">
                                <span className="action">Edit</span>
                                <span className="action"onClick={this.toggleDeleteConfirm}>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <DeleteConfirmation isOpen={isOpen} closeModal={this.toggleDeleteConfirm} handleDelete={this.deleteItemFromCart}/>
            </div>
        )
        
    }
}

export default CartItem;
