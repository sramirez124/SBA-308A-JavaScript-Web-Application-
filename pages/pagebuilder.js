// export default class PageBuilder {
//     constructor(currentTemp, currentRealFeelTemp, dailyMinTemp, dailyMaxTemp, dailyPrecipitationProbability) {
//     this.currentTemp = currentTemp;
//     this.currentRealFeelTemp = currentRealFeelTemp;
//     this.dailyMinTemp = dailyMinTemp;
//     this.dailyMaxTemp = dailyMaxTemp;
//     this.dailyPrecipitationProbability = dailyPrecipitationProbability;
//     }
// }

export function currentWeatherDisplay(currentTemp, currentRealFeelTemp) {
    const currentWeatherDisplay = document.getElementById("currentWeatherDisplay");
    
    const currentTempDisplay = document.createElement("h1");
    currentTempDisplay.innerHTML = "Current Temperature: " + currentTemp;
    currentWeatherDisplay.appendChild(currentTempDisplay);

    const currentRealFeelTempDisplay = document.createElement("h2");
    currentRealFeelTempDisplay.innerHTML = "Current RealFeel Temperature: " + currentRealFeelTemp;
    currentWeatherDisplay.appendChild(currentRealFeelTempDisplay);
}

export function sevenDayForecast() {
    
}