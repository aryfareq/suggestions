const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch (endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))
function matchesFound (wordmatches, cities){
    return cities.filter(place =>{
        const regex = new.RegExp(wordmatches, 'gi');
        return place.cities.match(regex) || place.state.match(regex)
    })
};
function displayem (){
const matchesArray = matchesFound(this.value, cities);
console.log(matchesArray);
const html = matchesArray.map(place =>{
    return `
    <li>
    <span class="name">${place.city},${place.state}</span>
    <span class="population">${place.population}</span>
    </li>
    `;
}).join('');
suggestions.innerHTML = html;
}
const inputs = document.querySelector(.search);
const inputs = document.querySelector(.suggestions);
searchInput.addEventListener('change', displayem);
searchInput.addEventListener('keyup', displayem);