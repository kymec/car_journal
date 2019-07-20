import React from 'react';
import InputText from './inputtext';


export default class Refueling extends React.Component {
    render() {
        return (
            <div>
                <InputText type="date" text="Дата" name="date" />
                <InputText text="Пробег (км.)" placeholder="5000" name="mileage" />
                <InputText type="range" text="Остаток топлива в баке (%)"  name="fuel-remain" />
                <InputText text="Заправлено литров" placeholder="20" name="liters" />
                <InputText text="Стоимость 1 литра (грн.)" placeholder="30" name="cost-per-liter" />
                <InputText text="Название заправки" placeholder="Окко" name="oil-station" />
                <InputText text="Комментарий" name="comment" />
            </div>
        );
    }
}