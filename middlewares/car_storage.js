import {SET_CAR, GET_CAR, ADD_CAR, REMOVE_CAR, ADD_ITEM, GET_ITEM, REMOVE_ITEM, SET_ITEM} from '../actions';

export default (store) => (next) => (payload) => {
    next(payload);

    if(payload.type === ADD_CAR || payload.type === REMOVE_CAR) {
        const cars = store.getState().cars;
        localStorage.setItem('cars', JSON.stringify(cars));        
    }
    if(payload.type === GET_CAR) {
        try {
            const data = JSON.parse(localStorage.getItem('cars'));            
            if(Array.isArray(data)){
                next({type: SET_CAR, car : data});
            }
        }
        catch (err) {} 
    }
}