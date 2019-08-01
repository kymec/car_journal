import { createStore, combineReducers, applyMiddleware  } from 'redux';
import carReducer from './reducers/cars';
import itemReducer from './reducers/items';
import loggerMiddleware from './middlewares/logger';
import carsMiddleware from './middlewares/car_storage';
import itemsMiddleware from './middlewares/item_storage';
import carMileage from './middlewares/car_mileage';


export const Store = createStore(
    combineReducers({
        cars: carReducer,
        items: itemReducer,
    }),
    applyMiddleware(
        loggerMiddleware, 
        carsMiddleware,
        itemsMiddleware,
        carMileage,
    ),
);

