import React from 'react';
import InputText from '../components/inputtext';



export default class Refueling extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.inputvalue = {};
    }
    checkInput(state) {
        this.inputvalue = {...this.inputvalue, ...state};
        if(
            this.inputvalue.date &&
            this.inputvalue.mileage &&
            this.inputvalue.liters &&
            this.inputvalue['oil-station'] &&
            this.inputvalue['cost-per-liter']
        ) {
            this.props.buttonstate(false);            
        } else {
            this.props.buttonstate(true);
        }        
    }
    render() {
        return (
            <div>
                <InputText 
                    type="date" 
                    text="Дата" 
                    name="date" 
                    getState={(state) => {this.props.getState(state); this.checkInput(state)}}
                    defaultValue={new Date().yyyymmdd()}
                />
                <InputText
                    type="number"
                    min="0"
                    max="10000000"           
                    text="Пробег (км.)" 
                    placeholder="5000"
                    name="mileage"
                    getState={(state) => {this.props.getState(state); this.checkInput(state)}}
                    defaultValue={this.props.defaultMileage}
                />
                <InputText 
                    type="range" 
                    list="fuel-remain"
                    text="Остаток топлива в баке "  
                    name="fuel-remain" 
                    getState={(state) => {this.props.getState(state)}} 
                    defaultValue='0'
                />
                <InputText
                    type="number"
                    min="0"
                    max="1000"
                    text="Заправлено литров" 
                    placeholder="20" 
                    name="liters" 
                    getState={(state) => {this.props.getState(state); this.checkInput(state)}} 
                />
                <InputText 
                    type="number"
                    min="0"
                    max="100"
                    text="Стоимость 1 литра (грн.)" 
                    placeholder="30" 
                    name="cost-per-liter" 
                    getState={(state) => {this.props.getState(state); this.checkInput(state)}} 
                />
                <InputText 
                    type="text"
                    text="Название заправки" 
                    placeholder="Окко" 
                    name="oil-station" 
                    getState={(state) => {this.props.getState(state); this.checkInput(state)}} 
                />
                <InputText 
                    type="text"
                    text="Комментарий" 
                    name="comment" 
                    getState={(state) => {this.props.getState(state)}} 
                />
            </div>
        );
    }
}