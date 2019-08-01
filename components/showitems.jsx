import React from 'react';
import InputCategory from '../components/inputcategory';
import categoryList from '../categorylist';

export default class ShowItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.sumRef = 0;
        this.sumOth = 0;
        this.RefQnt = 0;
        this.RefFirstMileage = 0;
        this.RefLastMileage = 0;
        this.RefFirstLiters = 0;
        this.RefLastLitersSum = 0;
        this.RefLastLiters = 0;
        this.RefBeforeLastLiters = 0;
        this.RefBeforeLastLitersSum = 0;
        this.RefFirstCost = 0;
        this.RefLastCost = 0;
        this.RefBeforeLastCost = 0;
        this.RefBeforeLastMileage = 0;
        this.category={};
        this.state = this.getCategoryList()
        
    }
    getCategoryList() {
        let obj = {};
        for (let i = 0; i < categoryList.length; i += 1) {
            obj[categoryList[i]] = true;
        }        
        return obj;
    }
    showRow(obj, car, index) {
        if (
            obj.current === car && 
            obj.type === this.props.filter.type &&
            new Date(obj.date) <= new Date(this.props.filter.to) &&
            new Date(obj.date) >= new Date(this.props.filter.from) 
            ) {
                if (obj.type === 'refueling') {
                    this.sumRef += obj.liters * obj['cost-per-liter'];
                    this.RefQnt += 1;
                    if (this.RefFirstMileage === 0) {
                        this.RefFirstMileage = +obj.mileage;
                    }
                    this.RefBeforeLastMileage = this.RefLastMileage;
                    this.RefLastMileage = +obj.mileage;
                    this.RefBeforeLastLiters = this.RefLastLiters;
                    this.RefBeforeLastLitersSum = this.RefLastLitersSum;
                    this.RefBeforeLastCost = this.RefLastCost;
                    this.RefLastLitersSum += +obj.liters;
                    this.RefLastLiters = +obj.liters;
                    this.RefLastCost += obj.liters * obj['cost-per-liter'];

                    return (
                        <div className="reportList">
                            <div>Дата: {obj.date}</div>
                            <div>Пробег: {obj.mileage} км</div>
                            <div>Стоимость заправки: {obj.liters * obj['cost-per-liter']} грн.</div>
                            <div>Заправка: {obj['oil-station']}</div>
                            <div>Комментарий: {obj.comment}</div>
                            <button onClick={() => this.props.removeItem(index)}>Удалить</button>
                        </div>
                    )
                } else if (obj.type === 'other-costs' && this.state[obj.category]) {
                    this.sumOth += +obj.cost;
                    return (
                        <div>
                            <div className="reportList">
                                <div>Дата: {obj.date}</div>
                                <div>Пробег: {obj.mileage} км</div>
                                <div>Категория: {obj.category} грн.</div>
                                <div>Стоимость: {obj.cost} грн.</div>
                                <div>Комментарий: {obj.comment}</div>
                                <button onClick={() => this.props.removeItem(index)}>Удалить</button>
                            </div>
                        </div>
                        
                    )
                } else {
                    return (
                        <div className="reportList"></div>
                    )
                }
        }
        
    }
    fuelConsumption() {
        if (this.props.filter.type === 'refueling') {
            return (
                <div>              
                    <div>Расход топлива средний: литров / 100 км{this.middleCons()}</div>
                    <div>Расход топлива с последней заправки: литров / 100 км{this.middleConsLast()}</div>
                    <div>Расход топлива средний: грн. / 1000 км{this.middleConsCost()}</div>
                </div>
            );
        }
    }
    middleCons() {
        if (this.RefQnt > 2) {
            return (
                <div>
                    {this.RefBeforeLastLitersSum / (this.RefLastMileage - this.RefFirstMileage) * 100}
                </div>
            );            
        } else {
            return (<div>Надо добавить не меньше 3-х заправок</div>);            
        }
    }
    middleConsLast() {
        if (this.RefQnt > 1) {
            return (
                <div>
                    {this.RefBeforeLastLiters / (this.RefLastMileage - this.RefBeforeLastMileage) * 100}
                </div>
            );            
        } else {
            return (<div>Надо добавить не меньше 2-х заправок</div>);            
        }
    }
    middleConsCost() {
        if (this.RefQnt > 2) {
            return (
                <div>
                    {this.RefBeforeLastCost / (this.RefLastMileage - this.RefFirstMileage) * 1000}
                </div>
            );            
        } else {
            return (<div>Надо добавить не меньше 3-х заправок</div>);            
        }
    }
    render() {
        this.sumRef = 0;
        this.sumOth = 0;
        this.RefQnt = 0;
        this.RefFirstMileage = 0;
        this.RefLastMileage = 0;
        this.RefFirstLiters = 0;
        this.RefLastLitersSum = 0;
        this.RefLastLiters = 0;
        this.RefBeforeLastLiters = 0;
        this.RefBeforeLastLitersSum = 0;
        this.RefFirstCost = 0;
        this.RefLastCost = 0;
        this.RefBeforeLastCost = 0;
        this.RefBeforeLastMileage = 0;
        return (
            <div>                
                <div>{this.props.header}</div>
                {   this.props.header === 'Другие расходы' ?                    
                    categoryList.map((item) => (
                        <InputCategory 
                        key={item}
                        click={() => (this.setState({[item]: !this.state[item]}))}
                        name={item}
                        />
                    )) : <div />
                }
                {this.props.items.map((item, index) => (                   
                    <div 
                        key={index}
                    >
                        {this.showRow(item, this.props.current, index)}                       
                    </div>
                ))}
                {this.fuelConsumption()}
                <div>Всего за период: { this.props.filter.type === 'refueling' ? this.sumRef : this.sumOth }</div>

            </div>
            
        );
    }
}