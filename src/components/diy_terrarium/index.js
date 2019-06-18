import React from 'react';
import {Link} from 'react-router-dom';
import './diy.scss';

function DIYTerrarium(){
    return(
        <div className="diy-container">
            <div className="row">
                <h4 className="col s12 offset-l2 l8 m10 offset-m1">How to make a succulent terrarium</h4>
            </div>
            <div className="row">
                <img className="col l8 s12 offset-l2 m10 offset-m1" src="/dist/images/diy/terrarium.jpg" alt=""/>
            </div>
            <div className="row">
                <h4 className="col s12offset-l2 l8  m10 offset-m1">Supplies Needed</h4>
            </div>
            <div className="row supplies-container">
                <img className="col s12 l4 offset-l2  m5 offset-m1" src="/dist/images/diy/diy.jpg" alt=""/>
                <div className="supplies s10 offset-s1 col offset-l1 l4 m4 offset-m1">
                    <ul>
                        <li>Vase or jar with large opening (Terrarium)</li>
                        <li>Succulent plants of your choice</li>
                        <li>Soil, preferably cactus mix, as it retains little moisture</li>
                        <li>Sphagum Moss (Optional)</li>
                        <li>Activated Charcoal (Optional)</li>
                        <li>Small stones, pebbles, or gravel for drainage</li>
                        <li>Garden ornaments  or rocks (optional accents) Use birds, snails, mushrooms; large river rocks; glass spiders and bugs</li>
                        <li>Sand</li>
                    </ul>
                    <Link className="col btn green lighten-1 l5 s5">Succulents</Link>
                    {/* <button className="col btn green lighten-1 l5 s5">Succulents</button> */}
                    <button className="col btn orange lighten-1 offset-l1 l4 s5 offset-s1">Terrariums</button>
                </div>
            </div>
            <div className="row">
                <h4 className="col s12 offset-l2 l8 m10 offset-m1" >Simple steps to completing your terrarium</h4>
            </div>
            <div className="row">
                <div className="col offset-l2 l8 m10 offset-m1">
                    <h5>Step1</h5>
                    <p>Prepare a vase or medium sized jar with a larger opening at the top.</p>
                    <h5>Step 2</h5>
                    <p>Place small stones at the bottom of the jar.</p>
                    <h5>Step 3</h5>
                    <p>Add a little thicker layer of soil, enough so that you can let the plants roots.</p>
                    <h5>Step 4</h5>
                    <p>Remove the plant from the pot. Put into your terrarium bowl and gently press.</p>
                    <h5>Step 5</h5>
                    <p>Continue to transplant plants from the largest to the smallest depending on your taste. Get creative here, all terrariums are different. It is hard to go wrong.</p>
                    <h5>Step 6</h5>
                    <p>When you have transplanted all the plants cover the surface with a thin layer of white sand.</p>
                    <h5>Step 7</h5>
                    <p>Add decorative stones or ornaments for the final step. The terrarium is finished.</p>
                </div>
            </div>
        </div>
    )
}

export default DIYTerrarium;