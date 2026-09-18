"use strict";
//selecting any element by it's class, and in this case we are selecting the content(text) inside of it
//document.querySelector(".message").textContent;
//instead of just taking the text, we can set the new content
//document.querySelector(".message").textContent = "🥳 Correct Number";
//document.querySelector(".score").textContent = 18;
//document.querySelector(".number").textContent = 10;

//document.querySelector(".guess").value = 10;

//defining the secret number once the app starts
let number = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

/// adding eventlisteners
//we create the eventlistener, first variable that passes is the one for the action and the second one is the function to execute according to it
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //everything we get from the user as an input by default is a String
  if (!guess) {
    alert("No number! ❌");
  } else if (guess === number) {
    document.querySelector(".message").textContent =
      "🥳 you guess the correct number!";
    document.querySelector(".number").textContent = number;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#2bc520";
    document.querySelector(".number").style.fontSize = "90px";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "😭 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      alert("🚨You lost the game, try again later!");
      document.querySelector("body").style.backgroundColor = "#ff2c2c";
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "😭 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      alert("🚨You lost the game, try again later!");
      document.querySelector("body").style.backgroundColor = "#ff2c2c";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let number = Math.trunc(Math.random() * 20);
  score = 20;

  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "start guessing... ! ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = number;
  document.querySelector(".number").style.fontSize = "70px";
  document.querySelector("body").style.backgroundColor = "#131212";
});
