import * as Constants from '../actions';

export default function reducer(state, payload) {

    switch (payload.type) {
        case Constants.REMOVE_CAR:
            return state.filter(car => car.name !== payload.car);
        case Constants.ADD_CAR:
            return state.concat(payload.car);
        case Constants.SET_CAR:
            return payload.car;
    }    
    if (state) {
        return state;
    }
    return [];
}