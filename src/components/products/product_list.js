import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import Loader from '../general/loader';

class ProductList extends Component {
    state = {
        products:[],
        loading:false
    }
    componentDidMount(){
        this.getProducts();
    }
    goToDetails = id => {
        this.props.history.push(`/products/${id}`)
    }
    async getProducts(){
        this.setState({
            loading:true
        })
        const resp = await axios.get('/api/getproducts.php');

        const {products}=resp.data;
        this.setState({
            products:products,
            loading:false
        })
    }
    render(){
        const {products,loading} = this.state;
        if (loading){
            return <Loader/>
        }
        const productItems = products.map((item)=>{
            return <ProductItem key={item.id} info={item} goToDetails={this.goToDetails}/>
        })
        
        return(
            <div className="product-container row">
                <div className="row col l8 offset-l2">
                    {productItems}
                </div>
            </div>
        )
    }
}

export default ProductList;