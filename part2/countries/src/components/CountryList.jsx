const CountryList = ({countries, handleShowButtonClick}) => {
    return (
        countries.map(c => <div key={c.name.common}>{c.name.common} <button onClick={() => handleShowButtonClick(c.name.common)}>Show</button></div>)
    );
}
 
export default CountryList;