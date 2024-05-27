
const recipeList = document.getElementById("recipe__list");
const booksList = document.getElementById("books__list");
const autoList = document.getElementById("auto__list");


//recete
const recipes = {
receta1: {title: "Salata greceasca cu pui si Avocado",
    servings: 6,
    ingredients : {
        castraveti: "Castraveti - 1 buc",
        rosii: "Rosii cherry medii - 6 buc",
        avocado: "Avocado - 1 buc",
        ceapa: "Ceapa rosie - 0.5 buc",
        piept: "Piept de pui - 0.5 buc",
        masline: "Masline - 100 gr.",
        brinza: "Branza feta sau telemea - 100 gr.",
        ulei: "Ulei de masline extravirgin - 70 ml",
        lamie: "Lamie - 0.5 buc",
        otet: "Otet de mere - 2 linguri"
    },
    time: 30,
    img: "img/salata.jpg"    
    },
receta2: {title: "Tort Medovik",
    servings: 8,
    ingredients : {
        oua: "Oua - 2 buc",
        zahar: "Zahar - 1 pahar",
        unt: "Unt - 60 gr.",
        miere: "Miere de albine - 2 linguri",
        faina: "Faina alba de calitate superioara - 3.5 pahare"
    },
    time: 45,
    img: "img/medovik.jpg"
    },
receta3: {title: "Supa-crema de dovleac cu chiftelute",
    servings: 7,
    ingredients : {
        dovleac: "Dovleac - 700 gr",
        dovlecei: "Dovlecei - 1 buc",
        ceapa: "Ceapa alba 1 buc.",
        usturoi: "Usturoi - 4 catei",
        unt: "Unt 30 gr"
    },
    time: 60,
    img: "img/supa.jpg"
    }
}

//carti
const books = {
   book1: { title: "Sapte secrete murdare",
            author: "Natalie D. Richards",
            pages: 320,
            anul: 2023,
            citit: true
        },
    book2: { title: "Gradinarul si tamplarul",
            author: "Alison Gopnik",
            pages: 384,
            anul: 2023,
            citit: false
        },
    book3: { title: "Cine e de vina?",
            author: "Vanessa Bennet, John Kim",
            pages: 272,
            anul: 2024,
            citit: false
        }
}

//automobile

const cars = {
    car1: {
        name: "Toyota",
        model: "Corola",
        color: "Alba", 
        year: 2015,
        fuel: "Diesel",
        cutie: "Automat"
    },
    car2: {
        name: "Skoda",
        model: "Octavia",
        color: "Rosie", 
        year: 2020,
        fuel: "Benzin",
        cutie: "Manual"
    },
    car3: {
        name: "Kia",
        model: "Sportage",
        color: "negru", 
        year: 2022,
        fuel: "Benzin",
        cutie: "Automat"
    }
}


//formarea listei cu retete
function getRecipes(obj) {
    for (const key in obj) {

    const recipeItem = document.createElement("li");
    const recipeInfo = document.createElement("div");
    const recipeTitle = document.createElement("p");
    const recipeServings = document.createElement("p");
    const prepareTime = document.createElement("p");
    const recipeImg = document.createElement("img");
    const showBtn = document.createElement("button");
    const recipeDescrWrapper = document.createElement("div");
    const reciveIngredients = document.createElement("ul");

    recipeDescrWrapper.classList.add("hidden");
    recipeItem.classList.add("recipe__item");
    recipeInfo.classList.add("recipe__info");
    recipeImg.classList.add("recipe__img");
    recipeTitle.classList.add("recipe__title");
    recipeTitle.textContent = obj[key].title;
    recipeImg.src = obj[key].img
    recipeServings.textContent = "Numarul de persoane: " + obj[key].servings;
    prepareTime.textContent = "Timp de preparare: " + obj[key].time + " min.";
    showBtn.textContent = "Mai mult";

    //ingredientele
    let ingredients = obj[key].ingredients;
    
    for (const key in ingredients) {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredients[key];
        reciveIngredients.append(ingredientItem);
    }

    recipeInfo.append(recipeTitle, recipeServings, prepareTime, showBtn)
    recipeDescrWrapper.append(reciveIngredients);
    recipeItem.append(recipeImg, recipeInfo, recipeDescrWrapper);
    recipeList.append(recipeItem);

    showBtn.addEventListener("click", () => {
        recipeDescrWrapper.classList.toggle("hidden");
    })

    }
}

getRecipes(recipes);

//formarea listei cu carti

function getBooks(obj) {
    for (const key in obj) {
      console.log(obj[key])
      const bookItem = document.createElement("li");
      const moreBtn = document.createElement("button");
      const bookInfo = document.createElement("div");
      const bookAuthor = document.createElement("p");
      const bookPages = document.createElement("p");
      const bookYear = document.createElement("p");
      const bookRead = document.createElement("p");

      bookInfo.classList.add("hidden");
      bookItem.textContent = obj[key].title;
      moreBtn.textContent = "Despre carte";
      bookAuthor.textContent = "Autor: " + obj[key].author;
      bookPages.textContent = "Nr. pagini: " + obj[key].pages;
      bookYear.textContent = "Anul: " + obj[key].anul;

      bookItem.classList.add("book__item");

      if (obj[key].citit === true) {
        bookRead.textContent = "Cartea este citita";
      }else {
        bookRead.textContent = "Cartea nu este citita"
      }
     
      bookItem.append(moreBtn);
      bookInfo.append(bookAuthor, bookPages, bookYear, bookRead);
      booksList.append(bookItem, bookInfo);

      moreBtn.addEventListener("click", () => bookInfo.classList.toggle("hidden"));
    }

}

getBooks(books);

//automobile

function getAuto(obj) {
  
  
    for (const key in obj) {
        const autoItem = document.createElement("li");
        const autoTitle = document.createElement("p");
        const autoModel = document.createElement("p");
        const autoYear = document.createElement("p");
        const autoColor = document.createElement("p");
        const autoFuel = document.createElement("p");
        const autoCutie = document.createElement("p");
        const buttonsWrapper = document.createElement("div");
        const startBtn = document.createElement("button");
        const drivetBtn = document.createElement("button");
        const stoptBtn = document.createElement("button");
        const honkBtn = document.createElement("button");
        const mesage = document.createElement("p");


        startBtn.textContent = "Start Car"
        drivetBtn.textContent = "Drive Car"
        stoptBtn.textContent = "Stop Car"
        honkBtn.textContent = "Honk Car"

        autoTitle.textContent = "Denumire Automobil: " + obj[key].name;
        autoModel.textContent = "Model: " + obj[key].model;
        autoColor.textContent = "Culoare: " + obj[key].color;
        autoFuel.textContent = "Tip Combustibil: " + obj[key].fuel;
        autoYear.textContent = "Anul producerii: " + obj[key].year;
        autoCutie.textContent = "Cutie: " + obj[key].cutie;

        autoItem.classList.add("auto__item")

        buttonsWrapper.append(startBtn, drivetBtn, stoptBtn, honkBtn, mesage);
        autoItem.append(autoTitle, autoModel, autoColor, autoFuel, autoYear, autoCutie, buttonsWrapper);
        autoList.append(autoItem);

        startBtn.addEventListener("click", () => mesage.textContent = "Automobilul " + obj[key].name + " a pornit la drum");

        drivetBtn.addEventListener("click", () => mesage.textContent = "Automobilul " + obj[key].name + " de model " + obj[key].model + " Se deplaseaza pe traseul principal");

        stoptBtn.addEventListener("click", () => mesage.textContent = "Automobilul " + obj[key].name + " de model " + obj[key].model + " de culoare " + obj[key].color + " a stopat in or. Chisinau");

        honkBtn.addEventListener("click", () => mesage.textContent = "Automobilul " + obj[key].name + " de model " + obj[key].model + " de culoare " + obj[key].color + " anul producerii " + obj[key].year + " a claxonat in timpul deplasarii" );
    }
}

getAuto(cars);



