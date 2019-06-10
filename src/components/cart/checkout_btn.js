import React, {Component} from 'react';

class Checkout extends Component{
    componentDidMount(){
        M.Tooltip.init(this.toolTip);
    }
    render(){
        return (
            <div ref={(element)=>this.toolTip=element} className="col s12 tooltipped btn orange lighten-1" data-position="bottom" data-tooltip="Display purposes only">CHECKOUT</div>
        )
    }
}

export default Checkout;