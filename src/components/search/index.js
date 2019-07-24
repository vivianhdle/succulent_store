import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import SearchBar from './search_bar';
import './search.scss';


class Search extends Component{
    render(){
        return (
            <div className="search-products">
                <Route path="/search" render={routingProps=>{
                    return <SearchBar {...routingProps}/>
                }}/>
            </div>
        )
    }
}


export default Search;
