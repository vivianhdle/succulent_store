import React from 'react';
import WaterCare from './water_care';
import TableOfContents from './table_of_contents';
import './product_care.scss';

function ProductCare(){
    return(
        <div className="care-container">
            <TableOfContents/>
            <WaterCare/>
        </div>
    )
}

export default ProductCare;