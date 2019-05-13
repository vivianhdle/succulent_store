import React, {Component} from "react";
import axios from 'axios';

class ProductDetails extends Component{
    state = {
        details:{}
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
        const {description,name,price,miscDetails,id,image}=this.state.details
        return (
            <div>
                <img src={`/dist/${image}`}/>
            </div>
        )
    }
}

export default ProductDetails;