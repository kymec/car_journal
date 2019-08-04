import React from 'react';
import SelectCar from '../components/selectcar';
import ShowItems from '../components/showitems';

export default class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "1950-01-01",
            to: "2050-01-01",
            cars: props.cars[0] ? props.cars : '',
            current: props.cars[0] ? props.cars[0].name : '',
        };        
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cars != nextProps.cars) {
            this.setState({
                cars: nextProps.cars,
                current: nextProps.cars[0] ? nextProps.cars[0].name : '',
            });
        }
    }

    render() {
        return (
            <div>
                <SelectCar 
                    car={this.props.cars}
                    remove={() => this.props.remove(this.state.current)}
                    current={(current) => this.setState({current: current})}
                /> 
                <div>
                    <div>период с:</div>
                    <input 
                        type='date' 
                        onChange={(event) => this.setState({from: event.target.value})}
                    ></input>
                    <div>по:</div>
                    <input 
                        type='date' 
                        onChange={(event) => this.setState({to: event.target.value})}
                        defaultValue={new Date().yyyymmdd()}
                    ></input>
                </div>
                <div>
                    <ShowItems 
                        items={this.props.items}
                        current={ this.state.current }
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
                        current={ this.state.current }
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