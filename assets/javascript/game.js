// Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


// 1) ✔ user picks a letter
// 2) ✔ computer picks a letter
// 3) letters compared
// 4) user letter stored   array.push(from user);
// 5) repeats only 10 times.
// 6) wins counter
// 7) loss counter

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessed = [];

// id's = remaining, guessed.

//Computer Choice
var compNumber = [Math.floor(Math.random() * alphabet.length)];
// empty string to hold letter
var compLetter = " ";
// converted number to letter.
compLetter = alphabet[compNumber];

//User Choice
document.onkeyup = function (event) {

  var userGuess = event.key.toLowerCase();

  document.getElementById("userGuess").textContent = userGuess;
  document.getElementById("compGuess").textContent = compLetter;
  document.getElementById("win").textContent = wins;
  document.getElementById("lose").textContent = losses;
  document.getElementById("remaining").textContent = guesses;
  document.getElementById("guessed").textContent = guessed;

  // if user and computer guess same letter
  if (userGuess === compLetter) {
    wins++;
    alert("Congratulations! You've read the computers mind!");
    guesses = 10;
    guessed = [];
    alert("press any key to continue and play another round :)");
    compLetter;

  } else if (guesses === 0) {
    losses++;
    guessed = [];
    guesses = 10;
    // start game over
    alert("You lost! Start over!");
    compLetter;

  } else if (userGuess !== compLetter) {
    guesses--;
    guessed.push(userGuess);
  }
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
// 2) String.fromCharCode(event.keyCode).toLowerCase(); - not solving Meta
// 3) Computers guess only changing on refresh