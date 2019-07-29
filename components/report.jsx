import React from 'react';
import SelectCar from '../components/selectcar';
import ShowItems from '../components/showitems';

export default class Report extends React.Component {
    constructor() {
        super();
        this.state = {
            from: "1950-01-01",
            to: "2050-01-01",
        };
        
    }
    

    render() {
        return (
            <div>
                <SelectCar 
                    car={this.props.cars}
                    remove={
                        () => 
                            this.state.current ? 
                            this.props.remove(this.state.current) : 
                            this.props.remove(this.props.cars[0].name)
                        }
                    current={(current) => this.setState({current: current})}
                /> 
                <div>
                    <div>период с:</div>
                    <input type='date' onChange={(event) => this.setState({from: event.target.value})}></input>
                    <div>по:</div>
                    <input type='date' onChange={(event) => this.setState({to: event.target.value})}></input>
                </div>
                <div>
                    <ShowItems 
                        items={this.props.items}
                        current={ this.state.current ? this.state.current : this.props.cars[0] ? this.props.cars[0].name : '' }
                        filter={{
                            type: 'refueling',
                            from: this.state.from,
                            to: this.state.to,
                        }}
                        header={'Заправка'}
                        removeItem={(item) => this.props.removeItem(item)}
                    />
                    <ShowItems 
                        items={this.props.items}
                        current={ this.state.current ? this.state.current : this.props.cars[0] ? this.props.cars[0].name : '' }
                        filter={{
                            type: 'other-costs',
                            from: this.state.from,
                            to: this.state.to,
                        }}
                        header={'Другие расходы'}                        
                        removeItem={(item) => this.props.removeItem(item)}
                    />
                </div>
            </div>
        );
    }
} 