const inputDate = document.getElementById("data");
const addDateBtn = document.getElementById("add__btn");
const compareDates = document.getElementById("compare__dates__btn");
const checkWeekDays = document.getElementById("check__days__btn");
const datesList = document.getElementById("dates__list");
const checkDaysText = document.getElementById("check__days-text");
const checkDatesText = document.getElementById("compare__dates-text");

let dates = [];

const today = new Date();
const firstDate = new Date (2000, 2, 17);
const secondDate = new Date (2023, 4, 11);
const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];


//adaugare data in masiv + creare element in lista cu afisare despre data introdusa si denumirea lunii
addDateBtn.addEventListener("click", () => {
    dates.push(new Date(inputDate.value));
    const dateItem = document.createElement("li");
    dateItem.textContent = "Data introdusa este " + new Date(inputDate.value).toLocaleDateString() + ", Luna este: " + getMonthName(new Date(inputDate.value));
    datesList.append(dateItem);
    inputDate.value="";
})


//actiune verificare doua date din masiv daca coincid ambele intro zi a saptaminii
checkWeekDays.addEventListener("click", () => {
    checkWeekDay(dates[0], dates[1])
})
//afisare nume luna prin metoda extragere din masiv
let getMonthNew = (date) => {
    return months[date.getMonth()];
}
//afisare nume luna prin metoda localeString
function getMonthName (date) {
    return date.toLocaleString("ro-RO", { month: 'long' });
}
//functia pentru verificare 2 date daca sunt intro zi din saptamina cu extragerea denumirii zilei saptaminii din masiv
function checkWeekDay (date1, date2) {
    let weekDays = ['luni', 'marti', 'miercuri', 'joi', 'vineri', 'simbata', 'duminica'];
    let day1 = (date1.getDay()-1);
    let day2 = (date2.getDay()-1);
    if(day1 === day2) {
        checkDaysText.textContent = "Ambele date sunt in aceasi zi de saptamina si este " + weekDays[day1];
    }else {
        checkDaysText.textContent = "Ambele date nu coincid intr-o zi a saptaminii, prima data cade " + weekDays[day1] + " a doua data cade " + weekDays[day2];
    }
}
//extragere nume zi din saptamina cu metoda toLocaleString
function getWeekDay (date) {
    return date.toLocaleString("ro-RO", { weekday: 'long' });
}
//functia de comparare a doua date din masiv
function checkDates() {
    if(dates[0] < dates[1]) {
        checkDatesText.textContent = "Data " + new Date(dates[0]).toLocaleString() + " este mai mica decit " + new Date(dates[1]).toLocaleString(); 
    }else if (dates[0] > dates[1]) {
        checkDatesText.textContent = "Data " + new Date(dates[0]).toLocaleString() + " este mai mare decit " + new Date(dates[1]).toLocaleString(); 
    }else {
         {
            checkDatesText.textContent = "Ambele date sunt identice";
        }
    }
}

compareDates.addEventListener("click", checkDates);

