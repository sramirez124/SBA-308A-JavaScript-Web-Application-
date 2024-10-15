// export default class PageBuilder {
//     constructor(currentTemp, currentRealFeelTemp, dailyMinTemp, dailyMaxTemp, dailyPrecipitationProbability) {
//     this.currentTemp = currentTemp;
//     this.currentRealFeelTemp = currentRealFeelTemp;
//     this.dailyMinTemp = dailyMinTemp;
//     this.dailyMaxTemp = dailyMaxTemp;
//     this.dailyPrecipitationProbability = dailyPrecipitationProbability;
//     }
// }

export function currentWeatherDisplay(location,currentTemp, currentRealFeelTemp) {
    const currentWeatherDisplay = document.getElementById("currentWeatherDisplay");

    const locationDisplay = document.createElement("h1");
    locationDisplay.innerHTML = "Location: " + location;
    currentWeatherDisplay.appendChild(locationDisplay);

    const currentTempDisplay = document.createElement("h1");
    currentTempDisplay.innerHTML = "Current Temperature: " + currentTemp;
    currentWeatherDisplay.appendChild(currentTempDisplay);

    const currentRealFeelTempDisplay = document.createElement("h2");
    currentRealFeelTempDisplay.innerHTML = "Current RealFeel Temperature: " + currentRealFeelTemp;
    currentWeatherDisplay.appendChild(currentRealFeelTempDisplay);
}

export function sevenDayForecast(time, maxTemp, minTemp, precipProb) {
    const sevenDayForecast = document.getElementById("7DayForecast");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "day");
    newDiv.setAttribute("style", "border: 1px solid black;", "padding: 10px;");

    const date = document.createElement("h1");
    date.innerHTML = time;

    const TempDisplay = document.createElement("h2");
    TempDisplay.innerHTML = "H: " + maxTemp + " L: " + minTemp;

    const precipProbDisplay = document.createElement("h3");
    precipProbDisplay.innerHTML = "Precipitation: " + precipProb;

    sevenDayForecast.appendChild(newDiv);
    newDiv.appendChild(date);
    newDiv.appendChild(TempDisplay);
    newDiv.appendChild(precipProbDisplay);
    
    // sevenDayForecast.appendChild(date);
    // sevenDayForecast.appendChild(TempDisplay);
    // sevenDayForecast.appendChild(precipProbDisplay);
    
}