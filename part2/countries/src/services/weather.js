import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_WEATHER_KEY

const get = (latlng) => {
    const queryParams = { params: { lat: latlng[0], lon: latlng[1], appid: apiKey, units: 'metric' } }
    return axios
        .get(baseUrl, queryParams)
        .then(response => response.data)
}

export default { get }