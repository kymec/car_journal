import React from 'react';

export default class InputCategory extends React.Component{
    constructor() {
        super();
        this.state = {
            checked: true,
        }
    }
    render() {
        return (
            <label className="container">
                <input 
                    onChange={this.props.click} 
                    type="checkbox" 
                    name={this.props.name}
                    defaultChecked
                /><br/>
                {this.props.name}
                <span className="checkmark"></span>
            </label>      
        );
    }
}