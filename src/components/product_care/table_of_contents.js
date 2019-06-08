import React from 'react';
import './table_of_contents.scss';

function TableOfContents(){
    return(
        <div className="table-of-contents">
            <div className="contents-container row">
                <img src="/dist/images/productcare/guide.jpg"className="guide-photo col s12 m5 offset-m1 l4 offset-l2"/>
                <div className="guide-text col s12 m4 offset-m1 offset-l1 l3">
                    <h3 className="guide-title">The ultimate guide to upkeeping your succulents!</h3>
                    <p>While succulents are known for their resilience and low maintenance, there are still a few rules you’ll have to follow if you want them to thrive.</p>
                    <ol>
                        <li>Water Care</li>
                        <li>Soil and Drainage</li>
                        <li>Sunlight</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TableOfContents;