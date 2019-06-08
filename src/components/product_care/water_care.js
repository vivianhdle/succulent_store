import React from 'react';
import './water_care.scss'

function WaterCare(){
    return (
        <div className="water-care">
            <div className="row water-container">
                <div className="guide-text col s12 m4 offset-m1 offset-l2 l3">
                    <h3 className="water-title">Watering</h3>
                    <p>Evening is the best time to water succulents, as this is their resting time. <strong>Never mist</strong> these plants as it will cause spotting and/or rotting.</p>
                    <p>It is always better to revive a plant that has too little water than to overwater. Plants with leaves that pucker aren’t getting enough water; the ones with soggy leaves are getting too much water.</p>
                    <p>If you happen to forget to water your succulents for 3+ weeks, do not worry.  At that point the plant will ration it's water until you water it.</p>
                </div>
                <img src="/dist/images/productcare/watering.jpg"className="col s12 m5 offset-m1 l4 offset-l1"/>
            </div>
        </div>
    )
}

export default WaterCare;