import React from 'react';
import InputText from '../components/inputtext';
import SelectCategory from '../components/select-category';


export default class OtherCosts extends React.Component {
    render() {
        return (
            <div>
                <InputText 
                    type="date" 
                    text="Дата" 
                    name="date" 
                    getState={(state) => {this.props.getState(state)}} 
                />
                <SelectCategory 
                    text="Категория растрат" 
                    name="category" 
                    getState={(state) => {this.props.getState(state)}}
                />
                <InputText 
                    type="number"
                    min="0"
                    max="10000000"
                    text="Пробег (км.)" 
                    placeholder="5000" 
                    name="mileage"
                    getState={(state) => {this.props.getState(state)}} 
                />
                <InputText 
                    type="number"
                    min="0"
                    max="10000000"
                    text="Стоимость (грн.)" 
                    placeholder="30" 
                    name="cost" 
                    getState={(state) => {this.props.getState(state)}} 
                />
                <InputText 
                    text="Комментарий" 
                    name="comment" 
                    getState={(state) => {this.props.getState(state)}} 
                />
            </div>
        );
    }
}