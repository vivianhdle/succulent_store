import React, {Component} from 'react';
import {formatMoney} from '../../helpers';

class ProductItem extends Component{
    componentDidMount(){
        M.Materialbox.init(this.zoom)
    }
    render(){
        const {id,image,name,price,type}=this.props.info
        const url = `/dist/${image}`;
        const {goToDetails}=this.props
        return(        
            <div className="col s10 offset-s1 m6 l4 card-item product-item">
                <div className="card col s12 m10 offset-m1">
                    <div className="card-image">
                        <img ref={(element)=>this.zoom=element} className="materialboxed" src={url} alt=""/>
                    </div>
                    <div className="card-content">
                        {type === 'terrarium' ? <span className="card-title orange-text text-lighten-1">{name}</span>:<span className="card-title green-text text-lighten-1">{name}</span>}
                        <p>{formatMoney(price)}</p>
                        <div>{type === 'terrarium' ? <span className="more-info green-text text-lighten-1" onClick={()=>{goToDetails(id)}}>MORE INFO</span>:<span className="more-info orange-text text-lighten-1" onClick={()=>{goToDetails(id)}}>MORE INFO</span>}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductItem;
