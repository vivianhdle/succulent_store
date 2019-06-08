import React from 'react';
import './water_care.scss'

function SunCare(){
    return (
        <div className="water-care" id="sun-care">
            <div className="row water-container">
                <div className="guide-text col s12 m4 offset-m1 offset-l2 l3">
                    <h3 className="water-title">Sunlight & Heat</h3>
                    <p>Succulents need bright, direct sunlight (4 to 6 hours a day), but can and will survive in bright indirect light from a southern window. </p>
                    <p>Indirect lighting will require a lot less water. When you bring home your new plant, <strong>slowly increase the amount of light it receives, since these plants were greenhouse-grown</strong>, where lighting is defused.</p>
                    <p>Without direct light shining on the plants the leaves don’t get as hot and are unlikely to sunburn or show signs of too much heat.</p>
                    <p>Some succulents, such as <strong>Haworthias, prefer bright indirect sunlight all day</strong>. On the other hand most cacti can handle direct sunlight with no shade during the day.</p>
                </div>
                <img src="/dist/images/productcare/sunlight.jpg"className="col s12 m5 offset-m1 l4 offset-l1"/>
            </div>
        </div>
    )
}

export default SunCare;