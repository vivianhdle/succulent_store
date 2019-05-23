import React, {Component,Fragment} from 'react';
import {formatMoney} from '../../helpers';
import DeleteConfirmation from '../general/delete_modal';


class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity:this.props.quantity,
            isOpen:false
        }
    }
    incrementQty=()=>{
        this.setState({
            quantity:this.state.quantity+1
        })
    }
    decrementQty=()=>{
        if (this.state.quantity>1){
            this.setState({
                quantity:this.state.quantity-1
            })
        }
    }
    deleteItemFromCart=()=>{

    }
    toggleDeleteConfirm=()=>{
        debugger;
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render(){
        const {image,name,price,id} = this.props;
        const {quantity,isOpen}=this.state
        const itemTotalPrice= formatMoney(quantity*price);
        return (
            <Fragment>
                <tr>
                    <td>
                        <img src={`/dist/${image}`} alt={`${name} product image`}/>
                    </td>
                    <td>{name}</td>
                    <td>{formatMoney(price)}</td>
                    <td>
                        <div className="quantity-content">
                            <div className="quantity-dec" onClick={this.decrementQty}><i className="material-icons">remove</i></div>
                            <div className="quantity">{quantity}</div>
                            <div className="quantity-inc" onClick={this.incrementQty}><i className="material-icons">add</i></div>
                        </div>
                    </td>
                    <td>{itemTotalPrice}</td>
                    <td><button className="btn red lighten-1" onClick={this.toggleDeleteConfirm}>Delete</button></td>
                </tr>
                <DeleteConfirmation isOpen={isOpen} closeModal={this.toggleDeleteConfirm} handleDelete={this.deleteItemFromCart}/>
            </Fragment>
        )
        
    }
}

export default CartItem;