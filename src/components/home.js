import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component{
    goToProducts=()=>{
        this.props.history.push('/products');
    }
    goToGuide=()=>{
        this.props.history.push('/product-care');
    }
    render(){
        return (
            <div className="landing-page">
                <div className="landing-container">
                    <div className="row">
                        <h2 className="landing-title col s12 m10 offset-m1 l8 offset-l2">Succulent & <br/>Cactus Plants</h2> 
                    </div>
                    <div className="row">
                        <div className="landing-text col s12 m5 offset-m1 l4 offset-l2">Succulent is an umbrella term for plants that store water for long periods of time in their thick leaves and stems. They typically hail from dry, harsh environments, and most produce a thick juice or sap that can be applied to skin to protect against sunburn, including – you guessed it! – aloe vera. Cacti are just one specific variety of succulents.</div>
                    </div>
                    <div className="row">
                        <div className="button-container col s12 m5 offset-m1 l4 offset-l2">
                            <button className="btn green lighten-1" onClick={this.goToProducts}>Plants</button>
                            <button className="btn  yellow darken-1" onClick={this.goToCart}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)