import React from 'react';
import {PUBLIC_URL} from '../constants';
import {NavLink} from 'react-router-dom';
import imageEdit from '../images/icons/edit.png';
import imageRemove from '../images/icons/delete.png';
import imageAdd from '../images/icons/add.png';

export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.cars ? this.props.cars : '',
            current: this.props.setcurrent ? this.props.setcurrent : '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cars != nextProps.cars) {
            this.setState({
                cars: nextProps.cars,
                current: nextProps.setcurrent ? nextProps.setcurrent : '',                
            });
        }
    }
    render() {
        return (
            <div id="carlist">
                {this.props.cars.map(carlist => (                   
                    <div 
                        key={carlist.name}
                    >
                        {carlist.name}
                        <div>
                            <button 
                                onClick = {() => {
                                    this.props.current(carlist.name);
                                    this.props.history.push(`${PUBLIC_URL}/additem`);
                                }
                            }>
                                <img alt="Добавить запись" src={imageAdd}/>
                                </button>
                            <button
                                onClick = {() => {
                                    this.props.current(carlist.name);
                                    this.props.history.push(`${PUBLIC_URL}/editcar`);
                                }
                            }>
                                <img alt="Изменить" src={imageEdit}/>                        
                            </button>
                            <button
                                onClick={() => {
                                    this.props.current(carlist.name);
                                    if(confirm('Вы уверены что хотите удалить?')) {
                                        this.props.remove(carlist.name);
                                    }                        
                                }}
                            >
                                <img alt="Удалить" src={imageRemove}/>                                
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}