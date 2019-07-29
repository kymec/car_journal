import React from 'react';

export default class SelectCategory extends React.Component{
    render() {
        return (
            <label>
                {this.props.text}
                <select 
                    name={this.props.name} 
                    onChange={(event) => this.props.getState({'category': event.target.value})}
                >
                    <option hidden>Выберите категорию</option>
                    <option>Запчасти</option>
                    <option>Мойка</option>
                    <option>Услуги СТО</option>
                    <option>Аксесуары</option>
                    <option>Штраф</option>
                    <option>Парковка</option>
                    <option>Страховка</option>
                </select>
            </label>
        );
    }
}
