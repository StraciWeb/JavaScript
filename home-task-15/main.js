function safeDivide (num1, num2) {
    try {
        if(num1 > 0 && num2 > 0) {
            return num1 / num2
        }else {
            throw new Error ("Una din cifrele introduse sunt egale sau mai mici de 0")
        } 
    }
    catch(error) {
        console.log("a survenit o eroare");
        console.log("Mesaj Eroare: " + error);
    }
}

console.log(safeDivide(12, -25));

const persons = ['serghei', 'nicolai', 'andrei'];

function safeArrayAcces(index, arr) {
    try {
        if(arr[index]) {
            return console.log(arr[index]);
        }else {
            throw new Error ("indexul solicitat nu exista");
        }
    }
    catch (error) {
        console.log("a survenit o eroare");
        console.log("Mesaj eroare: " + error);
    }
}

safeArrayAcces(5, persons);

const student = [
    {
        name: 'serghei',
        age: 25,
        study: true
    },
    {
        name: "andrei",
        age: 30, 
        study: false
    },
    {
        name: "ilie",
        age: 36,
        study: true
    }
];

const jsonSudent = '[{"name" : "gheorghe", "age" : "36", "study" : "true"}, {"name" : "domnica", "age" : "45", "study" : "false"}]';

function getArrProperties(arr){
    let firstElement = arr[0];
    let arrKeys = Object.keys(firstElement);
    return arrKeys;
}
function getJsonProperties (string){
    const parseJson = JSON.parse(string);
    let firstElement = parseJson[0];
    let arrKeys = Object.keys(firstElement);
    return arrKeys;
}

let arrProperties = getArrProperties(student);
let jsonProperties = getJsonProperties(jsonSudent);

function checkArrayProperties (array1, array2) {

    const difference = array1.reduce((result, element) => {
        if (array2.indexOf(element) === -1) {
            result.push(element);
        }
        return result;
    }, []);
    return difference;
}

try {
    if(checkArrayProperties(arrProperties, jsonProperties).length === 0) {
         console.log("Toate proprietatile coincid");
    }else{
        throw new Error ("Una din proprietati nu coincide cu array de baza si anume: " + checkArrayProperties(arrProperties, jsonProperties));
    }
}
catch (error) {
    console.log("a survenit o eroare");
    console.log("Mesaj eroare: " + error);
}


