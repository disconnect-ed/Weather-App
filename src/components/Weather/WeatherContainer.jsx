import React from 'react';
import style from './Weather.module.css'
import {connect} from "react-redux";
import {
    setWeatherDataCity,
    updateCityName,
    getWeather,
    setWeatherDataList,
    selectWeather
} from "../../redux/weather-reducer";
import Weather from "./Weather";

class WeatherContainer extends React.Component {

    componentDidMount() {
        this.props.getWeather(this.props.cityName);

    }

    render() {
        return <>
            <Weather
                selectWeather={this.props.selectWeather}
                weatherDataCity={this.props.weatherDataCity}
                updateCityName={this.props.updateCityName}
                cityName={this.props.cityName}
                getWeather={this.props.getWeather}
                weatherDataList={this.props.weatherDataList}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        weatherDataList: state.weather.weatherDataList,
        weatherDataCity: state.weather.weatherDataCity,
        cityName: state.weather.cityName
    }
}

export default connect(mapStateToProps, {setWeatherDataCity, updateCityName, getWeather, setWeatherDataList, selectWeather})(WeatherContainer);