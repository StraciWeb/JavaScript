const distToMars = 225000000;
const distToMoon = 384400;
const milesInKm = 0.621;
let speedInMiles = 17500;
const hr = document.createElement("hr");
let distToMoonMiles = distToMoon * milesInKm;
let hoursToMoon = distToMoonMiles / speedInMiles;
let distToMarsmiles = distToMars * milesInKm;
let hoursToMars = distToMarsmiles / speedInMiles;
let daysToMars = hoursToMars / 24;


const container = document.createElement("div");
container.classList.add("container");

let moonTitle = document.createElement("h2");// titlul pentru Luna
moonTitle.textContent = "Distanta pina la Luna";

let marsTitle = document.createElement("h2");// titlul pentru Luna
marsTitle.textContent = "Distanta pina la Mars";

let moonDistance = document.createElement("p");// distanta pina la Luna
moonDistance.textContent = "Distanta pina la Luna este de " + distToMoon + " km" + " sau " + distToMoonMiles + " mile"; 

let timeToMoon = document.createElement("p"); //informatie in ore pentru a ajunge la Luna in mile
timeToMoon.textContent = "Pentru a ajunge la Luna este nevoie de " + hoursToMoon.toFixed(1) + " ore, cu o viteza de deplasare " + speedInMiles + " mile pe ora";  

let marsDistance = document.createElement("p");
marsDistance.textContent = "Distanta pina Mars este de " + distToMars + " km" + " sau " + distToMarsmiles + " mile";

let timeToMars = document.createElement("p");
timeToMars.textContent = "Pentru a ajunge la Mars este nevoie de " + hoursToMars.toFixed(1) + " ore, sau " + daysToMars.toFixed(1) + " zile, cu o viteza de deplasare " + speedInMiles + " mile pe ora";



container.append(moonTitle, moonDistance, timeToMoon, hr, marsTitle, marsDistance, timeToMars);
document.body.append(container);