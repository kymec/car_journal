import * as Constants from '../actions';

export default function reducer(state, payload) {

    switch (payload.type) {
        case Constants.REMOVE_ITEM:
            return state.filter((item, index) => index !== payload.item);
        case Constants.ADD_ITEM:
            return state.concat(payload.item);
        case Constants.SET_ITEM:
            return payload.journal;
    }   
    if (state) {
        return state;
    }
    return [];
}