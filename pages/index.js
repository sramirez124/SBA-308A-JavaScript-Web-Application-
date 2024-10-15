import * as API_info from "./API_info.js";

const weatherInput = document.querySelector(".weatherInput");
const cityInput = document.querySelector(".cityInput");
const weatherDisplay = document.querySelector(".container");

weatherInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try {
            weatherDisplay.innerHTML = "";
            const getInfo = API_info.getInfo(city);
        }
        catch (error) {
            console.log(error);
        }
    } else {
        window.alert("Please enter a US city");
    }
});