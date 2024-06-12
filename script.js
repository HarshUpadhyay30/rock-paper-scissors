

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    return computerChoice[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
    if (humanChoice!=="rock" && humanChoice!=="scissor" && humanChoice!=="paper"){
        alert("Invalid Input");
        getHumanChoice();
    }
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice,computerChoice) {
        if(humanChoice === computerChoice){
            alert("It's a tie! You both Chose " + humanChoice);
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            alert("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;    
        }
        else {
            alert("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(i);
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        alert("Score: You - " + humanScore + ", Computer - " + computerScore);
    }

    if (humanScore > computerScore) {
        alert("Congratulations! You won the game!");
    } 
    else if (humanScore < computerScore) {
        alert("You lost the game. Better luck next time!");
    } 
    else {
        alert("It's a draw!");
    }
}

playGame();