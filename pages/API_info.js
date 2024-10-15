import * as pagebuilder from "./pagebuilder.js";

const API_key = "bdb2824cae258a0c4c646d20255ae299";

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



//getInfo();
export async function getInfo(city) {
    /**
     * API says it has an error object but it doesn't exist when using the API
     */
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

    const response = await fetch(APIUrl);
    const data = await response.json();
    console.log(data);

}
