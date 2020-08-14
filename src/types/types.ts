export type WeatherDataListItemType = {
    clouds: object
    dt: number
    dt_txt: string
    main: MainType
    pop: number
    sys: object
    visibility: number
    weather: [WeatherType]
    wind: object
}

type MainType = {
    [key: string]: number
}

type WeatherType = {
    description: string
    icon: string
    id: number
    main: string
}

export type WeatherDataCityType = {
    coord: object
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}
