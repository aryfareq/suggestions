const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch (endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordsToMatch, cities){
return cities.filter(place => {
    const regex = new RegExp(wordsToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
});
}

function displayMatches (){
    console.log(this.value)
}
const searchInput = document.querySelectorAll('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup',displayMatches)