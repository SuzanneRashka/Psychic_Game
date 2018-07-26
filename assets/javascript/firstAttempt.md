// Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// id's = userGuess, compGuess, win, lose, remaining, guessed.

// 1) ✔ user picks a letter
// 2) ✔ computer picks a letter
// 3) letters compared
// 4) user letter stored array.push(from user);
// 5) repeats only 10 times.
// 6) wins counter
// 7) loss counter

var chars = "abcdefghijklmnopqrstuvwxyz";
var guessed = [];
// var userPrint = document.getElementById("userGuess");
var userPrint = document.getElementById("userGuess");
var compPrint = document.getElementById("compGuess");

// 1) get the keystrokes console logging
document.onkeyup = function (event) {
userPrint.textContent = event.key;
console.log("This is your guess = " + userGuess + event.key);
guessed.push(userGuess);
// document.getElementById("guessed") = guessed;
// 2) set up computers random guess
var compGuess = Math.floor(Math.random() \* 26);

console.log("Computer guess = " + compGuess);
// 3) comp guess needs to change number to string index
for (var i = 0; i < chars.length; i++) {
compGuess = chars.indexOf(compGuess[i]);
console.log(compGuess);
}

// make computer guess for every user guess
};
