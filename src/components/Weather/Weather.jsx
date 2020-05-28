import React from 'react'
import Search from "../Search/Search";
import SelectContainer from "../Select/SelectContainer";
import MainContainer from "../Main/MainContainer";

const Weather = (props) => {


    return (
        <div className='row flex-wrap-reverse min-vh-100' >
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center pt-lg-0 pb-lg-0 pt-5 pb-5">
                <div className="d-flex flex-column ">
                    <div>
                        <MainContainer/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center pt-lg-0 pt-5">
                <div className="d-flex flex-column m-auto">
                    <div>
                        <Search
                            updateCityName={props.updateCityName}
                            getWeather={props.getWeather}
                            cityName={props.cityName}
                        />
                    </div>
                    <div>
                        {

                        }
                        <SelectContainer selectWeather={props.selectWeather}
                            weatherDataList={props.weatherDataList} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather;