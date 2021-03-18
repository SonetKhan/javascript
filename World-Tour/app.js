fetch('https://restcountries.eu/rest/v2/all')
.then(Response => Response.json())
.then(data=>{
    displayCountries(data);
})
const displayCountries = countries=>{
    const countriesDiv = document.getElementById("countries");
    countries.forEach(function (country) {
            //const country = countries[i];
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country';
            const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class="country-capital">${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">details</button>`;
            countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);


        });
        

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country';
    //     // const name = document.createElement('h3');
    //     // name.innerText =country.name;
    //     // const capital = document.createElement('p');
    //     // capital.innerText = country.capital;
    //     // countryDiv.appendChild(name);
    //     // countryDiv.appendChild(capital);
    //     // countriesDiv.appendChild(countryDiv);
    //     const countryInfo = `
    //     <h3 class="country-name">${country.name}</h3>
    //     <p class="country-capital">${country.capital}</p>`;
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
 
    // }
}
function displayCountryDetail(name){
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    countryDetail(data[0]);
    })
    //console.log(url);
}
const countryDetail = country=>{
    console.log(country);
    const countryDetail = document.getElementById("country-detail");
    countryDetail.innerHTML = `
    <h3>Country Name: ${country.name}</h3>
    <p>Country Area: ${country.area}</p>
    <p>population: ${country.population}</p>
    <img src="${country.flag}" />
    `;
    
}
