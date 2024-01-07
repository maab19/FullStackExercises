import DetailedCountry from "./DetailedCountry";
import CountryList from "./CountryList";

const Results = ({countries, handleShowButtonClick}) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if (countries.length < 10 && countries.length > 1) {
        return <CountryList countries={countries} handleShowButtonClick={handleShowButtonClick} />
    }
    else if (countries.length == 1) {
        return <DetailedCountry country={countries[0]} />
    }
    else {
        return null
    } 
}
 
export default Results;