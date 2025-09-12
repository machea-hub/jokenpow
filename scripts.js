const result = document.querySelector(".result");
const humanScore = document.querySelector("#my-score");
const machineScore = document.querySelector("#machine-score");
const tiedScore = document.querySelector("#tied-score")

tiedScoreNumber = 0;
humanScoreNumber = 0;
machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
    LIZARD: "lizard",
    SPOCK: "spock"
}

const playHuman = (humanChoice) => {
  playtTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS, GAME_OPTIONS.LIZARD, GAME_OPTIONS.SPOCK];
  const randomNumber = Math.floor(Math.random() * 6);

  return choices[randomNumber];
};

const playtTheGame = (human, machine) => {
  console.log("Humano: " + human + ", Maquina: " + machine);

  if (human === machine) {
    tiedScoreNumber++
    tiedScore.innerHTML = tiedScoreNumber;
    result.innerHTML = "Deu empate";
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.LIZARD) ||
    (human === GAME_OPTIONS.LIZARD && machine === GAME_OPTIONS.SPOCK) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.LIZARD) ||
    (human === GAME_OPTIONS.LIZARD && machine === GAME_OPTIONS.PAPER) ||
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SPOCK) ||
    (human === GAME_OPTIONS.SPOCK && machine === GAME_OPTIONS.ROCK)
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "Você ganhou";
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você perdeu";
  }
};

