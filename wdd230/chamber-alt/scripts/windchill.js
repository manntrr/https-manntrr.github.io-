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

// console.log("Fetching data...");
var windChillIndex = getJSON(weatherURL).then(weatherData => {
        var temperature = weatherData.current.temperature_2m;
        var windspeed = weatherData.current.windspeed_10m;
        // var temperature_units = weatherData.current_units.temperature_2m;
        // var windspeed_units = weatherData.current_units.windspeed_10m;
        // console.log("this is the current temperature in F: "+temperature + " " + temperature_units);
        // console.log("this is the current windspeed in mph: "+windspeed + " " + windspeed_units);
        // console.log("this is the current windchill index in F: "+getWindChill(temperature, windspeed) + " " + temperature_units);
        document.querySelector('#temperature').textContent = temperature;
        document.querySelector('#windSpeed').textContent = windspeed;
        var windchill = getWindChill(temperature, windspeed);
        document.querySelector('#windChill').textContent = windchill;
        return windchill;
    });
