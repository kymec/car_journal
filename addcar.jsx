import React from 'react';
import InputText from './inputtext';


export default class AddCar extends React.Component {
    render() {        
        return (
            <div id="addcar">
                <InputText name="name" text="Уникальное имя автомобиля" placeholder="ракета" />
                <InputText name="brand" text="Марка автомобиля" placeholder="Honda" />
                <InputText name="model" text="Модель автомобиля" placeholder="Civic" />
                <InputText name="year" text="Год выпуска автомобиля" placeholder="2019" />
                <InputText name="mileage" text="Пробег автомобиля (км.)"  placeholder="5000" />
                <InputText name="engine-volume" text="Обьём двигателя автомобиля (куб.см.)" placeholder="1800" />
                <InputText name="fuel-tank" text="Обьём бака автомобиля (литров)" placeholder="43" />
                <button>Сохранить</button>
            </div>
        );
    }
} 