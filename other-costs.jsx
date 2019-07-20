import React from 'react';
import InputText from './inputtext';
import SelectCategory from './select-category';


export default class OtherCosts extends React.Component {
    render() {
        return (
            <div>
                <InputText type="date" text="Дата" name="date" />
                <SelectCategory text="Категория растрат" name="category" />
                <InputText text="Пробег (км.)" placeholder="5000" name="mileage" />
                <InputText text="Стоимость (грн.)" placeholder="30" name="cost" />
                <InputText text="Комментарий" name="comment" />
            </div>
        );
    }
}