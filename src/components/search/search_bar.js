import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from '../products/product_item';
import '../products/products.scss';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            allProducts:null,
            filtered:[]
        }
    }
    componentDidMount(){
        this.getProducts();
    }
    async getProducts(){
        const resp = await axios.get('/api/getproducts.php');
        if (resp.data.success){
            const {products}=resp.data;
            this.setState({
                allProducts:products
            })
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {allProducts} = this.state;
        if (!this.searchWord.value){
            var filteredList = this.state.allProducts;
        } else {
            const regex = new RegExp(this.searchWord.value,"gi");
            var filteredList = allProducts.filter((product)=>{
                return (regex.test(product["name"]) || regex.test(product["type"]))
            })
        }
        this.setState({
            filtered:filteredList
        })
    }
    goToDetails = id => {
        this.props.history.push(`/products/${id}`)
    }
    render(){
        const searchedResults = this.state.filtered.map((item)=>{
            return <ProductItem key={item.id} info={item} goToDetails={this.goToDetails}/>
        })
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="input-field col s10 offset-s1 l8 offset-l2">
                        <input id="search" type="text" className="validate"  ref={(element) => this.searchWord = element}/>
                        <label htmlFor="search">Search Products</label>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row col s12 m10 offset-m1 l8 offset-l2 " id="plants">
                    {searchedResults}
                </div>
            </div>
        )
    }
}
    

export default SearchBar;