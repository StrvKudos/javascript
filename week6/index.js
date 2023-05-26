const loadCountryAPI = async () =>{
  const responce = await fetch('https://restcountries.com/v3.1/all')
  countryList = await responce.json();
  displayCountries(countryList);
};
const displayCountries = countryList =>{
  console.log(countryList.name)
  const countriesHTML = countryList.map(country => getCountry(country));
  const countryName = document.getElementById("countries");
  countryName.innerHTML = countriesHTML.join("");
}
const getCountry = (countryList) =>{
  return `
      <div class="country-div">
      <img src="${countryList.flags.png}">
      <h2>${countryList.name.common}</h2>
      <hr>
      <h4>Population: ${countryList.population}</h4>
      <h4>Regoin: ${countryList.region}</h4>
      <h4>Capital: ${countryList.capital}</h4>
      </div>
  `
}


loadCountryAPI()