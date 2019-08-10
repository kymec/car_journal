import React from 'react';

export default class InputRadio extends React.Component{
    render() {
        return (
            <label className="radio container">
                {this.props.text}
                <input onChange={this.props.click} type="radio" name={this.props.name}></input>
                <span className="checkmarkradio"></span>
            </label>
        );
    }
}
