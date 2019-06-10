import React, {Component} from 'react';
import Modal from '../general/modal';
import {formatMoney} from '../../helpers';

class EditItem extends Component{
    render(){
        console.log(this.props);
        const {isOpen,name,quantity,price,image}=this.props;
        const itemTotalPrice= formatMoney(quantity*price);
        if (isOpen){
            return (
                <Modal isOpen={isOpen}>
                        <img className="col m6 s12 l6" src={`/dist/${image}`} alt={`${name} product image`}/>
                        <div className="col m6 s12 l4">
                            <div>Name: {name}</div>
                            <div>Quantity: {quantity}</div>
                            <div>Price: {formatMoney(price)}</div>
                            <div>Total: {itemTotalPrice}</div>
                            <div className="action-container">
                                <span className="action">Update</span>
                                <span className="action">Cancel</span>
                            </div>
                        </div>
                </Modal>
            )
        }
    }
}

export default EditItem;