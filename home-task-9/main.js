const books = {
    book1: {
        title: "Gradinarul si tamplarul",
        author: "Alison Gopnik",
        pages: 384,
        year: 2023,
        curentPage: 20,
        readPages: 364,
        read: function () {
            return "Azi au fost citite " + this.readPages + " pagini";
        },
        checkPage: function () {
            let readPages = this.curentPage + this.readPages;
            return readPages;
        },
        checkPercentage: function () {
            let percentage = Math.floor((this.checkPage()*100)/this.pages);
            return percentage;
        },
        isRead: function () {
            let readPages = this.curentPage + this.readPages;
            if(this.checkPercentage() === 100) {
                return "Cartea a fost citita"
            }else {
                return "Cartea inca nu este citita, ati ajuns la pagina " + readPages + " sau " + this.checkPercentage() + "% din total pagini";
            }
        }
    },
    book2: {
        title: "Arta subtila a nepasarii",
        author: "Manson Mark",
        pages: 238,
        year: 2019,
        curentPage: 15,
        readPages: 150,
        read: function () {
            return "Azi au fost citite " + this.readPages + " pagini";
        },
        checkPage: function () {
            let readPages = this.curentPage + this.readPages;
            return readPages;
        },
        checkPercentage: function () {
            let percentage = Math.floor((this.checkPage()*100)/this.pages);
            return percentage;
        },
        isRead: function () {
            let readPages = this.curentPage + this.readPages;
            if(this.checkPercentage() === 100) {
                return "Cartea a fost citita"
            }else {
                return "Cartea inca nu este citita, ati ajuns la pagina " + readPages + " sau " + this.checkPercentage() + "% din total pagini";
            }
        }
    }
}

const container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.gap = "30px";

   for (const iterator in books) {

    const bookWrapper = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p")
    const bookpages = document.createElement("p")
    const bookCurentPage = document.createElement("p")
    const bookReadPages = document.createElement("p")
    const bookTotalReadPages = document.createElement("p")
    const bookPrcentReadPages = document.createElement("p")
    const bookIsRead = document.createElement("p")


    bookTitle.textContent = books[iterator].title;
    bookAuthor.textContent = "Autor: " + books[iterator].author;
    bookpages.textContent = "Pagini: " + books[iterator].pages;
    bookCurentPage.textContent = "Pagina Curenta: " + books[iterator].curentPage;
    bookReadPages.textContent = "Azi au fost citite: " + books[iterator].readPages + " pagini";
    bookTotalReadPages.textContent = "In total au fost citite: " + books[iterator].checkPage() + " pagini";
    bookPrcentReadPages.textContent = "Ce constituie: " + books[iterator].checkPercentage() + "%";
    bookIsRead.textContent = books[iterator].isRead();

    bookWrapper.append(bookTitle, bookAuthor, bookpages, bookCurentPage, bookReadPages, bookTotalReadPages, bookPrcentReadPages, bookIsRead);
    container.append(bookWrapper);
    document.body.append(container);
   }

const widthInput = document.getElementById("width__input");
const heigthInput = document.getElementById("heigth__input");
const createBtn = document.getElementById("create__btn");
const rectangleForme = document.getElementById("rectangle");


function getRectangle(rectangle) {
    let perimeter = (rectangle.width + rectangle.heigth) * 2;
    let aria = rectangle.width * rectangle.heigth;
    rectangleForme.style.display = "block";
    rectangleForme.style.width = rectangle.width + "px";
    rectangleForme.style.height = rectangle.heigth + "px";
    rectangleForme.style.background = "red";
    rectangleForme.textContent = "Perimetrul este " + perimeter + ", Aria este: " + aria;
}

   createBtn.addEventListener("click", () => {
    let rectangleWidth = Number(widthInput.value);
    let rectangleHeigth = Number(heigthInput.value);

    const rectangle = {
        width: rectangleWidth,
        heigth: rectangleHeigth,
        set changeHeight (newHeigth) {
            if(newHeigth < 0) {
                console.log("ati introdus o valoare negativa")
                return
            }else {
                this.heigth = newHeigth
            }
        },
        set changheWidth (newWidth) {
            if(newWidth < 0) {
                console.log("ati introdus o valoare negativa");
            }else {
                this.with = newWidth;
            }
        },  
        get perimeter() {
            return (this.with + this.heigth)*2;
        },
        get aria() {
            return this.with * this.heigth;
        },
       }
        getRectangle(rectangle);
   });


const programming = {
    languages: ["JavaScript", "Phyton", "PHP"],
    isChalenging: true,
    isRewarding: true,
    dificulty: 8,
    jokes: "www.ddsds.dsdsd/sds/sddsdsds/sdsd/d"
}

programming.languages.push("GO");
programming.dificulty = 7;
delete programming.jokes;
programming.isFun = true;

let languages = programming.languages;

languages.forEach(element => {
    console.log(element);
});

let keys = Object.keys(programming);
let values = Object.values(programming);

console.log(programming);
console.log(languages);
console.log(keys);
console.log(values);
