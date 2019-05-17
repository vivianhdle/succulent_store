import React, {Component} from "react";
import axios from 'axios';
import {formatMoney} from '../../helpers'
import MiscDetails from './misc_details';
import './product_details.scss';
import AddToCart from '../cart/add_to_cart';

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
    renderList(){
        const{description}=this.state.details;
        let sentences = description.split('.');
        sentences = sentences.map((sentence)=>{
            return <li>{sentence}</li>
        })
        return sentences;
    }
    render(){
        const {details}=this.state;
        if(details===null){
            return <h1 className="center">LOADING...</h1>
        }else if(!details){
            return <h1 className="center">No product found</h1>
        }
        const {name,price,miscDetails,image}=this.state.details;
        const sentences = this.renderList();
        return (
            <div className="product-details">
                <div className="row">
                    <div className="photo-container col s10 offset-s1 m5 offset-m1 l4 offset-l2">
                        <img src={`/dist/${image}`}/>
                    </div>
                    <div className="info col s10 offset-s1 m5 l4">
                        <h5>{name} 
                            <span className="right-align"> {formatMoney(price)}</span>
                        </h5>
                        <AddToCart/>
                        <ul>
                            {sentences}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1 l5 offset-l2">
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;