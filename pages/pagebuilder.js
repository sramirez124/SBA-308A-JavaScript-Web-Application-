export function currentWeatherDisplay(location, currentTemp, currentRealFeelTemp) {
    const currentWeatherDisplay = document.getElementById("currentWeatherDisplay");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "currentDay");

    const locationDisplay = document.createElement("h1");
    locationDisplay.setAttribute("style", "font-size 2.5rem;");
    locationDisplay.innerHTML = "(h1)Location: " + location;
    newDiv.appendChild(locationDisplay);

    const currentTempDisplay = document.createElement("p");
    currentTempDisplay.innerHTML = "(p)Current Temperature: " + currentTemp;
    newDiv.appendChild(currentTempDisplay);

    const currentRealFeelTempDisplay = document.createElement("p");
    currentRealFeelTempDisplay.innerHTML = "(p)Current RealFeel Temperature: " + currentRealFeelTemp;
    newDiv.appendChild(currentRealFeelTempDisplay);

    currentWeatherDisplay.appendChild(newDiv);
}

export function sevenDayForecast(time, maxTemp, minTemp, precipProb) {
    const sevenDayForecast = document.getElementById("7DayForecast");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "day");

    const date = document.createElement("h1");
    date.innerHTML = ("(h1)") + time;

    const TempDisplay = document.createElement("p");
    TempDisplay.innerHTML = `(p)H: ${maxTemp} L: ${minTemp}`;

    const precipProbDisplay = document.createElement("p");
    precipProbDisplay.innerHTML = `(p)Precipitation:  ${precipProb}%`;

    sevenDayForecast.appendChild(newDiv);
    newDiv.appendChild(date);
    newDiv.appendChild(TempDisplay);
    newDiv.appendChild(precipProbDisplay);
    
    // sevenDayForecast.appendChild(date);
    // sevenDayForecast.appendChild(TempDisplay);
    // sevenDayForecast.appendChild(precipProbDisplay);
    
}

// use to change the weather image from sunny to cloudy for example
export function weatherImage(weatherCode) {

}
