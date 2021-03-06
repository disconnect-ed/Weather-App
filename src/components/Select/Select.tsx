import React from "react";
import {WeatherDataListItemType} from "../../types/types";

type SelectPropsType = {
    onClick: (data: WeatherDataListItemType) => void
    weatherDataList: WeatherDataListItemType[]
}

const Select: React.FC<SelectPropsType> = ({onClick, weatherDataList}) => {

    return (
        <>
            {weatherDataList.map((data) => <tr key={data.dt_txt} onClick={() => {onClick(data)}} >
                    <td className='p-0 select-date' >
                        {data.dt_txt}
                    </td>
                    <td className='p-0 column-none' >
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