import React from 'react';
import categoryList from '../categorylist';

export default class SelectCategory extends React.Component{
    constructor() {
        super();
        this.state = this.getCategoryList();
    }
    getCategoryList() {
        let obj = {};
        for (let i = 0; i < categoryList.length; i += 1) {
            obj[categoryList[i]] = true;
        }        
        return obj;
    }
    render() {
        return (
            <label>
                {this.props.text}
                <select 
                    name={this.props.name} 
                    onChange={(event) => this.props.getState({'category': event.target.value})}
                >
                    <option hidden>Выберите категорию</option>
                    {categoryList.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </label>
        );
    }
}
