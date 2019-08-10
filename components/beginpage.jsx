import React from 'react';
import SelectCar from './selectcar';
import CarList from './carlist';

export default class BeginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.cars ? this.props.cars : '',
            current: this.props.setcurrent ? this.props.setcurrent : '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cars != nextProps.cars) {
            this.setState({
                cars: nextProps.cars,
                current: nextProps.setcurrent ? nextProps.setcurrent : '',                
            });
        }
    }
    render() {
        return (
            <div>
                <h1>Добро пожаловать</h1>
                <h3>Выберите авто для добавления данных</h3>
                {/*<SelectCar 
                    car={this.props.cars}
                    remove={() => this.props.remove(this.state.current)}
                    current={(current) => {
                        this.currentIndex = this.props.cars.map((obj) => obj.name).indexOf(current);                        
                        this.setState({current: current});
                        this.props.getcurrent(current);
                        }}
                    selected={this.state.current}
                    />*/}
                
                <CarList 
                    cars={this.props.cars}
                    history={this.props.history}
                    remove={(current) => this.props.remove(current)}
                    current={(current) => {
                        this.currentIndex = this.props.cars.map((obj) => obj.name).indexOf(current);                        
                        this.setState({current: current});
                        this.props.getcurrent(current);
                    }}
                />  
            </div>
        )
    }
}