import React, {Component} from "react";
import axios from 'axios';
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
        sentences = sentences.map((sentence,index)=>{
            return <li key={index}>{sentence}</li>
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
        const {name,price,miscDetails,image,id}=this.state.details;
        const sentences = this.renderList();
        return (
            <div className="product-details">
                <div className="row">
                    <div className="photo-container col s10 offset-s1 m5 offset-m1 l4 offset-l2">
                        <img src={`/dist/${image}`}/>
                    </div>
                    <div className="info col s10 offset-s1 m4 l4">
                        <div className="name green-text text-darken-1">{name}</div>
                        <AddToCart price={price} id={id}/>
                        <ul>
                            {sentences}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <MiscDetails details={miscDetails}/>
                </div>
            </div>
        )
    }
}

export default ProductDetails;