const $letters = document.querySelectorAll(".pendu__letter");
const $wordsDiv = document.querySelector(".pendu__words")
const listOfWords = ['voiture', 'maison', 'ventilateur', 'air', 'ciel', 'pikachu'];
let numberMistake = 0;
let letterRemaining= 0;

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
    $wordsDiv.innerHTML += "<li class='pendu__wordLetter'>_</li>"
  }
  console.log(word);
  searchingWord(word)
}

function searchingWord(word) {
  for (let i = 0; i < $letters.length; i++) {
    $letters[i].addEventListener('click', () =>{
      let letterChosen= $letters[i].textContent.toLowerCase().toString(); 
      let indexLetter=  word.indexOf(letterChosen);
      $letters[i].style.visibility="hidden";
      wordVerification(letterChosen, indexLetter, word)
    });
  }
}
function wordVerification(letter, index , word) {
  const wordLetter = document.querySelectorAll(".pendu__wordLetter")
  if( index !== -1){
    wordLetter[index].innerHTML = letter;
    winVerification( word) 
  }
  else{
    numberMistake++
    looseVerification() 
  }
}

function winVerification(word) {
  letterRemaining++
  if(word.length === letterRemaining){
    window.alert("Gagné");
  }
}

function looseVerification() {
  if(numberMistake === 5){
    window.alert("Perdu");
  }
}



