import React from 'react';
import WaterCare from './water_care';
import TableOfContents from './table_of_contents';
import './product_care.scss';
import SoilCare from './soil_care';

function ProductCare(){
    return(
        <div className="care-container">
            <TableOfContents/>
            <WaterCare/>
            <SoilCare/>
        </div>
    )
}

export default ProductCare;