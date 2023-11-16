const currentTemp = document.querySelector('#current-temp');
const weather = document.querySelector('#weather');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=10ef9792635c3a6ce4e14945789be45e';

function toProper(str) {
    return str.split(" ").map((value)=>{
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    }).join(" ");
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    data.weather.forEach((value)=>{
        let iconsrc = `https://openweathermap.org/img/w/${value.icon}.png`;
        let desc = value.description;
        let figure = document.createElement('figure');
        let weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('id', "weather-icon");
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', value.main);
        let captionDesc = document.createElement('figcaption');
        captionDesc.textContent = `${toProper(desc)}`;
        figure.appendChild(weatherIcon);
        figure.appendChild(captionDesc);
        weather.appendChild(figure);
    });
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();