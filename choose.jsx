import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';

export default class Choose extends React.Component {
    render() {
        const activeStyle = {
            color: 'blue',
        }        
        return (
            <div id="menu">
                <NavLink to="/">Main</NavLink>
                <nav>                    
                    <NavLink activeStyle={activeStyle} to="/addcar">Add car</NavLink>
                    <NavLink activeStyle={activeStyle} to="/additem">Add item</NavLink>
                    <NavLink activeStyle={activeStyle} to="/report">Report</NavLink>
                </nav>
                
            </div>
        );
    }
} 