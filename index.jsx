import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';
import './style.css';
import Choose from './components/choose';
import AddCar from './components/addcar';
import AddItem from './components/additem';
import Report from './components/report';
import { connect } from 'react-redux';
import * as Constants from './actions';

Date.prototype.yyyymmdd = function() {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
  };

class MainPage extends React.Component {
    componentDidMount() {
        this.props.getList();
        this.props.getItem();
    }

    render() {
        return (           
            <Router>
                <Route path="/" component={Choose} /><br />          
                <Switch>
                    <Route 
                        path="/addcar" 
                        render={(props) => 
                            <AddCar {...props} 
                                add={(car) => this.props.addcar(car)} 
                                cars={this.props.cars}
                            />}
                    />
                    <Route 
                        path="/additem"
                        render={(props) => 
                            <AddItem {...props} 
                                add={(item) => this.props.additem(item)}
                                cars={this.props.cars}
                                remove={(car) => this.props.remove(car)}
                            />}
                    />
                    <Route 
                        path="/report" 
                        render={(props) => 
                            <Report {...props}
                                cars={this.props.cars}
                                items={this.props.items}
                                remove={(car) => this.props.remove(car)}                                
                                removeItem={(item) => this.props.removeItem(item)}
                            />}
                    />     
                </Switch>
            </Router>
        );
    }
}

const CarsConnected = connect (
    (state) => ({ 
        cars: state.cars,
        items: state.items,
        currentcar: state.currentcar,
    }),
    (dispatch) => ({ 
        addcar: (car) => dispatch({ type: Constants.ADD_CAR, car }),
        additem: (item) => dispatch({ type: Constants.ADD_ITEM, item }),
        getList: () => dispatch({ type: Constants.GET_CAR}),
        remove: (car) => dispatch({ type: Constants.REMOVE_CAR, car }),
        removeItem: (item) => dispatch({ type: Constants.REMOVE_ITEM, item }),
        getItem: () => dispatch({ type: Constants.GET_ITEM}),
    }),
)(MainPage);

ReactDOM.render((
    <Provider store={Store}>
        <CarsConnected />
    </Provider>
    
    ), document.getElementById('root'));