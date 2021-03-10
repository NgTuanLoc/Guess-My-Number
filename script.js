// let secretNumber = Math.trunc(Math.random() * 20 + 1);
let secretNumber = 1;
let score = 20;
let highscore = 0;

const displayMessage = function (massage) {
  document.querySelector(".message").textContent = massage;
};

// Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Check guess is null or not
  if (!guess || isNaN(guess)) {
    displayMessage("⛔️ No number!");
  }

  // When guess is Correct
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess >= secretNumber ? "📈 Too high!" : "📉 Too low!");
    }
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    // document.querySelector('.message').textContent = '💥 You lost the game!';
    displayMessage("💥 You lost the game!");
    document.querySelector(".score").textContent = 0;
  }
});
