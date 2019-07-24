import React, {Component} from 'react';
import SearchBar from './search_bar';
import './search.scss';

class Search extends Component{
    render(){
        return (
            <div className="search-products">
                <SearchBar/>
            </div>
        )
    }
}


export default Search;
