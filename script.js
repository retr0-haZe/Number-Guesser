let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target); {
    if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
        return true;
    } else {
        return false;
    }   
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++; 
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
} 

const checkGuess = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9');
    } else {
        compareGuesses(humanGuess, computerGuess, target); // Remove the semicolon here
    }
}

const checkwinner = (humanGuess, computerGuess, target) => {
    if (humanGuess === target || computerGuess === target) {
        return true;
    } else {
        return false;
    }
}


