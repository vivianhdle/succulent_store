import React, {Component} from 'react';


class SideNav extends Component{
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }
    render(){
        const {links}=this.props;
        return(
            <ul ref={(element)=>{this.sidenav=element}} id="sidenav" className="sidenav">
                {links}
            </ul>
        )
    }
}

export default SideNav;




