import React from 'react';
import InputCategory from '../components/inputcategory';
import categoryList from '../categorylist';
import imageRemove from '../images/icons/delete.png';

export default class ShowItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.sumRef = 0;
        this.sumOth = 0;
        this.refQnt = 0;
        this.refFirstMileage = 0;
        this.refLastMileage = 0;
        this.refFirstLiters = 0;
        this.refLastLitersSum = 0;
        this.refLastLiters = 0;
        this.refBeforeLastLiters = 0;
        this.refBeforeLastLitersSum = 0;
        this.refFirstCost = 0;
        this.refLastCost = 0;
        this.refBeforeLastCost = 0;
        this.refBeforeLastMileage = 0;
        this.refDifferenceBefore = 0;
        this.refDifference = 0;
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
                    this.refQnt += 1;
                    if (this.refFirstMileage === 0) {
                        this.refFirstMileage = +obj.mileage;
                    }
                    this.refBeforeLastMileage = this.refLastMileage;
                    this.refLastMileage = +obj.mileage;
                    this.refBeforeLastLiters = this.refLastLiters;
                    this.refBeforeLastLitersSum = this.refLastLitersSum;
                    this.refBeforeLastCost = this.refLastCost;
                    this.refLastLitersSum += +obj.liters;
                    this.refLastLiters = +obj.liters;
                    this.refLastCost += obj.liters * obj['cost-per-liter'];
                    this.refDifference = (this.refDifferenceBefore - obj['fuel-remain']);
                    this.refDifferenceBefore = obj['fuel-remain'];

                    return (
                        <div className="reportList">
                            <div>Дата: {obj.date}</div>
                            <div>Пробег: {obj.mileage} км</div>
                            <div>Стоимость заправки: {obj.liters * obj['cost-per-liter']} грн.</div>
                            <div>Заправка: {obj['oil-station']}</div>
                            <div>Комментарий: {obj.comment}</div>
                            <button onClick={() => this.props.removeItem(index)}><img alt="Удалить" src={imageRemove}/></button>
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
                                <button onClick={() => this.props.removeItem(index)}><img alt="Удалить" src={imageRemove}/></button>
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
                <div id="fuelconsumption">              
                    <div className="fuelconsumptionrow">Расход топлива: {this.middleCons()} литров / 100 км, {this.middleConsCost()} грн. / 100 км</div>
                    <div className="fuelconsumptionrow">Расход топлива с последней заправки: {this.middleConsLast()} литров / 100 км</div>
                </div>
            );
        }
    }
    middleCons() {
        if (this.refQnt > 2) {
            return (
                <div>
                    {Math.round(this.refBeforeLastLitersSum / (this.refLastMileage - this.refFirstMileage) * 10000) / 100}
                </div>
            );            
        } else {
            return (<div>Надо добавить не меньше 3-х заправок</div>);            
        }
    }
    middleConsLast() {
        if (this.refQnt > 1) {
            return (
                <div>
                    {Math.round((this.refBeforeLastLiters + this.refDifference) / (this.refLastMileage - this.refBeforeLastMileage) * 10000) / 100}
                </div>
            );            
        } else {
            return (<div>Надо добавить не меньше 2-х заправок</div>);            
        }
    }
    middleConsCost() {
        if (this.refQnt > 2) {
            return (
                <div>
                    {Math.round(this.refBeforeLastCost / (this.refLastMileage - this.refFirstMileage) * 10000) / 100}
                </div>
            );            
        } else {
            return (<div>Надо добавить не меньше 3-х заправок</div>);            
        }
    }
    render() {
        this.sumRef = 0;
        this.sumOth = 0;
        this.refQnt = 0;
        this.refFirstMileage = 0;
        this.refLastMileage = 0;
        this.refFirstLiters = 0;
        this.refLastLitersSum = 0;
        this.refLastLiters = 0;
        this.refBeforeLastLiters = 0;
        this.refBeforeLastLitersSum = 0;
        this.refFirstCost = 0;
        this.refLastCost = 0;
        this.refBeforeLastCost = 0;
        this.refBeforeLastMileage = 0;
        return (
            <div>                
                <div className="reportheader">{this.props.header}</div>
                <div id="categorylist">
                {   this.props.header === 'Другие расходы' ?                                     
                        categoryList.map((item) => (
                            <InputCategory 
                            key={item}
                            click={() => (this.setState({[item]: !this.state[item]}))}
                            name={item}
                            />                
                        )) 
                    :
                    <div />
                }
                </div>
                {this.props.items.map((item, index) => (                   
                    <div 
                        key={index}
                    >
                        {this.showRow(item, this.props.current, index)}                       
                    </div>
                ))}
                {this.fuelConsumption()}
                <div>Всего за период: { this.props.filter.type === 'refueling' ? this.sumRef : this.sumOth } грн.</div>
            </div>
            
        );
    }
}