import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';
import './style.css';
import Choose from './components/choose';
import AddCar from './components/addcar';
import EditCar from './components/editcar';
import AddItem from './components/additem';
import Report from './components/report';
import SelectCar from './components/selectcar';
import { connect } from 'react-redux';
import * as Constants from './actions';
import {PUBLIC_URL} from './constants';

Date.prototype.yyyymmdd = function() {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
  };



class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            current: '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cars != nextProps.cars) {
            this.setState({
                cars: nextProps.cars,
                current: nextProps.cars[0] ? nextProps.cars[0].name : '',
            });
        }
    }
    componentDidMount() {
        this.props.getList();
        this.props.getItem();
    }

    render() {
        return (                   
            <Router>
                <Choose cars={this.props.cars} />                          
                <Switch>
                    <Route 
                        exact
                        path={`${PUBLIC_URL}/`} 
                        render={(props) => 
                            <SelectCar {...props}
                                car={this.props.cars}
                                remove={() => this.props.remove(this.state.current)}
                                current={(current) => {                      
                                        this.setState({current: current});
                                    }}
                        /> }
                    />
                    <Route 
                        path={`${PUBLIC_URL}/addcar`}
                        render={(props) => 
                            <AddCar {...props} 
                                add={(car) => this.props.addcar(car)} 
                                cars={this.props.cars}
                            />}
                    />
                    <Route 
                        path={`${PUBLIC_URL}/additem`}
                        render={(props) => 
                            <AddItem {...props} 
                                add={(item) => this.props.additem(item)}
                                cars={this.props.cars}
                                remove={(car) => this.props.remove(car)}
                            />}
                    />
                    <Route 
                        path={`${PUBLIC_URL}/report`} 
                        render={(props) => 
                            <Report {...props}
                                cars={this.props.cars}
                                items={this.props.items}
                                remove={(car) => this.props.remove(car)}                                
                                removeItem={(item) => this.props.removeItem(item)}
                            />}
                    />    
                    <Route 
                        path={`${PUBLIC_URL}/editcar`}
                        render={(props) => 
                            <EditCar {...props} 
                                edit={(car) => this.props.editcar(car)} 
                                cars={this.props.cars}
                                current={this.state.current}
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
    }),
    (dispatch) => ({ 
        addcar: (car) => dispatch({ type: Constants.ADD_CAR, car }),
        editcar: (car) => dispatch({ type: Constants.EDIT_CAR, car }),
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