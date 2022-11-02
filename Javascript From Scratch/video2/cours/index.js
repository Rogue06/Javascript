//SELECTEURS
//document.querySelector("h4").style.background = "yellow"

//const baliseHTML = document.querySelector("h4");

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

//console.log(btn1, btn2);  pour tester la selection des boutons

questionContainer.addEventListener("click", () => {
  //console.log("CLick !"); pour tester dans la console
  questionContainer.classList.toggle("question-click");
});
//toggle permet lorsque l'on clic de mettre ou enlever la class.
//add permet d'ajouter simplement la class.

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//priorité d'execution : <div> >#id>.class>baliseHTML

//-----------------------------------------------------------------

//Mouse Events
