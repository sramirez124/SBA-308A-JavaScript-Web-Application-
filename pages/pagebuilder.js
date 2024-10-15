export function currentWeatherDisplay(location, currentTemp, currentRealFeelTemp, maxTemp, minTemp) {
    console.log("this fired");
    const currentWeatherDisplay = document.getElementById("currentWeatherDisplay");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "currentDay");

    const locationDisplay = document.createElement("h2");
    locationDisplay.innerHTML = location;
    newDiv.appendChild(locationDisplay);

    const currentTempDisplay = document.createElement("h1");
    currentTempDisplay.innerHTML = `${currentTemp.toFixed(0)}°F`;
    newDiv.appendChild(currentTempDisplay);

    const currentRealFeelTempDisplay = document.createElement("p");
    currentRealFeelTempDisplay.innerHTML = `Real Feel: ${currentRealFeelTemp.toFixed(0)}°F`;
    newDiv.appendChild(currentRealFeelTempDisplay);

    const highLowTemp = document.createElement("p");
    highLowTemp.innerHTML = `H: ${maxTemp} L: ${minTemp}`;
    highLowTemp.setAttribute("style", "font-weight: bold;");
    newDiv.appendChild(highLowTemp);

    currentWeatherDisplay.appendChild(newDiv);
}

export function sevenDayForecast(maxTemp, minTemp, ) {
    console.log("this fired");
    const sevenDayForecast = document.getElementById("7DayForecast");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "day");

    const TempDisplay = document.createElement("p");
    TempDisplay.innerHTML = `(p)H: ${maxTemp} L: ${minTemp}`;

    const precipProbDisplay = document.createElement("p");
    precipProbDisplay.innerHTML = `(p)Precipitation:  ${precipProb}%`;

    sevenDayForecast.appendChild(newDiv);
    newDiv.appendChild(date);
    newDiv.appendChild(TempDisplay);
    newDiv.appendChild(precipProbDisplay);
}

// use to change the weather image from sunny to cloudy for example
export function weatherImage(weatherCode) {

}
