import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import Loader from '../general/loader';
import Tabs from '../general/tabs';

class ProductList extends Component {
    state = {
        plants:[],
        terrariums:[],
        loading:false
    }
    componentDidMount(){
        M.Tabs.init(this.tabs);
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
        if (resp.data.success){
            const {products}=resp.data;
            const plants = products.filter((product)=>{
                return product.type === 'plant'
            })
            const terrariums = products.filter((product)=>{
                return product.type === 'terrarium'
            })
            this.setState({
                plants:plants,
                terrariums:terrariums,
                loading:false
            })
        }
    }
    render(){
        const active = this.props.location.search.replace("?tab=","");
        const {plants,loading,terrariums} = this.state;
        if (loading){
            return <Loader/>
        }
        const plantItems = plants.map((item)=>{
            return <ProductItem key={item.id} info={item} goToDetails={this.goToDetails}/>
        })
        const terrariumItems = terrariums.map((item)=>{
            return <ProductItem key={item.id} info={item} goToDetails={this.goToDetails}/>
        })
        
        return(
            <div className="product-container row">
                <div className="tab-container col s12 m10 offset-m1 l8 offset-l2">
                    <Tabs active = {active}/>
                </div>
                <div className="row col s12 m10 offset-m1 l8 offset-l2 " id="plants">
                    {plantItems}
                </div>
                <div className="row col s12 m10 offset-m1 l8 offset-l2" id="terrariums">
                    {terrariumItems}
                </div>
            </div>
        )
    }
}

export default ProductList;