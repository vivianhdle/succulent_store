import React, {Component} from "react";
import axios from 'axios';
import {formatMoney} from '../../helpers'
import MiscDetails from './misc_details';

class ProductDetails extends Component{
    state = {
        details:null
    }
    componentDidMount(){
        this.getDetails();
    }
    async getDetails(){
        const {params} = this.props.match;
        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);
        console.log(resp);
        this.setState({
            details:resp.data.productInfo
        });
        if(resp.data.success){
            this.setState({
            details:resp.data.productInfo
            })
        }else {
            this.setState({
                details:false
            })
        }
    }
    render(){
        const {details}=this.state;
        if(details===null){
            return <h1 className="center">LOADING...</h1>
        }else if(!details){
            return <h1 className="center">No product found</h1>
        }
        const {description,name,price,miscDetails,image}=this.state.details
        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row col s12 m8">
                    <img src={`/dist/${image}`}/>
                    <div className="col s12 m8">
                        <div className="right-align product-price">{formatMoney(price)}</div>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;