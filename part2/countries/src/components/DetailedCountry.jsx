import { useState, useEffect } from "react";
import weatherService from '../services/weather'
import Weather from "./Weather";

const DetailedCountry = ({country}) => {
    const [weather, setWeather] = useState(null)

      const hook = () => {
    weatherService
      .get(country.capitalInfo.latlng)
      .then(weather => {
        setWeather(weather)
      })

  }

  useEffect(hook, [])

    const getLanguages = () => {
        return Array.from(Object.values(country.languages))
    }

    return ( 
        <>
            <h2>{country.name.common}</h2>
            <div>capital: {country.capital[0]}</div>
            <div>area: {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {getLanguages().map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
            {
            weather === null
            ? null
            : <Weather weather={weather} />
            }
        </>
    );
}
 
export default DetailedCountry;