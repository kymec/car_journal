import React from 'react';
import InputRadio from './inputradio';
import Refueling from './refueling';
import OtherCosts from './other-costs';

export default class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "test",
        }
    }
    chooseType() {
        if (this.state.type === "refueling") {
            return (
                <Refueling />
            );
        } else if (this.state.type === "other-costs"){
            return (
                <OtherCosts />
            );
        } else {
            return (
                <div>Error chooseType</div>
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
                <button>Сохранить</button>
            </div>
        );
    }
} 