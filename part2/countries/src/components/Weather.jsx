const Weather = ({weather}) => {
    return ( 
        <>
            <div>Temperature: {weather.main.temp} Celcius</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <div>Wind: {weather.wind.speed} m/s</div>
        </>
    );
}
 
export default Weather;