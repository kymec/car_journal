import React from 'react';
import {NavLink} from 'react-router-dom';
import {PUBLIC_URL} from '../constants';
import imageEdit from '../images/icons/edit.png';
import imageRemove from '../images/icons/delete.png';

export default class SelectCar extends React.Component{
    
    render() {
        return (
            <div id='selectcar'>
                <select 
                    onChange={(event) => {this.props.current(event.target.value)}}                     
                    defaultValue={this.props.selected}
                >
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
                    <img alt="Удалить" src={imageRemove}/>
                </button>
                <NavLink to={`${PUBLIC_URL}/editcar`}><img alt="Изменить" src={imageEdit}/></NavLink>
            </div>
            
        );
    }
}