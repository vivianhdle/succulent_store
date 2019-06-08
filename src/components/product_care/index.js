import React from 'react';
import WaterCare from './water_care';
import TableOfContents from './table_of_contents';
import './product_care.scss';
import SoilCare from './soil_care';
import SunCare from './sun_care';
function ProductCare(){
    return(
        <div className="care-container">
            <TableOfContents/>
            <WaterCare/>
            <SoilCare/>
            <SunCare/>
        </div>
    )
}

export default ProductCare;