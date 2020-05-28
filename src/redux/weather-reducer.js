import {weatherAPI} from "../api/api";

const SET_WEATHER_DATA_CITY = 'SET_WEATHER_DATA_CITY';
const UPDATE_CITY_NAME = 'UPDATE_CITY_NAME';
const SET_WEATHER_DATA_LIST = 'SET_WEATHER_DATA_LIST';
const SELECT_MAIN_WEATHER = 'SELECT_MAIN_WEATHER';
const IS_LOADING = 'IS_LOADING';
const IS_ERROR = 'IS_ERROR';

let initialState = {
    cityName: '',
    weatherDataCity: [],
    weatherDataList: [],
    mainWeather: null,
    isLoading: false,
    isError: false,
}


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA_CITY:
            return {
                ...state,
                weatherDataCity: action.weatherData.city
            }
        case UPDATE_CITY_NAME:
            return {
                ...state,
                cityName: action.cityName
            }
        case SET_WEATHER_DATA_LIST:
            return  {
                ...state,
                weatherDataList: action.weatherData.list,
                mainWeather: action.weatherData.list[0]
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

export const setWeatherDataCity = (weatherData) => ({type: SET_WEATHER_DATA_CITY, weatherData});
export const updateCityName = (cityName) => ({type: UPDATE_CITY_NAME, cityName});
export const setWeatherDataList = (weatherData) => ({type: SET_WEATHER_DATA_LIST, weatherData})
export const selectMainWeather = (mainWeather) => ({type: SELECT_MAIN_WEATHER, mainWeather});
export const isLoading = (bool) => ({type: IS_LOADING, bool});
export const isError = (bool) => ({type: IS_ERROR, bool});


export const getWeather = (cityName) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        weatherAPI.getWeather(cityName)
            .then(response => {
                dispatch(setWeatherDataCity(response.data));
                dispatch(setWeatherDataList(response.data));
                dispatch(updateCityName(cityName));
                localStorage.setItem('city', cityName);
                dispatch(isLoading(false));
                dispatch(isError(false));
            },
            error => {
                console.log(error);
                dispatch(isLoading(false));
                dispatch(isError(true));
            }
            )
    }
}


export const selectWeather = (mainWeather) => {
    return async (dispatch) => {
        dispatch(selectMainWeather(mainWeather));
    }
}

export default weatherReducer;