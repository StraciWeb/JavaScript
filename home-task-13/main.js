
//se formeaza clasa Car
class Car {
    constructor (make, model, year, speed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    carInfo() {
        console.log("Va prezentam Masina " + this.make + ", de model " + this.model + ", anul producerii " + this.year + ", viteza maxima este " + this.speed + " km/h");
    }
    accelerate() {
        this.speed = this.speed + 10
        console.log("Viteza automobilului a fost marita la " + this.speed);
    }
    get newSpeed() {
        return this.speed;
    }
    set newSpeed(value) {
        this.speed = value;
    }
};

let newCar = new Car("Toyota", "Corola", 2020, 160);
let oldCar = new Car("Mercedes", "S350", 1985, 220);

newCar.carInfo();
newCar.accelerate();

newCar.newSpeed = 153;
console.log("Viteza noua este " + newCar.newSpeed + " km/h");
console.log("------------------------------------------------");

oldCar.carInfo();
oldCar.accelerate();
console.log("------------------------------------------------");

//se formeaza Clasa Person

class Person  {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = '';
    }

    introduce() {
        console.log("Ma numesc " + this.firstName + " " + this.lastName + " am virsta de " + this.age + " ani.");
    }
    get personalEmail() {
        return this.email;
    }
    set personalEmail(email) {
        this.email = email;
    }
}

let firstPerson = new Person ("Placinta", "Nicolae", 53);

firstPerson.introduce();
firstPerson.personalEmail = "placinta.nicolae@mail.mm";
console.log(firstPerson.personalEmail);
console.log("------------------------------------------------");

class BankAcount {
    #acountNumber;
    #balance;
    constructor() {
        this.acountType = "fizica";
        this.#balance = 0;
    }
    
    deposit(addBalance) {
        return this.#balance += addBalance;
    }
    withdraw(minusBalance) {
        this.#balance -= minusBalance;
        return minusBalance;
    }
    checkBalance() {
        return this.#balance;
    }
    set acountNumber(value) {
        this.#acountNumber = value;
    }
    get acountNumber () {
        return this.#acountNumber;
    }
}

let client = new BankAcount();

console.log("Depositul Dvs a fost suplinit cu " + client.deposit(1000) + "lei");
client.acountNumber = "22445343A5D50FG"
console.log("Din depositul Dvs a fost extrasa suma de " + client.withdraw(250) + " lei, sold in deposit este " + client.checkBalance() + " lei");
console.log("Nr. Cont Bancar: " + client.acountNumber);


