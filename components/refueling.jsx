import React from 'react';
import InputText from '../components/inputtext';


export default class Refueling extends React.Component {
    render() {
        return (
            <div>
                <InputText 
                    type="date" 
                    text="Дата" 
                    name="date" 
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
                    type="range" 
                    list="fuel-remain"
                    text="Остаток топлива в баке (%)"  
                    name="fuel-remain" 
                    getState={(state) => {this.props.getState(state)}} 
                />
                <InputText
                    type="number"
                    min="0"
                    max="1000"
                    text="Заправлено литров" 
                    placeholder="20" 
                    name="liters" 
                    getState={(state) => {this.props.getState(state)}} 
                />
                <InputText 
                    type="number"
                    min="0"
                    max="100"
                    text="Стоимость 1 литра (грн.)" 
                    placeholder="30" 
                    name="cost-per-liter" 
                    getState={(state) => {this.props.getState(state)}} 
                />
                <InputText 
                    text="Название заправки" 
                    placeholder="Окко" 
                    name="oil-station" 
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