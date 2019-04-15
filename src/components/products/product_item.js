import React, {Component} from 'react';
import {formatMoney} from '../../helpers';

class ProductItem extends Component{
    componentDidMount(){
        M.Materialbox.init(this.zoom)
    }
    render(){
        console.log(this.props);
        const {id,images,name,price}=this.props.info
        const url = `/dist/${images}`;
        const {goToDetails}=this.props
        return(        
            <div className="col s12 m4 card-item">
                <div className="card col s12 m10 offset-m1">
                    <div className="card-image">
                        <img ref={(element)=>this.zoom=element} className="materialboxed" src={url} alt=""/>
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p>{formatMoney(price)}</p>
                    </div>
                    <div className="card-action">
                        <div className="product-item" onClick={()=>{goToDetails(id)}}>MORE INFO</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductItem;
