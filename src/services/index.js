import axios from 'axios'
import WeatherService from './weather'
import ForecastService from './forecast'

const API_ENVS = {
    prodution: '',
    development: '',
    url: 'https://api.openweathermap.org'
}

const httpClient = axios.create({
    baseURL: API_ENVS.url
})

export default {
    weather: WeatherService(httpClient),
    forecast: ForecastService(httpClient)
}

