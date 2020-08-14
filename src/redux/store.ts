import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./weather-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    weather: weatherReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;