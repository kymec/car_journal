import React from 'react';
import InputText from '../components/inputtext';
import SelectCategory from '../components/select-category';


export default class OtherCosts extends React.Component {
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
            this.inputvalue.category &&
            this.inputvalue.cost
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
                <SelectCategory 
                    text="Категория растрат" 
                    name="category" 
                    getState={(state) => {this.props.getState(state); this.checkInput(state)}}
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
                    type="number"
                    min="0"
                    max="10000000"
                    text="Стоимость (грн.)" 
                    placeholder="30" 
                    name="cost" 
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