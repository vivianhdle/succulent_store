import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component{
    goToProducts=()=>{
        this.props.history.push('/products');
    }
    goToCart=()=>{
        this.props.history.push('/cart');
    }
    render(){
        return (
            <div className="landing-page">
                <div className="actions center">
                    <button className="btn green lighten-1" onClick={this.goToProducts}>Products</button>
                    <button className="btn orange lighten-1" onClick={this.goToCart}>Cart</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)