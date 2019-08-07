import React from 'react';
import InputText from '../components/inputtext';
import {PUBLIC_URL} from '../constants';


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
        this.setState({
            error: '',
            borderStyle: {},
        });
        this.inputvalue.error = '';
        this.props.cars.map((value) => {
            if(value.name === this.inputvalue.name) {
                this.setState({
                    error: 'такое имя автомобиля уже существует',
                    borderStyle: {border: '1px solid red'},
                });
                this.inputvalue.error = 'такое имя автомобиля уже существует';
            }
        });
        if(
            this.inputvalue.name &&
            this.inputvalue.brand &&
            this.inputvalue.model &&
            this.inputvalue.year &&
            this.inputvalue.mileage &&
            this.inputvalue['engine-volume'] &&
            this.inputvalue['fuel-tank'] &&
            this.inputvalue.error === ''
        ) {
            this.setState({buttonState: false});
        } else {
            this.setState({buttonState: true});
        }
        
    }
    render() {
        return (
            <div id="addcar">
                <div className="error">{this.state.error}</div>
                <InputText
                    type="text"
                    name="name" 
                    text="Уникальное имя автомобиля" 
                    placeholder="моя машина"
                    style={this.state.borderStyle}
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state.name || ''}/>
                <InputText
                    type="text"
                    name="brand" 
                    text="Марка автомобиля" 
                    placeholder="Honda"
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state.brand || ''}
                />
                <InputText 
                    type="text"
                    name="model" 
                    text="Модель автомобиля" 
                    placeholder="Civic" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state.model || ''}
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
                    defaultValue={this.state.mileage || 0}
                />
                <InputText 
                    type="number"
                    min="49"
                    max="20000"
                    name="engine-volume" 
                    text="Обьём двигателя автомобиля (куб.см.)" 
                    placeholder="1800" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state['engine-volume'] || 0}
                />
                <InputText 
                    type="number"
                    min="3"
                    max="1000"
                    name="fuel-tank" 
                    text="Обьём бака автомобиля (литров)" 
                    placeholder="50" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state['fuel-tank']}
                />
                <button 
                    onClick={() => {
                        this.props.add({
                            name: this.state.name,
                            brand: this.state.brand,
                            model: this.state.model,
                            'engine-volume': this.state['engine-volume'],
                            'fuel-tank': this.state['fuel-tank'],
                            year: this.state.year,
                            mileage: this.state.mileage,
                        });
                        location.href = PUBLIC_URL;
                    }}
                    disabled={this.state.buttonState}
                >Сохранить</button>
            </div>
        );
    }
} 