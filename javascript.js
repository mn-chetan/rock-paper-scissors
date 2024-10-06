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