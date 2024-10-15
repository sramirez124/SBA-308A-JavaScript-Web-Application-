import * as pagebuilder from "./pagebuilder.js";

const API_key = "bdb2824cae258a0c4c646d20255ae299";

export async function getInfo(city) {
    /**
     * API says it has an error object but it doesn't exist when using the API
     */
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt={7}&appid=${API_key}&units=imperial`;

    const response = await fetch(APIUrl);
    const data = await response.json();
    console.log(data);
    sendDisplayInfo(data);
    
}

function sendDisplayInfo(data){
    const {
        name: city, 
        main: {temp, feels_like, temp_min, temp_max, humidity}, 
        weather: [{description, icon}]
    } = data;
    
    pagebuilder.currentWeatherDisplay(city, temp, feels_like, temp_max, temp_min, description, icon);
    weatherImage(icon);
}

export function weatherImage(weatherCode) {
    const imgUrl = `http://openweathermap.org/img/wn/${weatherCode}@2x.png`;
    console.log(imgUrl);
    return imgUrl
}
