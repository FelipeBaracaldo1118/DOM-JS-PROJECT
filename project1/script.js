"use strict";
//selecting any element by it's class, and in this case we are selecting the content(text) inside of it
//document.querySelector(".message").textContent;
//instead of just taking the text, we can set the new content
//document.querySelector(".message").textContent = "🥳 Correct Number";
//document.querySelector(".score").textContent = 18;
//document.querySelector(".number").textContent = 10;

//document.querySelector(".guess").value = 10;

//defining the secret number once the app starts
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameOver = false;
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
/// adding eventlisteners
//we create the eventlistener, first variable that passes is the one for the action and the second one is the function to execute according to it
document.querySelector(".check").addEventListener("click", function () {
  if (gameOver) return;

  const guess = Number(document.querySelector(".guess").value);
  //everything we get from the user as an input by default is a String
  if (!guess) {
    alert("No number! ❌");
  } else if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
    displayMessage("Enter a whole number between 1 and 20!");
  } else if (guess === number) {
    gameOver = true;
    displayMessage("🥳 you guess the correct number!");
    document.querySelector(".number").textContent = number;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#2bc520";
    document.querySelector(".number").style.fontSize = "90px";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      guess > number ? displayMessage("Too High!") : displayMessage("Too low!");
    } else {
      gameOver = true;
      displayMessage("You lost the game 💥");
      document.querySelector("body").style.background = "#ec0a0a";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  gameOver = false;

  document.querySelector(".guess").value = "";
  displayMessage("start guessing... ! ");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.fontSize = "70px";
  document.querySelector("body").style.backgroundColor = "#131212";
});
