import React from 'react';
import InputRadio from '../components/inputradio';
import Refueling from '../components/refueling';
import OtherCosts from '../components/other-costs';
import SelectCar from './selectcar';

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            cars: this.props.cars,
            current: this.props.cars[0] ? this.props.cars[0].name : '',
            defaultMileage: this.props.cars[0] ? this.props.cars[0].mileage : '',
            buttonState1: true,
            buttonState2: true,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cars != nextProps.cars) {
            this.setState({
                cars: nextProps.cars,
                current: nextProps.cars[0] ? nextProps.cars[0].name : '',
                defaultMileage: nextProps.cars[0] ? nextProps.cars[0] : '',
            });
        }
    }
    filterState(state) {  
        let newState;
        if (state.type === 'refueling') {
            newState = {
                'date': state.date || '',
                'mileage': state.mileage || '',
                'fuel-remain': state['fuel-remain'] || '',
                'liters': state.liters || '',
                'cost-per-liter': state['cost-per-liter'] || '',
                'oil-station': state['oil-station'] || '',
                'comment': state.comment || '',
                'type': state.type,
                'current': state.current,
            };
        } else if (state.type === 'other-costs') {
            newState = {
                'date': state.date || '',
                'mileage': state.mileage || '',
                'cost': state.cost || '',
                'category': state.category || '',
                'comment': state.comment || '',
                'type': state.type,
                'current': state.current,
            };
        }
        return newState;
    }
    chooseType() {
        if (this.state.type === "refueling") {
            return (
                <Refueling
                    getState={(state) => {this.setState(state)}}
                    defaultMileage={this.state.defaultMileage}                    
                    buttonstate={(state) => this.setState({buttonState1: state})}
                />
            );
        } else if (this.state.type === "other-costs"){
            return (
                <OtherCosts 
                    getState={(state) => {this.setState(state)}}
                    defaultMileage={this.state.defaultMileage}
                    buttonstate={(state) => this.setState({buttonState2: state})}
                />
            );
        } else {
            return (
                <div>Выберите тип растрат</div>
            );
        }        
    }
    changeState(type) {
        this.setState({
            'type': type,
            buttonState1: true,
            buttonState2: true,
        });    
    }    
    render() {
        return (
            <div id="additem">
                <SelectCar 
                    car={this.props.cars}
                    remove={() => this.props.remove(this.state.current)}
                    current={(current) => {
                        this.currentIndex = this.props.cars.map((obj) => obj.name).indexOf(current);                        
                        this.setState({current: current, defaultMileage: this.props.cars[this.currentIndex].mileage,});
                        }}
                />                             
                <InputRadio 
                    name="type" 
                    click={() => this.changeState('refueling')} 
                    text="Заправка"
                />
                <InputRadio 
                    name="type" 
                    click={() => this.changeState('other-costs')} 
                    text="Другие траты"
                />
                {this.chooseType()} 
                <button 
                    onClick={() => this.props.add(this.filterState(this.state))}
                    disabled={this.state.buttonState1 && this.state.buttonState2}
                >Сохранить</button>
            </div>
        );
    }
} 