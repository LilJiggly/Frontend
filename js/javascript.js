console.log("ik ben gelinkt");

// h1 word grooter
var titel = document.querySelector("h1");

function feest() {
  titel.classList.toggle("feest");
}

titel.addEventListener("click", feest);

/* klik op de button om het formulier te sturen */
submit.addEventListener("click", function() {
  document.getElementById("submit").value = "Bedankt voor het invullen!";
  console.log("Ik ben geklikt");
});
