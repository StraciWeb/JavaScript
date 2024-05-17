
//formarea unui unghi
const ungleLine = document.getElementById("angle__line");
const ungleDescr = document.getElementById("angle__descr");
const ungle = document.getElementById("angle__number");
const ungleBtn = document.getElementById("angle__btn");

//verificarea tipul de date
const typeOf = document.getElementById("type__of-input");
const checkBtn = document.getElementById("check");
const checkDesk = document.getElementById("check__text");

//cautare tara dupa cod
const countryCodInput = document.getElementById("country__input");
const searchBtn = document.getElementById("search__btn");
const countryText = document.getElementById("country__text");

//elaborarea unghiului
let getUngle = function () {
    const ungleValue = ungle.value;
    if(ungleValue < 90) {
        ungleLine.style.transform = "rotate(" + ungleValue +"deg)";
        ungleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi ascutit."
    }else if (ungleValue == 90) {
        ungleLine.style.transform = "rotate(" + ungleValue +"deg)";
        ungleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi drept."
    }else if (ungleValue > 90 && ungleValue < 180) {
        ungleLine.style.transform = "rotate(" + ungleValue +"deg)";
        ungleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi optuz."
    }else if (ungleValue == 180) {
        ungleLine.style.transform = "rotate(" + ungleValue +"deg)";
        ungleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi alungit."
    }
    else if (ungleValue == 0) {
        ungleLine.style.transform = "rotate(" + ungleValue +"deg)";
        ungleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade."
    }else {
        ungleDescr.textContent = "Ati introdus o valoare mai mare de 180 grade -  " + ungleValue + " grade."
    }
} 

ungleBtn.addEventListener("click", getUngle);

//functia de verificare a tipului de date introdus
checkBtn.addEventListener("click", () => {
    let value = typeOf.value;
    const isNumeric = (value) => /^[+-]?\d+(\.\d+)?$/.test(value);
    if(value === "true" || value === "false") {
       checkDesk.textContent = "Boolean";
       checkDesk.classList.remove("undefined","null", "number", "string");
       checkDesk.classList.add("boolean");
    }else if (value == "") {
        checkDesk.textContent = "Undefined";
        checkDesk.classList.remove("boolean", "null", "number", "string");
        checkDesk.classList.add("undefined");
    }else if (value == "null") {
        checkDesk.textContent = "NULL";
        checkDesk.classList.remove("boolean","undefined", "number", "string");
        checkDesk.classList.add("null");
    }else if (isNumeric(value)) {
        checkDesk.textContent = "Number";
        checkDesk.classList.remove("boolean","undefined", "null", "string");
        checkDesk.classList.add("number");
    }else {
        checkDesk.textContent = "String";
        checkDesk.classList.remove("boolean","undefined", "null", "number");
        checkDesk.classList.add("string");
    }
})

//cautare tara dupa cod

let getCountry = () => {
    let countryCod = countryCodInput.value;
    switch(countryCod) {
        case "md":  
            countryText.textContent = "Republica Moldova, Prefix telefon: 373";
        break;
        case "ro": 
            countryText.textContent = "Romania, Prefix telefon: 40";
        break;
        case "ua": 
            countryText.textContent = "Ucraina, Prefix telefon: 380";
        break;
        case "gb": 
            countryText.textContent = "Marea Britanie, Prefix telefon: 44";
        break;
        case "us": 
            countryText.textContent = "Statele Unite ale Americii, Prefix telefon: 1";
        break;
        case "es": 
            countryText.textContent = "Spania, Prefix telefon: 34";
        break;
        case "pt": 
            countryText.textContent = "Portugalia, Prefix telefon: 351";
        break;
        case "pa": 
            countryText.textContent = "Panama, Prefix telefon: 507";
        break;
        case "np": 
            countryText.textContent = "Nepal, Prefix telefon: 977";
        break;
        case "mx": 
            countryText.textContent = "Mexico, Prefix telefon: 52";
        break;
        default: 
            countryText.textContent = "Introduceti codul tarii";
    }
}

searchBtn.addEventListener("click", getCountry);

