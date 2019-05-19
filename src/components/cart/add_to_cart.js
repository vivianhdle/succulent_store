import React, {Component} from 'react';
import {formatMoney} from '../../helpers'
import './add_to_cart.scss';


class addToCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty:1,
            modalOpen:false,
            totalPrice:0,
            cartQty:0
        }
    }
    render(){
        const {price} = this.props;
        return(
            <div className="add-cart-container row">
                <div className="col s6">
                    <div className="price">{formatMoney(price)}</div>
                    <div className="green-text stock">In Stock.</div>
                </div>
                <div className="col s6">
                    <div className="quantity-container">
                        <div className="quantity-content">
                            <div className="quantity-dec"><i className="material-icons">remove</i></div>
                            <div className="quantity green lighten-1">{this.state.qty}</div>
                            <div className="quantity-inc"><i className="material-icons">add</i></div>
                        </div>
                    </div>
                    <button className="btn green lighten-1">Add to <i className="material-icons">shopping_cart</i></button>
                </div>
                
            </div>
        )
    }
}

export default addToCart