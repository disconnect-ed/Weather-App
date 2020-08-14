import {weatherAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {WeatherDataCityType, WeatherDataListItemType} from "../types/types";

const SET_WEATHER_DATA_CITY = 'SET_WEATHER_DATA_CITY';
const UPDATE_CITY_NAME = 'UPDATE_CITY_NAME';
const SET_WEATHER_DATA_LIST = 'SET_WEATHER_DATA_LIST';
const SELECT_MAIN_WEATHER = 'SELECT_MAIN_WEATHER';
const IS_LOADING = 'IS_LOADING';
const IS_ERROR = 'IS_ERROR';


const initialState = {
    cityName: '',
    weatherDataCity: {} as WeatherDataCityType,
    weatherDataList: [] as ([] | WeatherDataListItemType[]),
    mainWeather: {} as WeatherDataListItemType,
    isLoading: false,
    isError: false,
}
export type InitialStateType = typeof initialState
type ActionTypes = SetWeatherDataCityType | UpdateCityNameType | SetWeatherDataListType | SelectMainWeatherType
    | IsLoadingType | IsErrorType

const weatherReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_WEATHER_DATA_CITY:
            return {
                ...state,
                weatherDataCity: action.city,
            }
        case UPDATE_CITY_NAME:
            return {
                ...state,
                cityName: action.cityName
            }
        case SET_WEATHER_DATA_LIST:
            return {
                ...state,
                weatherDataList: action.list,
                mainWeather: action.list[0]
            }
        case SELECT_MAIN_WEATHER:
            return {
                ...state,
                mainWeather: action.mainWeather
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.bool
            }
        case IS_ERROR:
            return {
                ...state,
                isError: action.bool
            }
        default:
            return state
    }
}

type SetWeatherDataCityType = {
    type: typeof SET_WEATHER_DATA_CITY
    city: WeatherDataCityType
}
export const setWeatherDataCity = (city: WeatherDataCityType): SetWeatherDataCityType => ({type: SET_WEATHER_DATA_CITY, city});

type UpdateCityNameType = {
    type: typeof UPDATE_CITY_NAME
    cityName: string
}
export const updateCityName = (cityName: string): UpdateCityNameType => ({type: UPDATE_CITY_NAME, cityName});

type SetWeatherDataListType = {
    type: typeof SET_WEATHER_DATA_LIST
    list: WeatherDataListItemType[]
}
export const setWeatherDataList = (list: WeatherDataListItemType[]): SetWeatherDataListType => ({type: SET_WEATHER_DATA_LIST, list})

type SelectMainWeatherType = {
    type: typeof SELECT_MAIN_WEATHER
    mainWeather: WeatherDataListItemType
}
export const selectMainWeather = (mainWeather: WeatherDataListItemType): SelectMainWeatherType => ({
    type: SELECT_MAIN_WEATHER,
    mainWeather
});

type IsLoadingType = {
    type: typeof IS_LOADING
    bool: boolean
}
export const isLoading = (bool: boolean): IsLoadingType => ({type: IS_LOADING, bool});

type IsErrorType = {
    type: typeof IS_ERROR
    bool: boolean
}
export const isError = (bool: boolean): IsErrorType => ({type: IS_ERROR, bool});

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>
export const getWeather = (cityName: string): ThunkActionType => {
    debugger
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await weatherAPI.getWeather(cityName)
        try {
            dispatch(setWeatherDataCity(response.data.city));
            dispatch(setWeatherDataList(response.data.list));
            dispatch(updateCityName(cityName));
            localStorage.setItem('city', cityName);
            dispatch(isLoading(false));
            dispatch(isError(false));
        } catch (error) {
            console.log(error);
            dispatch(isLoading(false));
            dispatch(isError(true));
        }
    }
}


export const selectWeather = (mainWeather: WeatherDataListItemType): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
    return (dispatch) => {
        dispatch(selectMainWeather(mainWeather));
    }
}

export default weatherReducer;