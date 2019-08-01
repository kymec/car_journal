import {SET_CAR, GET_CAR, ADD_CAR, REMOVE_CAR, ADD_ITEM, GET_ITEM, REMOVE_ITEM, SET_ITEM} from '../actions';

export default (store) => (next) => (payload) => {
    next(payload);

    if(payload.type === ADD_ITEM) {
        const cars = store.getState().cars;
        let currentIndex = cars.map((obj) => obj.name).indexOf(payload.item.current);
        cars[currentIndex].mileage = payload.item.mileage;
        localStorage.setItem('cars', JSON.stringify(cars));        
    }
    
}