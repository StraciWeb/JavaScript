const $container = document.createElement("div"); //se formeaza container pentru continut
$container.classList.add("container");

const $firstCheck = document.createElement("div");//container pentru prima verificare
$firstCheck.classList.add("first__check");

const $secondCheck = document.createElement("div");//container pentru a doua verificare
$secondCheck.classList.add("second__check");

const $calculator = document.createElement("div");//container pentru calculator
$calculator.classList.add("calculator");

const $calcNumbersWrapper = document.createElement("div");
$calcNumbersWrapper.classList.add("calc__numbers__wrapper");

const $calcButtonsWrapper = document.createElement("div");
$calcButtonsWrapper.classList.add("calc__buttons__wrapper");

const $titleFirst = document.createElement("h2");//titlu pentru primul container
$titleFirst.textContent = "Verificare cifra metoda nr. 1";

const $titleSecond = document.createElement("h2");//titlu pentru al doilea container
$titleSecond.textContent = "Verificare cifra metoda nr. 2";

const $titleCalculator = document.createElement("h2");//titlu pentru calculator
$titleCalculator.textContent = "Mini Calculator";

const $input = document.createElement("input"); //imput pentru prima verificare
$input.type = "number";
$input.placeholder = "Introduceti un nr.";
$input.classList.add("input__number");

const $secondInput = document.createElement("input"); //input pentru a doua verificare
$secondInput.type = "number";
$secondInput.placeholder = "Introduceti un nr.";
$secondInput.classList.add("input__number");

const $threeInput = document.createElement("input"); //input pentru a doua verificare
$threeInput.type = "number";
$threeInput.placeholder = "Introduceti un nr.";
$threeInput.classList.add("input__number");

const $calcFirstNum = document.createElement("input"); //prima cifra la calculator
$calcFirstNum.type = "number";
$calcFirstNum.placeholder = "Introduceti un nr.";
$calcFirstNum.classList.add("input__number");

const $calcSecondNum = document.createElement("input"); //a doua cifra la calculator
$calcSecondNum.type = "number";
$calcSecondNum.placeholder = "Introduceti un nr.";
$calcSecondNum.classList.add("input__number");

const $resultText = document.createElement("p"); //mesaj la prima verificare
$resultText.textContent = "In rezultat se va obtine un mesaj in depedenta de cifra introdusa";

const $secondResultText = document.createElement("p"); //mesaj la a doua verificare
$secondResultText.textContent = "In rezultat se va obtine un mesaj in depedenta de cifrele introduse";

const $calcResult = document.createElement("p");
$calcResult.textContent = 0;

const $btnFirts = document.createElement("button");//buton pentru prima verificare
$btnFirts.textContent = "Verifica";
$btnFirts.classList.add("btn");

const $btnSecond = document.createElement("button");
$btnSecond.textContent = "Verifica";
$btnSecond.classList.add("btn");

const $plusBtn = document.createElement("button");
$plusBtn.textContent = "+";
$plusBtn.classList.add("calc__btn");

const $minusBtn = document.createElement("button");
$minusBtn.textContent = "-";
$minusBtn.classList.add("calc__btn");

const $multiplyBtn = document.createElement("button");
$multiplyBtn.textContent = "*";
$multiplyBtn.classList.add("calc__btn");

const $divideBtn = document.createElement("button");
$divideBtn.textContent = "/";
$divideBtn.classList.add("calc__btn");


//functia la prima verificare
$btnFirts.onclick = function checkNumber() {
    let number = $input.value;
    console.log(number);
    if(number > 13) {
        let result = (number - 13) * 2;
        $resultText.textContent = "Cifra introdusa este " + number + " si este mai mare decit 13 si rezultatul final este " + result;
        $resultText.classList.add("big__number");
        $resultText.classList.remove("small__number");
    }else{
        $resultText.textContent = "Cifra introdusa este " + number + " si este mai mica decit 13";
        $resultText.classList.add("small__number")
    }
    $input.value = "";
}

//functie la a doua verificare
$btnSecond.onclick = function checkSecondNumber() {
    let firstNumber = $secondInput.value;
    let secondNumber = $threeInput.value;
    if (firstNumber < 0 || secondNumber < 0) {
        $secondResultText.textContent = "Una din cifrele introduse este negativa, primul nr. este " + firstNumber + " al doilea nr. este " + secondNumber;
    }else {
        $secondResultText.textContent = "Ambele numere sunt pozitive sau egal cu 0, primul nr. este " + firstNumber + " al doilea nr. este " + secondNumber;
    }
    $secondInput.value = "";
    $threeInput.value = "";
}

//functie pentru adunare

$plusBtn.onclick = function plusNumbers () {
    let firstNumber = Number($calcFirstNum.value);
    let secondNumber = Number($calcSecondNum.value);
    let result  = firstNumber + secondNumber;
    
    $calcResult.textContent = result;
}

$minusBtn.onclick = function minusNumbers () {
    let firstNumber = Number($calcFirstNum.value);
    let secondNumber = Number($calcSecondNum.value);
    let result  = firstNumber - secondNumber;
    
    $calcResult.textContent = result;
}

$multiplyBtn.onclick = function multiplyNumbers () {
    let firstNumber = Number($calcFirstNum.value);
    let secondNumber = Number($calcSecondNum.value);
    let result  = firstNumber * secondNumber;
    
    $calcResult.textContent = result;
}

$divideBtn.onclick = function divideNumbers () {
    let firstNumber = Number($calcFirstNum.value);
    let secondNumber = Number($calcSecondNum.value);
    let result  = firstNumber / secondNumber;
    
    $calcResult.textContent = result.toFixed(2);
}

$firstCheck.append($titleFirst, $input, $btnFirts, $resultText);
$secondCheck.append($titleSecond, $secondInput, $threeInput, $btnSecond, $secondResultText);
$calcNumbersWrapper.append($calcFirstNum, $calcSecondNum);
$calcButtonsWrapper.append($plusBtn, $minusBtn, $multiplyBtn, $divideBtn);
$calculator.append($titleCalculator, $calcNumbersWrapper, $calcButtonsWrapper, $calcResult);
$container.append($firstCheck, $secondCheck, $calculator);
document.body.append($container);




