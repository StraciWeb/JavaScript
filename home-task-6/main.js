//formarea masivului - elemente
const inputNumber = document.getElementById("input__number");
const getnumber = document.getElementById("get__number");
const getNumberList = document.getElementById("get__number-list");

//elemente eliminarea elementelor ce se dubleaza
const checkDoubleValueBtn = document.getElementById("check__double-value");
const checkDoubleValueList = document.getElementById("unic__elements-list");

//calcularea elementelor de cite ori se repeta
const calcElementsBtn = document.getElementById("count__elements");
const calcElementsList = document.getElementById("count__elements-list");
const doubleElementList = document.getElementById("double__element-list");
const maxNum = document.getElementById("max__number");
const minNum = document.getElementById("min__number");

//lista elementelor din masiv introduse din input
const inputElement = document.getElementById("add__element");
const addElement = document.getElementById("add__btn");
const elementsList = document.getElementById("elements__list");
const showBtn = document.getElementById("show__btn");

let numbers = [];

//crearea elementelor pentru masiv
function getNumbers() {
    getNumberList.innerHTML = "";
    let getNumber = inputNumber.value;
    for (let i = 0; i < getNumber; i++) {
        const numberItem = document.createElement("li");
        let number = Math.floor(Math.random() * getNumber);
        numbers.push(number);
        numberItem.textContent = number;
        getNumberList.append(numberItem);
    }
}

getnumber.addEventListener("click",  getNumbers);


//verificarea elementelor la dublare


checkDoubleValueBtn.addEventListener("click" , () => {
    checkDoubleValueList.innerHTML = "";
    let newNumbers = numbers.filter((number, index) => {
        return numbers.indexOf(number) === index;
    });
    newNumbers.forEach((number) => {
        const numberItem = document.createElement("li");
        numberItem.textContent = number;
        checkDoubleValueList.append(numberItem);
    })
})

//dublarea elementelor din masiv (afisare de cite ore se dubleaza)
function count_duplicate(){
    calcElementsList.innerHTML = "";
    let arr = [...numbers];
    let counts = {};
    let props = [];
    let maxNumber = arr.reduce((a, b) => {return a > b ? a : b})
    let minNumber = arr.reduce((a, b) => {return a < b ? a : b})
    maxNum.textContent = `Cifra cea mai mare este ${maxNumber}`;
    minNum.textContent = "Cifra cea mai mica este " + minNumber;
   
    for(let i = 0; i < arr.length; i++){ 
        if (counts[arr[i]]){
        counts[arr[i]] += 1
        } else {
        counts[arr[i]] = 1
        }
       }  
       for (let prop in counts){
                const numberItem = document.createElement("li");
                if(counts[prop] === 1) {
                    numberItem.textContent = "elementul " + prop + " se contine " + counts[prop] + " data";
                }else {
                    numberItem.textContent = "elementul " + prop + " se contine de " + counts[prop] + " ori";
                }
                calcElementsList.append(numberItem);
            props.push(counts[prop]);
       }

        let maxProps = props.reduce((a, b) => {return a > b ? a : b});

       for (let prop in counts) {
        if(counts[prop] === maxProps) {
            const mostGetElement = document.createElement("li");
            mostGetElement.textContent = "cel mai des element intilnit este " + prop + " si este in continut de "  + counts[prop] + " ori";
            doubleElementList.append(mostGetElement);
        }
       }
   }
   
   calcElementsBtn.addEventListener("click", count_duplicate);

   //formarea masiv cu elemente introduse din input
   let elements = [];

   function addElements() {
        let element = inputElement.value;
        elements.push(element);
        inputElement.value = "";
   }

   addElement.addEventListener("click", addElements);

   //afisarea listei cu elementele din masiv creat
   function getList (arr) {
        elementsList.innerHTML = "";
        return arr.forEach((element, index) => {
        const listItem = document.createElement("li")
        listItem.textContent = `elementul cu index: ${index} este: ${element}`;
        elementsList.append(listItem);
     } )
   }
   
showBtn.addEventListener("click", () => {
    getList(elements);
});