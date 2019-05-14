import React from 'react';
import {toWords} from '../../helpers'

export default props => {
    const {details}=props;
    const additionalInfo = Object.keys(details).map((key)=>{
        let values = details[key];
        if(Array.isArray(values)){
            values=values.join(', ')
        }
        return (
            <tr key={key}>
                <td><strong>{toWords(key)}</strong></td>
                <td>{values}</td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Additional Information</th>
                </tr>
            </thead>
            <tbody>
                {additionalInfo}
            </tbody>
        </table>
    )
}