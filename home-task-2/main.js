
let container = document.createElement("div"); // creare container pentru continut
container.classList.add("container");

let title = document.createElement('h1'); //titlul paginei
title.textContent = "Caculator Temperatura";

let celsiusTitle = document.createElement("h2"); //titlul operatie de convertire din celsius in fahrenheit
celsiusTitle.textContent = "Celsius / Fahrenheit";

let fahrenheitTitle = document.createElement("h2"); //titlul operatie de convertire din fahrenheit in celsius
fahrenheitTitle.textContent = "Fahrenheit / Celsius"

let celsiusValue = document.createElement('p'); // valoarea in grade celsius
celsiusValue.innerHTML = "Temperatura in grade Celsius este 10" + "<sup>o</sup>" + " C";

let tempFahrenheit = document.createElement('p'); //valoarea in grade farenheit calculata
tempFahrenheit.innerHTML = "Temperatura in grade Fahrenheit este " + getFahrenheit(10) + "<sup>o</sup>" + " F";

let fahrenheitValue = document.createElement('p'); // valoarea in grade farenheit
fahrenheitValue.innerHTML = "Temperatura in grade Fahrenheit este 160" + "<sup>o</sup>" + " F";

let tempCelsius = document.createElement('p'); //valoarea in grade celsius calculata
tempCelsius.innerHTML = "Temperatura in grade Celsius este " + getCelsius(160) + "<sup>o</sup>" + " C";



container.append(title, celsiusTitle, celsiusValue, tempFahrenheit, fahrenheitTitle, fahrenheitValue, tempCelsius); //adaugarea elementelor in container
document.body.append(container); //adaugarea container in body

//functia pentru calcul de convertire din grade celsius in grade fahrenheit
function getFahrenheit (temp) {
    let result  = (temp * 1.8) + 34;
    return result;
} 


//functia pentru calcul de convertire din grade fahrenheit in grade celsius
function getCelsius (temp) {
    return (temp - 32) / 1.8;
}
