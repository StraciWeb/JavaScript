
//elementele pentru butonul contor
const clickedBtn = document.getElementById("click");
//elemente pentru butoanele de la keyboard
const keyPressResult = document.getElementById("keypress__result");
//elementele pentru input forma
const inputName = document.getElementById("input__name");
const inputAge = document.getElementById("input__age");
const inputEmail = document.getElementById("input__email");
const selectCurs = document.getElementById("curs"); 
const submitBtn = document.getElementById("submit__btn");
const succesBox = document.getElementById("succes");
//elemente pentru span/error forma
const errorName = document.getElementById("error_name");
const errorAge = document.getElementById("error_age");
const errorEmail = document.getElementById("error_email");
const errorCurs = document.getElementById("error_curs");


//butonul contor - functia
clickedBtn.value = "Click";
let count = 0;
function click() {
    count++;
    clickedBtn.value = "Click: " + " (" + count + ")";
}

clickedBtn.addEventListener("click", click);


//eveniment la apasarea butonului din imagine
document.addEventListener("keypress", (event) => {
    const keyName = event.key;
    switch(keyName) {
        case "a": keyPressResult.textContent = "A fost accesat butonul: A";
        break;
        case "b": keyPressResult.textContent = "A fost accesat butonul: B";
        break;
        case "c": keyPressResult.textContent = "A fost accesat butonul: C";
        break;
        case "d": keyPressResult.textContent = "A fost accesat butonul: D";
        break;
        default: keyPressResult.textContent = "Nu a fost accesat litera corespunzatoare";
    }
  });


  //eveniment la trimiterea informatiei din forma, cu verificare la completarea cimpurilor
  submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if(inputName.value === "") {
        errorName.style.display = "block";
        inputName.classList.add("error__border");
        errorName.textContent = "Introduceci Numele, prenumele";
    }
    else{
        errorName.style.display = "none";
        inputName.classList.remove("error__border");
    }
    if(inputAge.value === "") {
        errorAge.style.display = "block";
        inputAge.classList.add("error__border");
        errorAge.textContent = "Introduceci Virsta";
    }
    else{
        errorAge.style.display = "none";
        inputAge.classList.remove("error__border");
    }
    if(inputEmail.value === "") {
        errorEmail.style.display = "block";
        inputEmail.classList.add("error__border");
        errorEmail.textContent = "Introduceci email";
    }
    else {
        errorEmail.style.display = "none";
        inputEmail.classList.remove("error__border");
    }
        let selectedIndex = selectCurs.selectedIndex; 
        let selectedOption = selectCurs.options[selectedIndex].value; 

    if(selectedOption === "") {
        errorCurs.style.display = "block";
        selectCurs.classList.add("error__border");
        errorCurs.textContent = "Selectati un curs";
    }else {
        errorCurs.style.display = "none";
        selectCurs.classList.remove("error__border");
    }

    const allInputs = document.querySelectorAll(".input")
    
    for (const input of allInputs)

        if (input.value !== "" && selectedOption !== "") {
            succesBox.classList.remove("none");
        };

        
  })


