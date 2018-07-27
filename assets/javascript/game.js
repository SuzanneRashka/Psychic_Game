// Guidelines
// 1) ✔ user picks a letter
// 2) ✔ computer picks a letter
// 3) ✔ letters compared
// 4) ✔ user letter stored   array.push(from user);
// 5) ✔ repeats only 10 times.
// 6) ✔ wins counter
// 7) ✔ loss counter

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessed = [];
var compLetter = " ";
// id's = remaining, guessed.

//Computer 
var compChoice = function () {
  var compNumber = [Math.floor(Math.random() * alphabet.length)];
  // empty string to hold letter

  // converted number to letter.
  compLetter = alphabet[compNumber];
}


document.onkeyup = function (event) {
  //User Choice holder
  var userGuess = event.key.toLowerCase();
  // prints to document


  // if user and computer guess same letter
  if (userGuess === compLetter) {

    wins++;
    alert("Congratulations! You've read the computers mind!");
    guesses = 10;
    guessed = [];
    alert("Press any key to continue and play another round :)"); // start game over
    document.getElementById("win").textContent = wins;
    compChoice();

    // if 10 guesses are used
  } else if (guesses === 0) {

    losses++;
    guessed = [];
    guesses = 10;
    alert("You lost! Start over!"); // start game over
    document.getElementById("lose").textContent = losses;
    compChoice();

    // continue game play until win or no more tries
  } else if (userGuess !== compLetter) {

    guesses--;
    guessed.push(userGuess);
  }
  document.getElementById("userGuess").textContent = " " + userGuess;
  document.getElementById("remaining").textContent = guesses;
  document.getElementById("guessed").textContent = guessed;
  console.log("Computer Choice is " + compLetter);

}

//gif
var toggle = document.getElementById("toggle");
// button
var content = document.getElementById("content");

toggle.addEventListener("click", function () {
  if (content.classList.toggle("hide")) {
    toggle.innerHTML = 'Show Steve';
  } else {
    toggle.innerHTML = 'Hide Steve';
  }

});

// Problems....

// 1) Command still first key press! Seriously! Stop following me!@!@!#@#!
//    Meta problem // String.fromCharCode(event.keyCode).toLowerCase(); - not solving Meta
// 2) Computers guess only changing on refresh
// 3) Computer choice for every user key choice
// 4) Keystroke needed to restart board