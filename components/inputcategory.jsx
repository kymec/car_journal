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
            <label>
                <input 
                    onChange={this.props.click} 
                    type="checkbox" 
                    name={this.props.name}
                    defaultChecked
                />{this.props.name} 
            </label>      
        );
    }
}