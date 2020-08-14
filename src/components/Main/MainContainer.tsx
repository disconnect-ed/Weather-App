import React from 'react';
import {Main} from "./Main";
import {useSelector} from "react-redux";
import Error from "../common/Error";
import Preload from "../common/Preload";

export const MainContainer = () => {

    const isError = useSelector(state => state.weather.isError)
    const weatherDataCity = useSelector(state => state.weather.weatherDataCity)
    const mainWeather = useSelector(state => state.weather.mainWeather)
    const isLoading = useSelector(state => state.weather.isLoading)

    if (!mainWeather || isLoading) {
        return <Preload/>
    }

    if (isError) {
        return <Error/>
    }

    return (
        <Main
            weatherDataCity={weatherDataCity}
            mainWeather={mainWeather}
        />
    )

}