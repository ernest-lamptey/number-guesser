let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

// returns 'true' if user guess is closer to target than computer
// guess and 'false' for the reverse situation
const compareGuesses = (userGuess, computerGuess, target) => {
  if (Math.abs(target - userGuess) <= Math.abs(target - computerGuess)) {
    return true;
  } else if (Math.abs(target - userGuess) > Math.abs(target - computerGuess)) {
    return false;
  } 
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
}

