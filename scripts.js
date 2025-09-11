const result = document.querySelector(".result");
const humanScore = document.querySelector("#my-score");
const machineScore = document.querySelector("#machine-score");
const tiedScore = document.querySelector("#tied-score")

tiedScoreNumber = 0;
humanScoreNumber = 0;
machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playtTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
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
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper") ||
    (human === "rock" && machine === "lizard") ||
    (human === "lizard" && machine === "spock") ||
    (human === "scissors" && machine === "lizard") ||
    (human === "lizard" && machine === "paper") ||
    (human === "paper" && machine === "spock") ||
    (human === "spock" && machine === "rock")
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

