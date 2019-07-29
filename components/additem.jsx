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
        }
    }
    filterState(state) {     
        console.log(state);   
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
                'current': state.current || this.props.cars[0].name || '',
                'type': state.type,
            };
        } else if (state.type === 'other-costs') {
            newState = {
                'date': state.date || '',
                'mileage': state.mileage || '',
                'cost': state.cost || '',
                'category': state.category || '',
                'comment': state.comment || '',
                'current': state.current || this.props.cars[0].name || '',
                'type': state.type,
            };
        }
        return newState;
    }
    chooseType() {
        if (this.state.type === "refueling") {
            return (
                <Refueling
                    getState={(state) => {this.setState(state)}}
                />
            );
        } else if (this.state.type === "other-costs"){
            return (
                <OtherCosts 
                    getState={(state) => {this.setState(state)}}
                />
            );
        } else {
            return (
                <div>Выберите тип растрат</div>
            );
        }        
    }
    changeState(type) {
        this.setState({'type': type});    
    }
    render() {        
        return (
            <div id="additem">
                <SelectCar 
                    car={this.props.cars}
                    remove={
                        () => 
                            this.state.current ? 
                            this.props.remove(this.state.current) : 
                            this.props.remove(this.props.cars[0].name)
                        }
                    current={(current) => this.setState({current: current})}
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
                <button onClick={() => this.props.add(this.filterState(this.state))}>Сохранить</button>
            </div>
        );
    }
} 