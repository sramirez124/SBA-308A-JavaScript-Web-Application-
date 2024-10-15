import * as pagebuilder from "./pagebuilder.js";



/**
 * Hourly Variables
 * Hourly seemed completely viable when deciding this but looking at the work needed to make it work I realized its a lot 
 * more complicated than expected. Will be added after daily and current weather updates actually work.
 */

// let hourlyTemp = 0;
// let hourlyPrecipitationProbability = 0;
// let hourlyPrecipitationHeight = 0;

/**
 * Current Weather Variables
 */

let currentTemp = 0;
let currentRealFeelTemp = 0;
let location = "";

/**
 * Daily Weather Variables
 */

let dailyMinTemp = 0;
let dailyMaxTemp = 0;
let dailyPrecipitationProbability = 0;



getInfo();
async function getInfo() {
    /**
     * API says it has an error object but it doesn't exist when using the API
     */
    // try{
    //     const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.9533&longitude=-87.7054&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code&hourly=temperature_2m,precipitation_probability,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto");
        
    //     if (response.error == true) {
    //         throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    //     console.log(data);    
        
    // } catch (error) {
    //     console.log(error);
    // }


    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.9533&longitude=-87.7054&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code&hourly=temperature_2m,precipitation_probability,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto");
    const data = await response.json();

    /**
     * Set Current Variables
     */

    currentTemp = data.current.temperature_2m;
    console.log("Current Temp: " + currentTemp);

    currentRealFeelTemp = data.current.apparent_temperature;
    console.log("Current RealFeel Temp: " + currentRealFeelTemp);

    location = data.timezone;
    pagebuilder.currentWeatherDisplay(location, currentTemp, currentRealFeelTemp);

    /**
     * Set Hourly Variables
     * TODO Work in Progress
     */

    /**
     * Set Daily Variables
     */
    console.log("7 Day Forecast");
    for (let i = 0; i < data.daily.time.length; i++) {
        pagebuilder.sevenDayForecast(data.daily.time[i], data.daily.temperature_2m_max[i], data.daily.temperature_2m_min[i], data.daily.precipitation_probability_max[i]);

        console.log(data.daily.time[i], " Max Temp: " + data.daily.temperature_2m_max[i], " Min Temp: " + data.daily.temperature_2m_min[i], " Precipitation Chance: " + data.daily.precipitation_probability_max[i]);
    }


    
}
