"use strict";

let check = document.querySelector(".check");
let guessInput = document.querySelector(".guess");
let message = document.querySelector(".message");
let random = Math.trunc(Math.random() * 20 + 1);
let number = document.querySelector(".number");
let currentScore = 20;
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let againBtn = document.querySelector(".again");
let body = document.querySelector("body");
let currentHighScore = 0;

check.addEventListener("click", (e) => {
  let guess = Number(guessInput.value);

  //when no input
  if (!guess) {
    message.textContent = "⛔ No Number!";

    //when guess is correct
  } else if (guess === random) {
    message.textContent = "🎉 Correct Number!";
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.style.color = "black";
    number.textContent = random;
    if (currentScore > currentHighScore) {
      currentHighScore = currentScore;
      highScore.textContent = currentHighScore;
    }

    // highScore.textContent = score.textContent;

    // when guess is too high
  } else if (guess > random) {
    if (currentScore > 1) {
      message.textContent = "📈 Too High!";
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = "💥 Game Over!";
      score.textContent = 0;
    }

    // when guess is too low
  } else if (guess < random) {
    if (currentScore > 1) {
      message.textContent = "📉! Too Low!";
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = "💥 Game Over!";
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#222";
  random = Math.trunc(Math.random() * 20 + 1);
  number.textContent = "?";
  number.style.width = "15rem";
  guessInput.value = "";
  currentScore = 20;
  score.textContent = currentScore;
  message.textContent = "Start guessing...";
});
