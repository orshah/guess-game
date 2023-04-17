"use strict";

//--select elements--//
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".label-score");
const highScoreLabel = document.querySelector(".label-highscore");
const numberDiv = document.querySelector(".number");
const againBtn = document.querySelector(".again");

//--all our numbers and scores
let winnerNum = Math.round(Math.random() * 20 + 1);
let currentScore = 20;
let highScore = 0;
let guessNum;

const displayMessage = (text) => {
  message.textContent = text;
};

const chechBtnHandler = () => {
  console.log(winnerNum);
  console.log(guessNum);

  //when user didnt put anything
  if (!guessNum) {
    return displayMessage("📌 Please enter number");
  }

  // 1st case right answer
  if (guessNum === winnerNum) {
    document.querySelector("body").style.backgroundColor = "#3EC70B";
    message.textContent = "🏆 You got the winner number";
    numberDiv.textContent = guessNum;
    let rotation = 0;
    const angle = 90;
    function rotateElement() {
      rotation = (rotation + angle) % 360;
      numberDiv.style.transform = `rotate(${rotation}deg)`;
    }
    const rotInterval = setInterval(rotateElement, 160);
    setTimeout(() => {
      clearInterval(rotInterval);
    }, 2500);
    rotateElement();
    numberDiv.style.transform = `translateY(50%)`;

    highScore = currentScore > highScore ? currentScore : highScore;
    highScoreLabel.textContent = `🥇 Highscore: ${highScore}`;
  } else {
    message.textContent =
      guessNum > winnerNum ? "⬆️ too high..." : "⬇️ too low...";
    currentScore--;
    scoreLabel.textContent = `💯 Score: ${currentScore}`;
  }
};

guessInput.addEventListener("change", (e) => {
  guessNum = parseInt(e.target.value);
});
const againBtnHandler = () => {
  document.querySelector("body").style.backgroundColor = "#222";
  numberDiv.textContent = "?";
  guessInput.value = "";
  currentScore = 20;
  scoreLabel.textContent = `💯 Score: ${currentScore}`;
  winnerNum = Math.round(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
};
checkBtn.addEventListener("click", chechBtnHandler);
againBtn.addEventListener("click", againBtnHandler);
