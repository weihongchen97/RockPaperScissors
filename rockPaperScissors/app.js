//Initial Single Game Code
function computerMove() {
    const computerPoss = ['rock', 'paper', 'scissors'];
    const randomC = Math.floor(Math.random() * computerPoss.length);
    return computerPoss[randomC];
}

function throwHand(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert("It's a draw!!!")
    } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        alert("You won!!!");
        console.log("player won a game!");
        return "player"
    } else {
        console.log("you lost!")
        return "computer"
    } 
}


const computerSelection = computerMove();
//now structure the game to be 5 games
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Throw your hand! Rock, paper, or scissors?").toLowerCase();
        while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
            playerSelection = prompt("PLEASE TYPE IN YOUR CHOICE! ROCK, PAPER, OR SCISSORS?").toLowerCase();
        } 
        
        const scoreCard = throwHand(playerSelection, computerMove())
        if (scoreCard === 'player') {
            playerScore++;
            console.log(`You have won a point! ${playerSelection} beats ${computerSelection}`)
        } else if (scoreCard === "computer"){
            computerScore++;
            console.log(`Your oponent has gained a point! ${computerSelection} beats ${playerSelection}!`)
        } else {
            console.log("tie round!")
        }
    }
    console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
}
playGame();