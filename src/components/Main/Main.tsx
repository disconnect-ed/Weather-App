import React from 'react';


export const Main = ({weatherDataCity, mainWeather}) => {

    return (
        <>
            <div className="main">
                <div className="row flex-column justify-content-center text-center">
                    <div className="col-12 p-0">
                        <h1 className="main-title">{weatherDataCity.name}</h1>
                        <p className='main-date'>Date: {mainWeather.dt_txt}</p>
                    </div>
                    <div className="col-12 p-0">
                        <img className='main-img'
                             src={`http://openweathermap.org/img/wn/${mainWeather.weather[0].icon}@2x.png`}
                             alt=""/>
                    </div>
                    <div className="col-12">
                        <h2 className='main-temp'>{Math.ceil(mainWeather.main.temp - 273.15)}°</h2>
                        <p className='main-desc'>{mainWeather.weather[0].description}</p>
                        <p className='main-feels'>feels like {Math.ceil(mainWeather.main.feels_like - 273.15)}°</p>
                    </div>
                </div>
            </div>
        </>
    )

}
