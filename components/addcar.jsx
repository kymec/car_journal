
import React from 'react';
import InputText from '../components/inputtext';


export default class AddCar extends React.Component {
    render() {     
        return (
            <div id="addcar">
                <InputText 
                    name="name" 
                    text="Уникальное имя автомобиля" 
                    placeholder="моя машина"
                    getState={(state) => {this.setState(state)}}
                />
                <InputText
                    name="brand" 
                    text="Марка автомобиля" 
                    placeholder="Honda"
                    getState={(state) => {this.setState(state)}}
                />
                <InputText 
                    name="model" 
                    text="Модель автомобиля" 
                    placeholder="Civic" 
                    getState={(state) => {this.setState(state)}}
                />
                <InputText 
                    type="number"
                    min="1950"
                    max="2025"
                    name="year" 
                    text="Год выпуска автомобиля" 
                    defaultValue={new Date().getFullYear()}
                    getState={(state) => {this.setState(state)}}
                />
                <InputText 
                    type="number"
                    min="0"
                    max="1000000"
                    name="mileage" 
                    text="Пробег автомобиля (км.)"  
                    placeholder="5000" 
                    getState={(state) => {this.setState(state)}}
                />
                <InputText 
                    type="number"
                    min="49"
                    max="20000"
                    name="engine-volume" 
                    text="Обьём двигателя автомобиля (куб.см.)" 
                    placeholder="1800" 
                    getState={(state) => {this.setState(state)}}
                />
                <InputText 
                    type="number"
                    min="3"
                    max="1000"
                    name="fuel-tank" 
                    text="Обьём бака автомобиля (литров)" 
                    placeholder="43" 
                    getState={(state) => {this.setState(state)}}
                />
                <button onClick={() => this.props.add(this.state)}>Сохранить</button>
            </div>
        );
    }
} 