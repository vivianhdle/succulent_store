import React from 'react';
import './soil_care.scss'

function SoilCare(){
    return(
        <div className="soil-care" id="soil-care">
            <div className="row soil-container">
                <img src="/dist/images/productcare/soil.jpg"className="col s12 m5 offset-m1 l4 offset-l2"/>
                <div className="soil-text col s12 m4 offset-m1 offset-l1 l3">
                    <h3 className="soil-title">Soil & Drainage</h3>
                    <p>The perfect soil for succulents and cacti is <strong>Espoma Cactus Mix.</strong> </p>
                    <p>Also great for growing these plants is Diatomaceous Earth, which can be found in most auto supply stores because it is used to clean up oil spills.</p>
                    <p>Unlike most flowering plants, succulents hate having wet feet. Whether your plants consist of one in a pot, or a combination of different succulents in a shallow container, <strong>it is important that these containers have drainage holes.</strong></p>
                    <p>Plants should be watered down to the root, without flooding.</p>
                </div>
            </div>
        </div>
    )
}

export default SoilCare;