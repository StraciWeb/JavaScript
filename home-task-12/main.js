//expresie pentru a extrage nr. din string
const regexp = /[0-9]/g;
const regexp1 = /\d/g;
//expresie pentru extragere cuvinde ce se incep cu litera mare
const regexpCapitalize = /\b[A-Z][a-z]*\b/g;
const str = "sds8sd9s9s9fd9g0-d-0s7s56s548s9 s 89 8s";
const str1 = "Lorem Ipsum dolor sit Amet consectetur Adipisicing elit. DUCIMUS elit PROVident magnam Minus, dolorum elit. sit Amet lorem elit Amet"

//expresie extragere nume domeniu din email
const regExpresDomain = /@([^\s@]+)/;

//expresie extragere duplicate din string


//extragere numar din string
let numbers = str.match(regexp);
let numbers1 = str.match(regexp1);

console.log(numbers);


//extragere cuvinte ce se incep cu litera mare
let capitalizeFirstLeter = str1.match(regexpCapitalize);

console.log(capitalizeFirstLeter);


//transformare fraza in elemente cu litere mici
let stringToLowerCase = str1.toLowerCase().split(" ");

//verificare elementelor la dublare
function getduplicateItemsInArray (str) {
    return str.filter((item, index) => str.indexOf(item) !== index);
}


let newEmail = "testemail@test.com";

//extragerea nume domeniu din email
function getDomain(email) {
    const match =  email.match(regExpresDomain);
    return match ? match[1] : null
}

console.log(getDomain(newEmail));

const form = document.getElementById("form");
const userEmail = document.getElementById("email");
const userId = document.getElementById("id");
const userName = document.getElementById("name");
const date = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];
date.setAttribute("max", today);
console.log(today);

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

userEmail.addEventListener("input", () => {
    if(userEmail.validity.valueMissing){
        userEmail.setCustomValidity("cimp obligator");
        return
    }
    else if(userEmail.validity.typeMismatch) {
        userEmail.setCustomValidity("Email nu corespunde formatul, ex: test@domeniu.test");
    }
    else{
        userEmail.setCustomValidity("");
    }
})

userId.addEventListener("input", () => {
    if (userId.validity.patternMismatch) {
        userId.setCustomValidity("Cel putin 5 caractere si cel mult 12");
    }
    else{
        userId.setCustomValidity("");
    }
})

userName.addEventListener("input", () => {
    if (userName.validity.patternMismatch) {
        userName.setCustomValidity("Numele trebuie sa fie compus din cel putin 3 simboluri si maxim 10");
    }
    else{
        userName.setCustomValidity("");
    }
})
date.addEventListener("input", () => {
    console.log(date.value);
    if (date.validity.patternMismatch) {
        date.setCustomValidity("Nu este introdusa data complet");
    }
    else{
        date.setCustomValidity("");
    }
})
