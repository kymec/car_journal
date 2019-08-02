
import React from 'react';
import InputText from '../components/inputtext';


export default class AddCar extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonState: true,
        }
        this.inputvalue = {};
    }
    
    checkInput(state) {
        this.inputvalue = {...this.inputvalue, ...state};
        if(
            this.inputvalue.name !== undefined &&
            this.inputvalue.name !== '' &&
            this.inputvalue.brand !== undefined &&
            this.inputvalue.brand !== '' &&
            this.inputvalue.model !== undefined &&
            this.inputvalue.model !== '' &&
            this.inputvalue.year !== undefined &&
            this.inputvalue.year !== '' &&
            this.inputvalue.mileage !== undefined &&
            this.inputvalue.mileage !== '' &&
            this.inputvalue['engine-volume'] !== undefined &&
            this.inputvalue['engine-volume'] !== '' &&
            this.inputvalue['fuel-tank'] !== undefined &&
            this.inputvalue['fuel-tank'] !== ''
        ) {
            this.setState({buttonState: false});
        } else {
            this.setState({buttonState: true});
        }
        
    }
    render() {
        return (
            <div id="addcar">
                <InputText 
                    name="name" 
                    text="Уникальное имя автомобиля" 
                    placeholder="моя машина"
                    getState={(state) => {this.setState(state); this.checkInput(state)}}/>
                <InputText
                    name="brand" 
                    text="Марка автомобиля" 
                    placeholder="Honda"
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                />
                <InputText 
                    name="model" 
                    text="Модель автомобиля" 
                    placeholder="Civic" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                />
                <InputText 
                    type="number"
                    min="1950"
                    max="2025"
                    name="year" 
                    text="Год выпуска автомобиля" 
                    defaultValue={new Date().getFullYear()}
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                />
                <InputText 
                    type="number"
                    min="0"
                    max="1000000"
                    name="mileage" 
                    text="Пробег автомобиля (км.)"  
                    placeholder="5000" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                />
                <InputText 
                    type="number"
                    min="49"
                    max="20000"
                    name="engine-volume" 
                    text="Обьём двигателя автомобиля (куб.см.)" 
                    placeholder="1800" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                />
                <InputText 
                    type="number"
                    min="3"
                    max="1000"
                    name="fuel-tank" 
                    text="Обьём бака автомобиля (литров)" 
                    placeholder="43" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                />
                <button 
                    onClick={() => this.props.add(this.state)}
                    disabled={this.state.buttonState}
                >Сохранить</button>
            </div>
        );
    }
} 