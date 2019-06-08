import React from 'react';
import './table_of_contents.scss';

function TableOfContents(){
    return(
        <div className="table-of-contents">
            <div className="row">
                <img src="/dist/images/productcare/guide.jpg"className="guide-photo col s12 m5 offset-m1 l4 offset-l2"/>
                <div className="guide-text col m4 offset-m1 offset-l1 l3">
                    <h3 className="guide-title">The ultimate guide to upkeeping your succulents!</h3>
                    <ol>
                        <li>Water Care</li>
                        <li>Sunlight</li>
                        <li>Soil and Planting</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TableOfContents;