import React from 'react';
import InputText from './inputtext';

export default class Backup extends React.Component {
    constructor() {
        super();
        this.state = {
            resultcolor: '',
            resulttext: '',
        }
    }
    updateData(id, data) {
        return fetch (`https://api.jsonbin.io/b/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'secret-key': this.state.secret,
            },
            body: JSON.stringify(data),
        })
        .then((res) => {
            if(res.ok) {
                this.setState({
                    resultcolor: "green",
                    resulttext: "Успешно"
                });
            } else {
                this.setState({
                    resultcolor: "red",
                    resulttext: `Ошибка: ${res.message}`
                });
            }
        })
        .catch((err) => console.log(err));
    }
    
    getData(id) {
        return fetch (`https://api.jsonbin.io/b/${id}/latest`, {
            method: 'GET',
            headers: {
                'secret-key': this.state.secret,
            },
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.cars && res.journal) {
                localStorage.setItem('cars', JSON.stringify(res.cars));
                localStorage.setItem('journal', JSON.stringify(res.journal));
                this.setState({
                    resultcolor: "green",
                    resulttext: "Успешно"
                });
            } else {
                this.setState({
                    resultcolor: "red",
                    resulttext: `Ошибка: ${res.message}`
                });
            }
            
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <div id="backup">
                <h1>Создание копии на JSONbin</h1>
                <InputText
                    type="text"
                    name="id" 
                    text="Ведите Ваш id на JSONbin"
                    getState={(state) => {this.setState(state)}}
                />
                <InputText
                    type="password"
                    name="secret" 
                    text="Ведите Ваш ключ на JSONbin"
                    getState={(state) => {this.setState(state)}}
                />
                <div>
                    <button
                        onClick={() => {
                            this.getData(this.state.id)
                        }} 
                    >Получить</button>
                    <button 
                        onClick={() => {
                            this.updateData(this.state.id, {
                                "cars": JSON.parse(localStorage.getItem('cars')),
                                "journal": JSON.parse(localStorage.getItem('journal'))
                            })
                        }} >Отправить</button>                        
                </div>
                <div id="result" style={{'color': `${this.state.resultcolor}`}}>
                    {this.state.resulttext}
                </div>
            </div>
        )
    }
}