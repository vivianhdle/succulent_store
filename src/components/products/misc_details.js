import React, {Component} from 'react';
import {toWords} from '../../helpers';
import './misc_details.scss';

class MiscDetails extends Component{
    constructor(props){
        super(props);
    }
    renderTd(key1,key2){
        if (key1 && key2){
            return (
                <tr key={key1}>
                    <td><strong>{toWords(key1)}</strong></td>
                    <td>{this.props.details[key1]}</td>
                    <td><strong>{toWords(key2)}</strong></td>
                    <td>{this.props.details[key2]}</td>
                </tr>
            )
        } else {
            <tr key={key1}>
                <td><strong>{toWords(key1)}</strong></td>
                <td>{this.props.details[key1]}</td>
            </tr>
        }
        
    }

    renderTable(){
        let tempArray=[];
        const additionalInfo = []
        for (let key in this.props.details){
            tempArray.push(key);
        }
        for (let arrIndex=0;arrIndex<tempArray.length;arrIndex+=2){
            additionalInfo.push(this.renderTd(tempArray[arrIndex],tempArray[arrIndex+1]));
        }
        return additionalInfo;
    }
    render(){
        const miscDetails = this.renderTable();
        return (
            <div className="col s10 offset-s1 offset-l2 l8">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Additional Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {miscDetails}
                    </tbody>
                </table>
            </div>
        )
        
    }
}

export default MiscDetails;