import React from 'react';
import InputRadio from './inputradio';
import Refueling from './refueling';
import OtherCosts from './other-costs';

export default class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "",
        }
    }
    chooseType() {
        if (this.state.type === "refueling") {
            return (
                <Refueling
                    getState={(state) => {this.setState(state)}}
                />
            );
        } else if (this.state.type === "other-costs"){
            return (
                <OtherCosts 
                    getState={(state) => {this.setState(state)}}
                />
            );
        } else {
            return (
                <div>Выберите тип растрат</div>
            );
        }        
    }
    changeState(type) {
        this.setState({'type': type});  
    }
    render() {        
        return (
            <div id="additem">                                
                <InputRadio name="type" click={() => this.changeState('refueling')} text="Заправка"/>
                <InputRadio name="type" click={() => this.changeState('other-costs')} text="Другие траты"/>
                {this.chooseType()}
                <button onClick={() => console.log(this.state)}>Сохранить</button>
            </div>
        );
    }
} 