function getComputerChoice() {
  const choice = Math.random();
  // r->ROCK, p->PAPER, s->Scissors
  if (choice < 1 / 3) return "r";
  else if (choice < 2 / 3) return "p";
  else return "s";
}
