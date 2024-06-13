let firstNumber = 65;
let secondNumber = 32;
const newPromise = new Promise(function (resolve, reject) {
    if(firstNumber > 0 && secondNumber > 0) {
        resolve(console.log("Ambele cifre sunt valabile"));
    }else {
        reject(console.log("Una din cifre este negativa"));
    }
  
})
newPromise.then(
    function() {
    console.log(firstNumber + secondNumber);
},  function() {
    console.log("Cifrele nu corespund cerintelor");
})
newPromise.then(function() {
    console.log(firstNumber * secondNumber);
},  function() {
    console.log("Cifrele nu corespund cerintelor");
})
newPromise.then(function() {
    console.log(firstNumber / secondNumber);
},  function() {
    console.log("Cifrele nu corespund cerintelor");
})
newPromise.then(function() {
    console.log(firstNumber - secondNumber);
},  function() {
    console.log("Cifrele nu corespund cerintelor");
})

newPromise;
