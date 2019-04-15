import React, {Component} from 'react';

class ProductItem extends Component{
    render(){
        console.log(this.props);
        const {id,images,name,price}=this.props.info
        const url = `/dist/${images}`
        return(          
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={url} alt=""/>
                            <span className="card-title">{name}</span>
                        </div>
                        <div className="card-content">
                            <p>{price}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">More Info</a>
                        </div>
                    </div>
                </div>
        )
    }
}


export default ProductItem;
