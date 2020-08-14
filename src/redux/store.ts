import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./weather-reducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    weather: weatherReducer
});

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;