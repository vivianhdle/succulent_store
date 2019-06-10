import React, {Component,Fragment} from 'react';
import {formatMoney} from '../../helpers';
import './cart_item.scss';

class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity:this.props.quantity
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
                        <div className="col m6 s6">
                            <div>Name: {name}</div>
                            <div>Quantity:{quantity}</div>
                            <div>Price:{formatMoney(price)}</div>
                            <div>Total:{itemTotalPrice}</div>
                            <div>
                                <a href=""><i className="far fa-edit"></i></a>
                                <a href=""><i className="fas fa-trash"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default CartItem;

{/* <th>Item</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
<th>Remove</th> */}