import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {
    getWeather,
} from "../../redux/weather-reducer";
import {Weather} from "./Weather";

export const WeatherContainer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const city = localStorage.getItem('city');
        if (city) {
            dispatch(getWeather(city))
        } else {
            dispatch(getWeather('Minsk'))
        }
    }, [])

    return <Weather/>
}