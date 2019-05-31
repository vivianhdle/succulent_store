import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';

class ProductList extends Component {
    state = {
        products:[]
    }
    componentDidMount(){
        this.getProducts();
    }
    goToDetails = id => {
        this.props.history.push(`/products/${id}`)
    }
    async getProducts(){
        const resp = await axios.get('/api/getproducts.php');
        const {products}=resp.data;
        this.setState({
            products:products
        })
    }
    render(){
        const {products} = this.state;
        const productItems = products.map((item)=>{
            return <ProductItem key={item.id} info={item} goToDetails={this.goToDetails}/>
        })
        return(
            <div className="row">
                {productItems}
            </div>
        )
    }
}

export default ProductList;