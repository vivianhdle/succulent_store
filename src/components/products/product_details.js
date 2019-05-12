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
        const resp = await axios.get('/api/data/getproductdetails.json');
        console.log(resp);
        this.setState({
            details:resp.data.productInfo
        });
    }
    render(){
        const {description,name,price,miscDetails,id,image}=this.state.details
        return (
            <div>
                <img src={`../../../public/${image}`}/>
            </div>
        )
    }
}

export default ProductDetails;