function computerMove() {
    const computerPoss = ['rock', 'paper', 'scissors'];
    const randomC = Math.floor(Math.random() * computerPoss.length);
    return computerPoss[randomC];
}

let playerScore = 0;
let computerScore = 0;
const scoreboard = document.querySelector("#scoreboard");
const choices = document.querySelector("#choices")

function throwHand(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        choices.innerText = (`You threw ${playerSelection} and they threw ${computerSelection}`);
        scoreboard.innerText = (`It's a draw! Current score - Player: ${playerScore}, Computer: ${computerScore}`);
    } else if 
    ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper'))
    {
        playerScore++;
        choices.innerText = (`You threw ${playerSelection} and they threw ${computerSelection}`);
        scoreboard.innerText = (`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
        checkScorecard();
    } else {
        computerScore++;
        choices.innerText = (`You threw ${playerSelection} and they threw ${computerSelection}`);
        scoreboard.innerText = (`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
        checkScorecard();
    } 
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}
function checkScorecard() {
    if(playerScore === 5) {
        choices.innerText = ("Choose a move to play again!");
        scoreboard.innerText = (`Congratulations! You won!!! Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
        resetGame();
    } else if(computerScore === 5) {
        choices.innerText = ("Choose a move to play again!");
        scoreboard.innerText = (`DEFEAT!!! Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
        resetGame();
    }
}

function playGame(playerSelection) {
    const computerSelection = computerMove();
    throwHand(playerSelection, computerSelection);
}
  

const throwRock = document.querySelector("#rock");
const throwPaper = document.querySelector("#paper");
const throwScissors = document.querySelector("#scissors");

throwRock.addEventListener("click", () => playGame("rock"));
throwPaper.addEventListener("click", () => playGame("paper"));
throwScissors.addEventListener("click", () => playGame("scissors"));

