import React from "react";
import {Search} from "./Search";
import {useDispatch, useSelector} from "react-redux";
import {getWeather, updateCityName} from "../../redux/weather-reducer";

export const SearchContainer = () => {

    const dispatch = useDispatch()
    const cityName = useSelector(state => state.weather.cityName)

    const onChange = (e) => {
        let text = e.target.value
        dispatch(updateCityName(text))
    }

    const onClick = () => {
        dispatch(getWeather(cityName))
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(getWeather(cityName))
        }
    }

    return (
        <Search onChange={onChange}
                onKeyPress={onKeyPress}
                cityName={cityName}
                onClick={onClick}/>
    )
}