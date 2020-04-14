import * as axios from 'axios';

let key = 'e63dc8b1a4b09fafddaffc6094edbc44';

export const weatherAPI = {
    getWeather(cityName = 'Minsk') {
        return (
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`)
        )
    }
}