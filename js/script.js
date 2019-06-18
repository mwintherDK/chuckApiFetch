let form = document.querySelector("form");
let select = document.querySelector("select");
let jokeHere = document.querySelector(".jokeHere");
let jokePlaceholder = "";

form.addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.matches("input[type='submit']")) {
    getJokes(select.value);
  }
});

function getJokes(number) {
  fetch("http://api.icndb.com/jokes/random/" + number)
    //Nedenstående kan osse skrives: .then(response => response.json())
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      jokePlaceholder += "<ul>";
      data.value.forEach(element => {
        jokePlaceholder += "<li>" + element.joke + "</li>";
      });
      jokePlaceholder += "</ul>";
      jokeHere.innerHTML = jokePlaceholder;
    })
    .catch(function(err) {
      console.log("Noget her: " + err);
    });
}
