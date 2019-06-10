import React from 'react';
import './table_of_contents.scss';

function TableOfContents(){
    return(
        <div className="table-of-contents">
            <div className="contents-container row">
                <img src="/dist/images/productcare/guide.jpg"className="guide-photo col s12 m5 offset-m1 l4 offset-l2"/>
                <div className="guide-text col s12 m4 offset-m1 offset-l1 l3">
                    <h3 className="guide-title">The ultimate guide to upkeeping your succulents!</h3>
                    <p>While succulents are known for their resilience and <strong>low maintenance</strong>, there are still a <strong>few rules</strong> you’ll have to follow if you want them to thrive.</p>
                    <ol>
                        <li><a href="#water-care">Water Care</a></li>
                        <li><a href="#soil-care">Soil & Drainage</a></li>
                        <li><a href="#sun-care">Sunlight & Heat</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TableOfContents;