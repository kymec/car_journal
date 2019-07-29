import {SET_CAR, GET_CAR, ADD_CAR, REMOVE_CAR, ADD_ITEM, GET_ITEM, REMOVE_ITEM, SET_ITEM} from '../actions';

export default (store) => (next) => (payload) => {
    next(payload);
    
    if(payload.type === ADD_ITEM || payload.type === REMOVE_ITEM) {
        const items = store.getState().items;
        localStorage.setItem('journal', JSON.stringify(items));     
    }
    if(payload.type === GET_ITEM) {
        try {
            const itemList = JSON.parse(localStorage.getItem('journal')); 
            if(Array.isArray(itemList)){
                next({type: SET_ITEM, journal: itemList});                
            }
        }
        catch (err) {} 
    }
}