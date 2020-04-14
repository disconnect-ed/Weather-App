import React from 'react';
import Preload from "../common/Preload";


const Main = (props) => {

    if (props.mainWeather == null || props.isLoading === true) return <Preload/>

        return (
            <>
                <div className="main">
                    <div className="row flex-column justify-content-center text-center">
                        <div className="col-12 p-0">
                            <h1 className="main-title">{props.weatherDataCity.name}</h1>
                            <p className='main-date' >Date: {props.mainWeather.dt_txt}</p>
                        </div>
                        <div className="col-12 p-0">
                            <img className='main-img'
                                 src={`http://openweathermap.org/img/wn/${props.mainWeather.weather[0].icon}@2x.png`}
                                 alt=""/>
                        </div>
                        <div className="col-12">
                            <h2 className='main-temp' >{Math.ceil(props.mainWeather.main.temp - 273.15)}°</h2>
                            <p className='main-desc' >{props.mainWeather.weather[0].description}</p>
                            <p className='main-feels' >feels like {Math.ceil(props.mainWeather.main.feels_like - 273.15)}°</p>
                        </div>
                    </div>
                </div>
            </>
        )

}

export default Main;