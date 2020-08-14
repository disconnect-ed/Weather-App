import React from 'react';
import {Table} from "react-bootstrap";
import Select from "./Select";
import {useDispatch, useSelector} from "react-redux";
import Preload from "../common/Preload";
import {selectWeather} from "../../redux/weather-reducer";

export const SelectContainer = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.weather.isLoading)
    const isError = useSelector(state => state.weather.isError)
    const weatherDataList = useSelector(state => state.weather.weatherDataList)

    const onClick = (data) => {
        dispatch(selectWeather(data))
    }

    if (!weatherDataList || isLoading === true) return (
        <div className='d-flex align-items-center justify-content-center select-preloader'><Preload/></div>
    )

    if (isError) {
        return null
    }
    return (
        <div className='select'>
            <Table responsive>
                <thead>
                <tr>
                    <th>Date</th>
                    <th className='column-none'>Weather</th>
                    <th>Temperature</th>
                </tr>
                </thead>
                <tbody>
                <Select onClick={onClick}
                        weatherDataList={weatherDataList}/>
                </tbody>
            </Table>
        </div>
    )
}

// export default connect(mapStateToProps)(SelectContainer);