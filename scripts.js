const result = document.querySelector(".result");
const humanScore = document.querySelector("#my-score");
const machineScore = document.querySelector("#machine-score");

humanScoreNumber = 0
machineScoreNumber = 0

const playHuman = (humanChoice) => {
  playtTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playtTheGame = (human, machine) => {
  console.log("Humano: " + human + ", Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
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

