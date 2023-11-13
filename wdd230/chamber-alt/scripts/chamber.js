!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

function setLastVisit(lastVisitDate) {
    localStorage.setItem("lastVisit", lastVisitDate);
}

function getLastVisit() {
    return localStorage.getItem("lastVisit");
}

const currentDate = new Date();
const latitude = 34.7314;
const longitude = -82.259;
const weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current=temperature_2m,windspeed_10m&temperature_unit=fahrenheit&windspeed_unit=mph';

// https://stackoverflow.com/questions/2499567/how-to-make-a-json-call-to-an-url/2499647#2499647
const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
  
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  }

const getWindChill = (temperature, windspeed) => {
    if((temperature <= 50) && (windspeed > 3.0)) {
        return (35.74 + (.6215 * temperature) - (35.75 * (windspeed ^ .16)) + (.4275 * temperature * (windspeed ^ .16)));
    } else {
        return temperature;
    }    
}   

const messageElement = document.querySelector('#sidebarMessage');
const lastVisitValue = getLastVisit();
const currentDateTime = document.querySelector('#currentDateTime');

var message = "";

// console.log("Fetching data...");
var windChillIndex = getJSON(weatherURL).then(weatherData => {
    var temperature = weatherData.current.temperature_2m;
    var windspeed = weatherData.current.windspeed_10m;
    // var temperature_units = weatherData.current_units.temperature_2m;
    // var windspeed_units = weatherData.current_units.windspeed_10m;
    // console.log("this is the current temperature in F: "+temperature + " " + temperature_units);
    // console.log("this is the current windspeed in mph: "+windspeed + " " + windspeed_units);
    // console.log("this is the current windchill index in F: "+getWindChill(temperature, windspeed) + " " + temperature_units);

    if((document.querySelector('#temperature') != null) && (document.querySelector('#windSpeed') != null)) {
        document.querySelector('#temperature').textContent = temperature;
        document.querySelector('#windSpeed').textContent = windspeed;
        var windchill = getWindChill(temperature, windspeed);
        document.querySelector('#windChill').textContent = windchill;
        return windchill;
    } else {
        return null;
    }
});

if(lastVisitValue == null) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = new Date(lastVisitValue);
    /* https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript */
    const dateDifference = new Date(currentDate.getTime() - lastVisitDate.getTime());
    const daysDifference = dateDifference.getUTCDate() - 1;
    if(daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else {
        if (daysDifference > 1) {
            message = "You last visited " + daysDifference + " days ago.";
        } else {
            message = "You last visited " + daysDifference + " day ago.";
        }
    }
}

if(messageElement != null) {
    messageElement.textContent = message;
}
if(currentDateTime != null) {
    currentDateTime.value = currentDate;
}
setLastVisit(currentDate);