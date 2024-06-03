const form = document.getElementById("form");
const studentName = document.getElementById("name");
const studentFirstName = document.getElementById("first__name");
const studentAge = document.getElementById("age");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");


const tableBody = document.getElementById("tbody");
const ageSortBtn = document.getElementById("age__sort-btn");
const nameSortBtn = document.getElementById("name__sort-btn");
const result1SortBtn = document.getElementById("res1__sort-btn");
const result2SortBtn = document.getElementById("res2__sort-btn");
const result3SortBtn = document.getElementById("res3__sort-btn");
const mediaSortBtn = document.getElementById("media__sort-btn");
const totalSortBtn = document.getElementById("total__sort-btn");
const mediaGoodSortBtn = document.getElementById("mediaG__sort-btn");
const mediaBadSortBtn = document.getElementById("mediaB__sort-btn");

let sortFlag = "name";
let sortDirFlag = true;
let index = 1;

let students = [
    {
        name: "Alexandrean Serghei",
        age: 38,
        firstObiect: 7,
        secondObiect: 9,
        threeObiect: 10,
        get media() {
            return Math.floor((this.firstObiect + this.secondObiect + this.threeObiect) / 3);
        },
        get total () {
            return this.firstObiect + this.secondObiect + this.threeObiect;
        }   
    },
    {
        name: "Popovici Andrei",
        age: 36,
        firstObiect: 2,
        secondObiect: 6,
        threeObiect: 5,
        get media() {
            return Math.floor((this.firstObiect + this.secondObiect + this.threeObiect) / 3);
        },
        get total () {
            return this.firstObiect + this.secondObiect + this.threeObiect;
        }  
    },
    {
        name: "Turcanu Ilie",
        age: 25,   
        firstObiect: 5,
        secondObiect: 9,
        threeObiect: 8,
        get media() {
            return Math.floor((this.firstObiect + this.secondObiect + this.threeObiect) / 3);
        },
        get total () {
            return this.firstObiect + this.secondObiect + this.threeObiect;
        }  
    },
    {
        name: "Turutea Grigorii",
        age: 20,
        firstObiect: 6, 
        secondObiect: 4,
        threeObiect: 7,
        get media() {
            return Math.floor((this.firstObiect + this.secondObiect + this.threeObiect) / 3);
        },
        get total () {
            return this.firstObiect + this.secondObiect + this.threeObiect;
        } 
    }, 
    {
        name: "Curca Alexandra",
        age: 45,
        firstObiect: 5, 
        secondObiect: 4,
        threeObiect: 3,
        get media() {
            return Math.floor((this.firstObiect + this.secondObiect + this.threeObiect) / 3);
        },
        get total () {
            return this.firstObiect + this.secondObiect + this.threeObiect;
        } 
    }
];


//formarea unui rind cu date despre un student
function newStudent (index, name, age, res1, res2, res3, media, total) {
    const tableRow = document.createElement("tr");
    const indexTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const ageTd = document.createElement("td");
    const firstObiect = document.createElement("td");
    const secondObiect = document.createElement("td");
    const threeObiect = document.createElement("td");
    const mediaResult = document.createElement("td");
    const totalResult = document.createElement("td");

        indexTd.textContent = index + 1;
        nameTd.textContent = name;
        ageTd.textContent = age + " ani";
        firstObiect.textContent = res1;
        secondObiect.textContent = res2;
        threeObiect.textContent = res3;
        mediaResult.textContent = media;
        totalResult.textContent = total;
        tableRow.append(indexTd, nameTd, ageTd, firstObiect, secondObiect, threeObiect, mediaResult, totalResult);
        return tableRow;
    
}
//eveniment pentru adaugarea unui student nou
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (studentName.value == "") {
        studentName.style.borderColor = "red";
        return;
    }else {
        studentName.style.borderColor = "inherit";
    }
    if (studentFirstName.value == "") {
        studentFirstName.style.borderColor = "red";
        return;
    }else {
        studentFirstName.style.borderColor = "inherit";
    }
    if (studentAge.value == "") {
        studentAge.style.borderColor = "red";
        return;
    }else {
        studentAge.style.borderColor = "inherit"
    }
    if (result1.value == "") {
        result1.style.borderColor = "red";
        return;
    }else {
        result1.style.borderColor = "inherit"
    }
    if (result2.value == "") {
        result2.style.borderColor = "red";
        return;
    }else {
        result2.style.borderColor = "inherit"
    }
    if (result3.value == "") {
        result3.style.borderColor = "red";
        return;
    }else {
        result3.style.borderColor = "inherit"
    }

    //se formeaza numele, prenumele studentului cu prima litera mare restu mici indiferent de ce se introduce in input
    let nameToLowercase = studentName.value.toLowerCase();
    let nameFirstLetter = nameToLowercase.slice(0, 1).toUpperCase();
    let restLetersName = nameToLowercase.slice(1);
    let allName = nameFirstLetter + restLetersName;
    let lastNameToLowercase = studentFirstName.value.toLowerCase();
    let lastNameFirstLetter = lastNameToLowercase.slice(0, 1).toUpperCase();
    let restLetersLastName = lastNameToLowercase.slice(1);
    let allLastName = lastNameFirstLetter + restLetersLastName;
  
    let newStudent = 
        {
            name: allName + " " + allLastName,
            age: parseInt(studentAge.value.trim()),
            firstObiect: parseInt(result1.value.trim()),
            secondObiect: parseInt(result2.value.trim()),
            threeObiect: parseInt(result3.value.trim()),
            get media() {
                return (this.firstObiect + this.secondObiect + this.threeObiect) / 3;
            },
            get total () {
                return this.firstObiect + this.secondObiect + this.threeObiect;
            }
        };
    students.push(newStudent);
    getStudentsList(students);
    
    studentName.value = "";
    studentFirstName.value = "";
    studentAge.value = "";
    result1.value = "";
    result2.value = "";
    result3.value = "";
;})

//formarea liste cu studenti
function getStudentsList(arr) {
    tableBody.innerHTML = "";
    let copyList = [...arr];
    
    copyList = copyList.sort(function (a,b) {
        let sort = a[sortFlag] < b[sortFlag];
        if(sortDirFlag == false) sort = a[sortFlag] > b[sortFlag];
        if(sort) return -1;
    })
    for (let i = 0; i < copyList.length; i++) {
        let student = newStudent(i, copyList[i].name, copyList[i].age, copyList[i].firstObiect, copyList[i].secondObiect, copyList[i].threeObiect, copyList[i].media, copyList[i].total)
        tableBody.append(student);
      }
}
//sortare pentru media mai mare de 5
function sortGoodResult (arr) {
    tableBody.innerHTML = "";
    let copyList = arr.filter((element) => element.media >= 5) ;
    for (let i = 0; i < copyList.length; i++) {
        let student = newStudent(i, copyList[i].name, copyList[i].age, copyList[i].firstObiect, copyList[i].secondObiect, copyList[i].threeObiect, copyList[i].media, copyList[i].total)
        tableBody.append(student);
      }
}
//sortare pentru media mai mic de 5
function sortBadResult (arr) {
    tableBody.innerHTML = "";
    let copyList = arr.filter((element) => element.media < 5) ;
    for (let i = 0; i < copyList.length; i++) {
        let student = newStudent(i, copyList[i].name, copyList[i].age, copyList[i].firstObiect, copyList[i].secondObiect, copyList[i].threeObiect, copyList[i].media, copyList[i].total)
        tableBody.append(student);
      }
}

// //sortarea studnetilor dupa virsta
// function sortStudentsByAge(arr) {
//     tableBody.innerHTML = "";
//     let sortStudents = [...arr];
//     sortStudents.sort((a, b) => a.age - b.age);
//     for (let i = 0; i < sortStudents.length; i++) {
//         let student = newStudent(i, sortStudents[i].name, sortStudents[i].age, sortStudents[i].firstObiect, sortStudents[i].secondObiect, sortStudents[i].threeObiect, sortStudents[i].media, sortStudents[i].total)
//         tableBody.append(student);
//     }
// }
// //sortarea studentilor dupa nume
// function sortStudentByName(arr) {
//     tableBody.innerHTML = "";
//     let sortStudents = [...arr];
//     sortStudents.sort((a, b) => a.name > b.name ? 1 : -1);
//     for (let i = 0; i < sortStudents.length; i++) {
//         let student = newStudent(i, sortStudents[i].name, sortStudents[i].age, sortStudents[i].firstObiect, sortStudents[i].secondObiect, sortStudents[i].threeObiect, sortStudents[i].media, sortStudents[i].total)
//         tableBody.append(student);
//     }
// }

nameSortBtn.addEventListener("click", () => {
    sortFlag = "name";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
ageSortBtn.addEventListener("click", () => {
    sortFlag = "age";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
result1SortBtn.addEventListener("click", () => {
    sortFlag = "firstObiect";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
result2SortBtn.addEventListener("click", () => {
    sortFlag = "secondObiect";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
result3SortBtn.addEventListener("click", () => {
    sortFlag = "threeObiect";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
mediaSortBtn.addEventListener("click", () => {
    sortFlag = "media";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
totalSortBtn.addEventListener("click", () => {
    sortFlag = "total";
    sortDirFlag = !sortDirFlag;
    getStudentsList(students);
})
mediaGoodSortBtn.addEventListener("click", () => {
    sortGoodResult(students);
})
mediaBadSortBtn.addEventListener("click", () => {
    sortBadResult(students);
})

getStudentsList(students);

// ageSortBtn.addEventListener("click", ()=> {
//     sortStudentsByAge(students);
// })

// nameSortBtn.addEventListener("click", ()=> {
//     sortStudentByName(students);
// })

window.addEventListener("click", () => {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
})


