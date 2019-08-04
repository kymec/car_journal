import React from 'react';
import {NavLink} from 'react-router-dom';
import {PUBLIC_URL} from '../constants';

export default class SelectCar extends React.Component{
    
    render() {
        return (
            <div>
                <select id='selectcar' onChange={(event) => {this.props.current(event.target.value)}} >
                {this.props.car.map(carlist => (                   
                    <option 
                        key={carlist.name} 
                    >
                        {carlist.name}
                    </option>
                ))}
                </select>
                <button 
                    onClick={() => this.props.remove()}
                >
                Remove
                </button>
                <NavLink to={`${PUBLIC_URL}/editcar`}>Edit car</NavLink>
            </div>
            
        );
    }
}