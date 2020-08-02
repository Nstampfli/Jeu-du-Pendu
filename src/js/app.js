const $letters = document.querySelectorAll(".pendu__letter");
const $wordsDiv = document.querySelector(".pendu__words")
const listOfWords = ['voiture', 'maison', 'ventilateur', 'air', 'ciel', 'pikachu'];


(function play() {
  randomNumber();
}());

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * listOfWords.length);
  let wordWanted = listOfWords[randomNumber];
  createWordHide(wordWanted.length);
}

function createWordHide(number) {
  for (let i = 0; i < number; i++) {
    $wordsDiv.innerHTML += "<li class='pendu__word'> _ </li>"
  }
}




for (let i = 0; i < $letters.length; i++) {
  $letters[i].addEventListener('click', () =>{
    let ab= $letters[i].textContent; 
  });
}

