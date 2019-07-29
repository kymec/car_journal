import React from 'react';

export default class SelectCar extends React.Component{
    
    render() {
        return (
            <div>
                <select id='selectcar' onChange={(event) => {this.props.current(event.target.value)}}>
                {this.props.car.map(carlist => (                   
                    <option 
                        key={carlist.name} 
                    >
                        {carlist.name}
                    </option>
                ))}
                </select>
                <button 
                    onClick={() => this.props.remove()}
                >
                Remove
                </button>
            </div>
            
        );
    }
}