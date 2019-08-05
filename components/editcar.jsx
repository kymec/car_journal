import React from 'react';
import InputText from '../components/inputtext';


export default class EditCar extends React.Component {
    constructor(props) {
        super(props);
        if(props.cars[0]) {
            props.cars.map((car) => {if(car.name === this.props.current){this.currentCar = car}});
            this.state = {
                buttonState: false,
                'brand': this.currentCar.brand,
                'engine-volume': this.currentCar['engine-volume'],
                'fuel-tank': this.currentCar['fuel-tank'],
                'mileage': this.currentCar.mileage,
                'model': this.currentCar.model,
                'name': this.currentCar.name,
                'year': this.currentCar.year,
                current: '',
            }
        }
        this.state       
        this.inputvalue = {};
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cars != nextProps.cars) {
            this.currentCar = nextProps.cars[0];
            this.setState({
                buttonState: false,
                'brand': this.currentCar.brand,
                'engine-volume': this.currentCar['engine-volume'],
                'fuel-tank': this.currentCar['fuel-tank'],
                'mileage': this.currentCar.mileage,
                'model': this.currentCar.model,
                'name': this.currentCar.name,
                'year': this.currentCar.year,
                current: '',
            })
        }
    }
    checkInput(state) {
        this.inputvalue = {...this.inputvalue, ...state};
        if(
            this.inputvalue.name &&
            this.inputvalue.brand &&
            this.inputvalue.model &&
            this.inputvalue.year &&
            this.inputvalue.mileage &&
            this.inputvalue['engine-volume'] &&
            this.inputvalue['fuel-tank']
        ) {
            this.setState({buttonState: false});
        } else {
            this.setState({buttonState: true});
        }
        
    }
    render() {
        return (
            <div id="editcar">
                <InputText
                    type="text"
                    name="name" 
                    disabled
                    text="Уникальное имя автомобиля" 
                    placeholder="моя машина"
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state ? this.state.name : ''}/>
                <InputText
                    type="text"
                    name="brand" 
                    text="Марка автомобиля" 
                    placeholder="Honda"
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state ? this.state.brand : ''}
                />
                <InputText 
                    type="text"
                    name="model" 
                    text="Модель автомобиля" 
                    placeholder="Civic" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state ? this.state.model : ''}
                />
                <InputText 
                    type="number"
                    min="1950"
                    max="2025"
                    name="year" 
                    text="Год выпуска автомобиля" 
                    defaultValue={this.state ? this.state.year : ''}
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
                    defaultValue={this.state ? this.state.mileage : ''}
                />
                <InputText 
                    type="number"
                    min="49"
                    max="20000"
                    name="engine-volume" 
                    text="Обьём двигателя автомобиля (куб.см.)" 
                    placeholder="1800" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state ? this.state['engine-volume'] : ''}
                />
                <InputText 
                    type="number"
                    min="3"
                    max="1000"
                    name="fuel-tank" 
                    text="Обьём бака автомобиля (литров)" 
                    placeholder="43" 
                    getState={(state) => {this.setState(state); this.checkInput(state)}}
                    defaultValue={this.state ? this.state['fuel-tank'] : ''}
                />
                <button 
                    onClick={() => {
                        this.props.edit({
                            name: this.state.name,
                            brand: this.state.brand,
                            model: this.state.model,
                            'engine-volume': this.state['engine-volume'],
                            'fuel-tank': this.state['fuel-tank'],
                            year: this.state.year,
                            mileage: this.state.mileage,
                        });
                    }}
                    disabled={this.state ? this.state.buttonState : false}
                >Сохранить</button>
            </div>
        );
    }
} 