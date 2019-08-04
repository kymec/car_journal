import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import {PUBLIC_URL} from '../constants.js';
import SelectCar from './selectcar';

export default class Choose extends React.Component {
    render() {
        const activeStyle = {
            color: 'blue',
        }        
        return (
            <div id="menu">
                <NavLink to={`${PUBLIC_URL}/`}>Main</NavLink>
                <nav>                    
                    <NavLink activeStyle={activeStyle} to={`${PUBLIC_URL}/addcar`}>Add car</NavLink>
                    <NavLink activeStyle={activeStyle} to={`${PUBLIC_URL}/additem`}>Add item</NavLink>
                    <NavLink activeStyle={activeStyle} to={`${PUBLIC_URL}/report`}>Report</NavLink>
                </nav>

            </div>
        );
    }
} 