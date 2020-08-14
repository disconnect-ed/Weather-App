import React, {ChangeEvent} from "react";
import {Search} from "./Search";
import {useDispatch, useSelector} from "react-redux";
import {getWeather, updateCityName} from "../../redux/weather-reducer";
import {AppStateType} from "../../redux/store";

export const SearchContainer: React.FC = () => {

    const dispatch = useDispatch()
    const cityName = useSelector((state: AppStateType) => state.weather.cityName)

    const onChange = (e: ChangeEvent): void => {
        let text = (e.target as HTMLInputElement).value
        dispatch(updateCityName(text))
    }

    const onClick = (): void => {
        dispatch(getWeather(cityName))
    }

    const onKeyPress = (e: React.KeyboardEvent): void => {
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