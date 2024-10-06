function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 1 / 3) {
    return "rock";
  } else if (choice <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What is your choice? Rock, Paper or Scissors");

  if (choice.toLowerCase() == "rock") {
    return "rock";
  } else if (choice.toLocaleLowerCase() == "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function playRound(
    humanChoice = getHumanChoice(),
    computerChoice = getComputerChoice()
  ) {
    // Both human and computer choice same
    if (humanChoice == computerChoice) {
      console.log("It's a Tie");
    }

    //   Human Losing
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    }

    // Human Winning
    if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! Rock beats scissors.");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! Paper beats rock.");
      humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beats paper.");
      humanScore++;
    }
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > humanScore) {
    console.log("You lost!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
