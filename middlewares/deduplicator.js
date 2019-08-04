import {SET_CAR, GET_CAR, ADD_CAR, REMOVE_CAR, ADD_ITEM, GET_ITEM, REMOVE_ITEM, SET_ITEM} from '../actions';

export default (store) => (next) => (payload) => {
    let equal = false;
    if(payload.type === ADD_CAR) { 
        const cars = store.getState().cars;
            cars.map((value) => {
                if(payload.car.name === value.name) {                    
                    equal = true;
                }                
            }) 
    }
    if (!equal) {
        next(payload);
    } 
}