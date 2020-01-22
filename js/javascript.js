console.log("ik ben gelinkt");

// h1 word grooter
var heen = document.querySelector("h1");

function groot() {
  heen.classList.toggle("groot");
}

heen.addEventListener("click", groot);

console.log(heen);

/* button veranderd van tekst */
submit.addEventListener("click", function() {
  document.getElementById("submit").value = "Bedankt voor het invullen!";
  console.log("Ik ben geklikt");
});
