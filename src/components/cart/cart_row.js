import React, {Component,Fragment} from 'react';
import {formatMoney} from '../../helpers';


class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            quantity:this.props.quantity
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
    render(){
        const {image,name,price,id} = this.props;
        const {quantity}=this.state
        const itemTotalPrice= formatMoney(quantity*price);
        return (
            <Fragment>
                <tr key={id}>
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
                </tr>
            </Fragment>
        )
        
    }
}

export default CartItem;