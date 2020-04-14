import React from 'react'
import Search from "../Search/Search";
import SelectContainer from "../Select/SelectContainer";
import {Route} from "react-router-dom";
import MainContainer from "../Main/MainContainer";
import {selectWeather} from "../../redux/weather-reducer";

const Weather = (props) => {


    return (
        <div className='row vh-100' >
            <div className="col-6 d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column">
                    <div className="col-12">
                        <MainContainer/>
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex align-items-center">
                <div className="d-flex flex-column">
                    <div className="col-12">
                        <Search
                            updateCityName={props.updateCityName}
                            getWeather={props.getWeather}
                            cityName={props.cityName}
                        />
                    </div>
                    <div className="col-12">
                        <SelectContainer selectWeather={props.selectWeather}
                            weatherDataList={props.weatherDataList} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather;