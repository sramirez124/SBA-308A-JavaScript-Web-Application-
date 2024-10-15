import * as API_info from "./API_info.js";

export function currentWeatherDisplay(location, currentTemp, currentRealFeelTemp, maxTemp, minTemp, description, icon) {
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
    highLowTemp.innerHTML = `H: ${maxTemp.toFixed(0)} L: ${minTemp.toFixed(0)}`;
    highLowTemp.setAttribute("style", "font-weight: bold;");
    newDiv.appendChild(highLowTemp);


    const weatherImage = document.createElement("img");
    weatherImage.src = API_info.weatherImage(icon);
    newDiv.appendChild(weatherImage);

    const descriptionDisplay = document.createElement("p");
    descriptionDisplay.innerHTML = description;
    newDiv.appendChild(descriptionDisplay);

    currentWeatherDisplay.appendChild(newDiv);
}

export function sevenDayForecast(maxTemp, minTemp, ) {
    console.log("this fired");
    const sevenDayForecast = document.getElementById("7DayForecast");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "day");

    const TempDisplay = document.createElement("p");
    TempDisplay.innerHTML = `(p)H: ${maxTemp.toFixed(0)} L: ${minTemp.toFixed(0)}`;

    const precipProbDisplay = document.createElement("p");
    precipProbDisplay.innerHTML = `(p)Precipitation:  ${precipProb}%`;

    sevenDayForecast.appendChild(newDiv);
    newDiv.appendChild(date);
    newDiv.appendChild(TempDisplay);
    newDiv.appendChild(precipProbDisplay);
}

// use to change the weather image from sunny to cloudy for example
export function weatherImage(weatherCode) {
    console.log("this fired");
    switch (weatherCode) {
        case (weatherCode >= 200 && weatherCode <= 232):
            return API_info.weatherImage(weatherCode);

        case (weatherCode >= 300 && weatherCode <= 321):
            return API_info.weatherImage(weatherCode);

        case (weatherCode >= 500 && weatherCode <= 531):
            return API_info.weatherImage(weatherCode);

        case (weatherCode >= 600 && weatherCode <= 622):
            return API_info.weatherImage(weatherCode);

        case (weatherCode >= 700 && weatherCode <= 781):
            return API_info.weatherImage(weatherCode);

        case (weatherCode === 800):
            return API_info.weatherImage(weatherCode);
    }
}
