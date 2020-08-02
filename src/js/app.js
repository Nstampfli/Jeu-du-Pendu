const $letters = document.querySelectorAll(".pendu__letter");
const $wordsDiv = document.querySelector(".pendu__words")
const listOfWords = ['voiture', 'maison', 'ventilateur', 'air', 'ciel', 'pikachu'];
let numberMistake = 0;

(function play() {
  randomNumber();
}());

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * listOfWords.length);
  let wordWanted = listOfWords[randomNumber];
  createWordHide(wordWanted);
}

function createWordHide(word) {
  for (let i = 0; i < word.length; i++) {
    $wordsDiv.innerHTML += "<li class='pendu__word'> _ </li>"
  }
  console.log(word);
  searchingWord(word)
}

function searchingWord(word) {
  for (let i = 0; i < $letters.length; i++) {
    $letters[i].addEventListener('click', () =>{
      let letterChosen= $letters[i].textContent.toLowerCase().toString(); 
      let indexLetter=  word.indexOf(letterChosen);
      wordVerification(letterChosen, indexLetter)
    });
  }
}
function wordVerification(letter, index) {
  const test = document.querySelectorAll(".pendu__word")
  if( index !== -1){
    test[index].innerHTML = letter;
  }
  else{
    numberMistake++
    console.log(numberMistake);
  }
}




