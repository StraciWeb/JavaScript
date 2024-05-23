let fruits = ["mere", "pere", "prune", "cirese", "abricos"];
let vegetables = ["rosii", "castraveti", "ceapa", "morcov"];
let numbers = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];



function deposit (array1, array2) {
    let deposit = [...array1, ...array2];
    console.log(deposit);
}

function arrayToString (arr) {
    let fruitsToString = arr.join("; ");
    console.log(fruitsToString);
}

function arrayToStringNum (arr) {
    let numToString = arr.join()
    let numToString1 = arr.join("; ")
    console.log(numToString);
    console.log(numToString1);
}

let reverseArray = (array) => {
    array.reverse();
    console.log(array);
}

let includesItem = (array) => {
    if(array.includes("pere")) {
        console.log("este un fruct");
    }else {
        console.log("este o leguma");
    }
}

arrayToString(fruits);
arrayToStringNum(numbers);
deposit(fruits, vegetables);
reverseArray(fruits);
includesItem(fruits);


//elemente pentru input nume
const input = document.createElement("input");
const btn = document.createElement("button");
const sortBtn = document.createElement("button");
const list = document.createElement("ul");

const inputText = document.createElement("p");
const sortedNames = document.createElement("p");

let names = [];

input.placeholder = "introduceti prenumele";
btn.textContent = "Introduce";
sortBtn.textContent = "Sorteaza";

//crearea elementelor din lista
function getItems (arr) {
    list.innerHTML = "";
    for(let i = 0; i < arr.length; i++ ) {
        let listItem = document.createElement("li");
        listItem.textContent = arr[i]; 
        list.append(listItem);
    } 
}
//functie pentru sotarea masiv cu tip de date string 
function sortArray (arr) {
   return arr.sort();
}

//adaugarea element in masiv nume persoane
btn.addEventListener("click", ()=> {
    let inputValue = input.value;
    names.push(inputValue);
    getItems(names);
    input.value = "";
})

//sortarea datelor din masiv nume persoane
sortBtn.addEventListener("click", () => {
    list.innerHTML = "";
    let sortedArray = sortArray(names);
    for(let i = 0; i < sortedArray.length; i++ ) {
        let listItem = document.createElement("li");
        listItem.textContent = sortedArray[i]; 
        list.append(listItem);
    } 
})

//elemente pentru numere

const numbersWrapper = document.createElement("div");
const inputNumber = document.createElement("input");
const numbersBtn = document.createElement("button");
const sortNumbers = document.createElement("button");
const reversNumbers = document.createElement("button");
const numbersList = document.createElement("ul");
const sortNumberList = document.createElement("ul");
const reverseNumbersList = document.createElement("ul");

sortNumberList.style.display = "flex";
sortNumberList.style.gap = "5px";
sortNumberList.style.listStyle = "none";

numbersList.style.display = "flex";
numbersList.style.gap = "5px";
numbersList.style.listStyle = "none";

reverseNumbersList.style.display = "flex";
reverseNumbersList.style.gap = "5px";
reverseNumbersList.style.listStyle = "none";

inputNumber.placeholder = "introduceti un nr.";
numbersBtn.textContent = "Formeaza";
sortNumbers.textContent = "Sorteaza";
reversNumbers.textContent = "Inverseaza";


let nums = [];


//formarea masivului cu cifre
numbersBtn.addEventListener("click", () => {
    let numsCount = inputNumber.value;
    for(let i = 0; i < numsCount; i++) {
        let num = Math.floor(Math.random() * numsCount);
        nums.push(num);
        let numberItem = document.createElement("li");
        numberItem.textContent = num;
        numbersList.append(numberItem);
    }
})


//sortarea masivului crescator
sortNumbers.addEventListener("click", () => {
    let sortNums = nums.sort((a,b) => a - b)
    for(let i = 0; i < sortNums.length; i++) {
        let numberItem = document.createElement("li");
        numberItem.textContent = sortNums[i];
        sortNumberList.append(numberItem);
    }
})

//sortarea masivului descrescator
function reverseArr() {
    let sortNums = nums.sort((a,b) => b - a)
    for(let i = 0; i < sortNums.length; i++) {
        let numberItem = document.createElement("li");
        numberItem.textContent = sortNums[i];
        reverseNumbersList.append(numberItem);
    }
}

reversNumbers.addEventListener("click", reverseArr);


numbersWrapper.append(inputNumber, numbersBtn, sortNumbers, reversNumbers, numbersList, sortNumberList, reverseNumbersList)
document.body.append(input, btn, sortBtn, list, sortedNames, numbersWrapper);

