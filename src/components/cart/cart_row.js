import React, {Component,Fragment} from 'react';
import {formatMoney} from '../../helpers';
import DeleteConfirmation from '../general/delete_modal';
import axios from 'axios';
import Loader from '../general/loader';


class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity:this.props.quantity,
            isOpen:false,
            deleting:false,
            updating:false
        }
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
        if (deleting||updating){
            return <Loader/>
        }
        return (
            <Fragment>
                <tr>
                    <td>
                        <div>{name}</div>
                        <img src={`/dist/${image}`} alt={`${name} product image`}/>
                    </td>
                    <td>{formatMoney(price)}</td>
                    <td>
                        <div className="quantity-content">
                            <div className="quantity-dec" onClick={this.decrementQty}><i className="material-icons">remove</i></div>
                            <div className="quantity">{quantity}</div>
                            <div className="quantity-inc" onClick={this.incrementQty}><i className="material-icons">add</i></div>
                        </div>
                    </td>
                    <td>{itemTotalPrice}</td>
                    <td><button className="btn red lighten-1" onClick={this.toggleDeleteConfirm}><i className="material-icons">delete_forever</i></button></td>
                </tr>
                <DeleteConfirmation isOpen={isOpen} closeModal={this.toggleDeleteConfirm} handleDelete={this.deleteItemFromCart}/>
            </Fragment>
        )
        
    }
}

export default CartItem;