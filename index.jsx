import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import './style.css';
import Choose from './choose';
import AddCar from './addcar';
import AddItem from './additem';
import Report from './report';

class MainPage extends React.Component {
    
    render() {
        return (
            <Router>
                <Route path="/" component={Choose} />
                <Switch>                    
                    <Route path="/addcar" component={AddCar} />
                    <Route path="/additem" component={AddItem} />
                    <Route path="/report" component={Report} />         
                </Switch>
            </Router>
        );
    }
}


window.render = function render() {
    ReactDOM.render((
        <div>
            <MainPage />
        </div>
        ), document.getElementById('root'));
}
render();