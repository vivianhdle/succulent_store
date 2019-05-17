import React, {Component} from 'react';


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
        return(
            <div className="add-cart-container">
                <div><i className="material-icons">remove</i><span>{this.state.qty}</span><i className="material-icons">add</i></div>
            </div>
        )
    }
}

export default addToCart