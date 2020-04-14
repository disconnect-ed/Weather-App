import React from "react";



const Select = ({selectWeather, ...props}) => {

    return (
        <>
            {props.weatherDataList.map(data => <tr onClick={() => {selectWeather(data)}} >

                    <td className='p-0' >
                        {data.dt_txt}
                    </td>
                    <td className='p-0' >
                        <img className='select-img' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
                    </td>
                    <td className='p-0' >
                        {Math.ceil(data.main.temp - 273.15)}°
                    </td>

                </tr>

            )}


        </>
    )
}

export default Select;