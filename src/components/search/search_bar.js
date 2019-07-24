import React from 'react';

function SearchBar(props){
    return (
        <div className="row">
            <form className="col s12">
                <div className="input-field col l8 offset-l2">
                    <input id="search" type="text" className="validate"/>
                    <label htmlFor="search">Search Products</label>
                    <i className="fas fa-search"></i>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;