import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Results from './components/Results'

const App = () => {
  const [countryFilter, setCountryFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])

  const hook = () => {
    countryService
      .getAll()
      .then(allCountries => {
        setAllCountries(allCountries)
      })

  }

  useEffect(hook, [])

  const filterCountries = () => {
    return allCountries.filter(c => c.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
  }
  const countriesToShow = countryFilter === '' ? [] : filterCountries()


  const handleFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const handleShowButtonClick = (countryName) => {
    setCountryFilter(countryName)
  }



  return (
    <div>
      <div>find countries <input onChange={handleFilterChange}/></div>
      <Results countries={countriesToShow} handleShowButtonClick={handleShowButtonClick}/>
    </div>
  )
}

export default App