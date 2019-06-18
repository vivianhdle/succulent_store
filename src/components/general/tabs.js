import React, {Component} from 'react';
import './tabs.scss';

class Tabs extends Component{
    componentDidMount(){
        M.Tabs.init(this.tabs);
    }
    render(){
        return (
            <ul className="tabs col s12 m10 offset-m1 offset-l2 l8" ref={(element)=>{this.tabs=element}}>
                {this.props.active === "plants" ? <li className="tab col s6"><a className="active green-text text-lighten-1" href="#plants">Plants</a></li>:<li className="tab col s6"><a className="green-text text-lighten-1" href="#plants">Plants</a></li>}
                {this.props.active === "terrariums" ? <li className="tab col s6"><a className="orange-text text-lighten-1 active" href="#terrariums">Terrariums</a></li>:<li className="tab col s6"><a className="orange-text text-lighten-1" href="#terrariums">Terrariums</a></li>}
            </ul>
        )
    }
}

export default Tabs;
