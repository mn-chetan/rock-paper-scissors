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
      // insert the player's choice on screen
      const player = document.querySelector(".player");
      const paraPlayer = document.createElement("p");
      paraPlayer.textContent = e.target.textContent;
      paraPlayer.classList.toggle("player-choice");
      player.appendChild(paraPlayer);

      // after player has chosen, randomly generate rock, paper or scissor as computer choice
      const computer = document.querySelector(".computer");
      const paraComputer = document.createElement("p");
      paraComputer.textContent = getComputerChoice();
      paraComputer.classList.toggle("computer-choice");
      computer.appendChild(paraComputer);
    })
  );
}
