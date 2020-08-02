const $letters = document.querySelectorAll(".pendu__letter");
const $wordsDiv = document.querySelector(".pendu__words")
const $replay = document.querySelector(".pendu__replay")
const listOfWords = ['voiture', 'maison', 'soupe', 'air', 'ciel', 'pikachu', 'portable','clavier', 'chaise', 'chat', 'rouge', 'france', 'ecran', 'socle','tapis','banque','argent','hamac','ardoise', 'livre', 'fiche','bureau','nez','bouche','oeil','touche'];
let numberMistake = 0;
let letterRemaining= 0;

$replay.addEventListener('click', replay)
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
    replay()
  }
}

function looseVerification() {
  if(numberMistake === 5){
    replay()
  }
}

function replay() {
  document.location.reload(true);
}