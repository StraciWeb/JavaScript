console.log("First JS Program");
document.write("First JS Program" + "<br>");
let btn = document.createElement("button");
btn.textContent = "Alert";
btn.onclick = myFunction;

document.body.append(btn);

function myFunction() {
    alert("First JS Program");
}