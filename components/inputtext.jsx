import React from 'react';

export default class InputText extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
        };
        this.props.getState({[this.props.name]: props.defaultValue});
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.defaultValue != nextProps.defaultValue) {
            this.setState({
                value: nextProps.defaultValue,
            });
        }        
    }
    change(event) {        
        this.setState({value: event.target.value});
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
                    value={this.state.value || ''} 
                ></input>
            </label>
        );
    }
}
