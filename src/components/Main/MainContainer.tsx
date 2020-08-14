import React from 'react';
import {Main} from "./Main";
import {useSelector} from "react-redux";
import Error from "../common/Error";
import Preload from "../common/Preload";
import {AppStateType} from "../../redux/store";

export const MainContainer: React.FC = () => {

    const isError = useSelector((state: AppStateType) => state.weather.isError)
    const weatherDataCity = useSelector((state: AppStateType) => state.weather.weatherDataCity)
    const mainWeather = useSelector((state: AppStateType) => state.weather.mainWeather)
    const isLoading = useSelector((state: AppStateType) => state.weather.isLoading)

    if (Object.keys(mainWeather).length === 0 || isLoading) {
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