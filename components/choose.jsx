import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import {PUBLIC_URL} from '../constants.js';
import imageMain from '../images/icons/home.png';
import imageAddCar from '../images/icons/addcar.png';
import imageAddItem from '../images/icons/additem.png';
import imageReport from '../images/icons/report.png';

export default class Choose extends React.Component {
    render() {
        const activeStyle = {
            color: 'blue',
        }        
        return (
            <div id="menu">                
                <nav>
                    <NavLink to={`${PUBLIC_URL}/`}><img alt="Главная" src={imageMain}/></NavLink>          
                    <NavLink activeStyle={activeStyle} to={`${PUBLIC_URL}/addcar`}><img alt="Добавить авто" src={imageAddCar}/></NavLink>
                    <NavLink activeStyle={activeStyle} to={`${PUBLIC_URL}/additem`}><img alt="Добавить запись" src={imageAddItem}/></NavLink>
                    <NavLink activeStyle={activeStyle} to={`${PUBLIC_URL}/report`}><img alt="Отчёт" src={imageReport}/></NavLink>
                </nav>
            </div>
        );
    }
} 