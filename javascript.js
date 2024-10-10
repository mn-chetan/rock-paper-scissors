// function to randomly choose between rock, paper and scissors
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) return "Rock";
  else if (randomNumber < 2 / 3) return "Paper";
  else return "Scissors";
}

// function to let user choose of one of the buttons
function getHumanChoice() {
  const buttons = document.querySelectorAll(".choice button");
  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      // get reference to class player and computer
      const player = document.querySelector(".player");
      const computer = document.querySelector(".computer");

      // get reference to player and computer result
      const playerResult = document.querySelector(".player-result");
      const computerResult = document.querySelector(".computer-result");

      // reset player and computer choice after every click
      const playerChoice = document.querySelector(".player-choice");
      const computerChoice = document.querySelector(".computer-choice");
      const playerRunningScore = document.querySelector(".player-score");
      const computerRunningScore = document.querySelector(".computer-score");

      if (playerChoice !== null) {
        player.removeChild(playerChoice);
        computer.removeChild(computerChoice);
        playerResult.removeChild(playerRunningScore);
        computerResult.removeChild(computerRunningScore);
      }

      // insert the player's choice on screen
      const paraPlayer = document.createElement("p");
      paraPlayer.textContent = e.target.textContent;
      paraPlayer.classList.toggle("player-choice");
      player.appendChild(paraPlayer);

      // after player has chosen, randomly generate rock, paper or scissor as computer choice
      const paraComputer = document.createElement("p");
      paraComputer.textContent = getComputerChoice();
      paraComputer.classList.toggle("computer-choice");
      computer.appendChild(paraComputer);

      // display running score

      // to display player score
      const paraResultPlayer = document.createElement("p");
      paraResultPlayer.classList.toggle("player-score");

      // to display computer score
      const paraResultComputer = document.createElement("p");
      paraResultComputer.classList.toggle("computer-score");

      const result = calculateScore(
        paraPlayer.textContent,
        paraComputer.textContent
      );
      paraResultPlayer.textContent = humanScore;
      paraResultComputer.textContent = computerScore;
      playerResult.appendChild(paraResultPlayer);
      computerResult.appendChild(paraResultComputer);

      // display winner
      displayWinner();
    })
  );
}

let humanScore = 0,
  computerScore = 0;
function calculateScore(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return; // in case of tie

  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  )
    humanScore++;
  else computerScore++;
}

function displayWinner() {
  if (humanScore === 5 && humanScore > computerScore)
    alert("You won the game!");
  else if (computerScore === 5 && computerScore > humanScore)
    alert("Computer won the game!");
}

function playGame() {
  getHumanChoice();
}

playGame();
