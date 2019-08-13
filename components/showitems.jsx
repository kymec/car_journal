import React from 'react';
import InputCategory from '../components/inputcategory';
import categoryList from '../categorylist';
import imageRemove from '../images/icons/delete.png';
import imageArrow from '../images/icons/arrow.png';

export default class ShowItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayRef: 'none',
            displayOth: 'none',
        };
        this.currenttank = props.currenttank;
        this.hide = true;
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
        this.error = "";
        this.state.category = {...this.getCategoryList()};     
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
            ){
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
                        <div 
                            className="reportList"
                            style={{display: this.state.displayRef}}
                        >
                            <div className="reportListRow">
                                <div>{obj.date}</div>
                                <div>{obj.mileage}</div>
                                <div>{obj.liters * obj['cost-per-liter']}</div>
                                <div>{obj['oil-station']}</div>
                                <button onClick={() => {
                                        if(confirm('Вы уверены что хотите удалить?')) {
                                            this.props.removeItem(index);
                                        }                                    
                                    }}><img alt="Удалить" src={imageRemove}/></button>
                            </div>
                            <div>{obj.comment}</div>
                        </div>
                    )
                } else if (obj.type === 'other-costs' && this.state.category[obj.category]) {
                    this.sumOth += +obj.cost;
                    return (
                        <div>
                            <div 
                                className="reportList"
                                style={{display: this.state.displayOth}}
                            >
                                <div className="reportListRow">
                                    <div>{obj.date}</div>
                                    <div>{obj.mileage}</div>
                                    <div>{obj.cost}</div>
                                    <div>{obj.category}</div>
                                    <button onClick={() => {
                                        if(confirm('Вы уверены что хотите удалить?')) {
                                            this.props.removeItem(index);
                                        }                                    
                                    }}><img alt="Удалить" src={imageRemove}/></button>
                                </div>
                                <div>{obj.comment}</div>
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
                    <div className="fuelconsumptionrow">Расход {this.middleCons()} л/100км, {this.middleConsCost()} грн/100км</div>
                    <div className="fuelconsumptionrow">Расход последний {this.middleConsLast()} л/100км</div>
                    <div className="error">{this.error}</div>
                </div>
            );
        }
    }
    middleCons() {
        if (this.refQnt > 2) {
            this.error = "";
            return (
                <div>
                    {Math.round(this.refBeforeLastLitersSum / (this.refLastMileage - this.refFirstMileage) * 10000) / 100}
                </div>
            );            
        } else { 
            this.error = "Внесите минимум 3 заправки";           
            return (<div>---</div>);       
        }
    }
    middleConsLast() {
        if (this.refQnt > 1) {
            this.error = "";
            return (
                <div>
                    {Math.round((this.refBeforeLastLiters + this.refDifference * this.props.currenttank / 100) / (this.refLastMileage - this.refBeforeLastMileage) * 10000) / 100}
                </div>
            );            
        } else {
            this.error = "Внесите минимум 2 заправки";
            return (<div>---</div>);            
        }
    }
    middleConsCost() {
        if (this.refQnt > 2) {
            this.error = "";
            return (
                <div>
                    {Math.round(this.refBeforeLastCost / (this.refLastMileage - this.refFirstMileage) * 10000) / 100}
                </div>
            );            
        } else {
            this.error = "Внесите минимум 3 заправки";
            return (<div>---</div>);            
        }
    }
    reportHeaderCols() {
        if (this.props.filter.type === 'refueling'){
            return (
            <div 
                className="reportheadercols"
                style={{display: this.state.displayRef}}
            >
                <div>Дата</div>
                <div>Пробег</div>
                <div>Сумма</div>
                <div>Заправка</div>
                <div></div>
            </div>
            )
        } else {
            return (
            <div 
                className="reportheadercols"
                style={{display: this.state.displayOth}}
            >
                <div>Дата</div>
                <div>Пробег</div>
                <div>Сумма</div>
                <div>Тип</div>
                <div></div>
            </div>
            )
        }
    }
    hideReport(type) {
        if(type === 'refueling') {
            if(this.state.displayRef === "none") {
                this.setState({displayRef: "flex"});
            } else {
                this.setState({displayRef: "none"});
            }
        } else if(type === 'other-costs') {
            if(this.state.displayOth === "none") {
                this.setState({displayOth: "flex"});
            } else {
                this.setState({displayOth: "none"});
            }
        }        
    }
    render() {
        console.log('state', this.state);
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
            <div id={this.props.filter.type}>                
                <div 
                    className="reportheader"
                    onClick={() => {
                        if (this.props.filter.type === 'refueling') {
                            this.hideReport('refueling');
                        } else if(this.props.filter.type === 'other-costs') {
                            this.hideReport('other-costs');
                        }
                        
                    }}
                >{this.props.header}<img 
                    alt="Удалить" 
                    src={imageArrow} 
                    style={{'transform': (this.state.displayOth === 'none' && this.state.displayRef === 'none') ? "rotate(0deg)" : "rotate(180deg)"}}
                /></div>
                <div 
                    id="categorylist"
                    style={{display: this.state.displayOth}}
                >
                {   this.props.filter.type === 'other-costs' ?                                     
                        categoryList.map((item) => (
                            <InputCategory 
                            key={item}
                            click={() => {
                                this.categoryBuffer = this.state.category;
                                this.categoryBuffer[`${item}`] = !this.categoryBuffer[item];
                                this.setState({category: this.categoryBuffer});
                            }}
                            name={item}
                            />                
                        )) 
                    :
                    <div />
                }
                </div>
                {this.reportHeaderCols()}
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