import React from 'react';
import ProductList from './product_list';
import ProductDetails from './product_details';
import {Route} from 'react-router-dom';
import './products.scss'


export default props => {
    return (
        <div className="products">
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:product_id" render={routingProps=>{
                return <ProductDetails/>
            }}/>
        </div>
    )
}