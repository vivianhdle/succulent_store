import React, {Component} from 'react';

class ProductItem extends Component{
    render(){
        console.log(this.props);
        const {id,images,name,price}=this.props.info
        const url = `/dist/${images}`
        return(
            <div className="row">
                <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">{name}</span>
                        <img src={url} alt=""/>
                    </div>
                    <div className="card-action">
                        <a href="#">See More Details</a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default ProductItem;
