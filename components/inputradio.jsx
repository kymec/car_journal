import React from 'react';

export default class InputRadio extends React.Component{
    render() {
        return (
            <label>
                {this.props.text}
                <input onChange={this.props.click} type="radio" name={this.props.name}></input>
            </label>
        );
    }
}
