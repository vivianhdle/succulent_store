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
    async getProducts(){
        const resp = await axios.get('/api/data/getproducts.json');
        console.log(resp);
        const {products}=resp.data;
        this.setState({
            products:products
        })
    }
    render(){
        const {products} = this.state;
        const productItems = products.map((item,index)=>{
            return <ProductItem info={item}/>
        })
        console.log(this.state);
        return(
            <div className="row">
                {productItems}
                {productItems}
            </div>
        )
    }
}

export default ProductList;