//Select all the Html elements in the Document
const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

//create the Api link
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=a555553c3b16b88932b600216f96ee15";

//create an asynchronous function that request api fetch
async function apiFetch() {

    try {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    console.log(data); // this is for testing the call
    // displayResults(data);
    } else {
    throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
   }
   apiFetch();
 