import React from 'react';

export default class InputText extends React.Component{
    change(event) {
        if (this.props.getState) {
            this.props.getState({[this.props.name]: event.target.value});
        }        
    }
    render() {
        return (
            <label>
                {this.props.text}
                <input 
                    type={this.props.type} 
                    min={this.props.min}
                    max={this.props.max}
                    name={this.props.name} 
                    placeholder={this.props.placeholder}
                    onChange={this.change.bind(this)}
                ></input>
            </label>
        );
    }
}
