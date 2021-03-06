//Global variables
let scorePlayer = 0;
let scoreComp = 0;
let numTies = 0;
let gameOver = false;


//Display for score and results
let playerScore = document.querySelector("#player-score");

let compScore = document.querySelector("#computer-score");

let ties = document.querySelector("#ties");

let roundResult = document.querySelector(".round-results");


//Connecting the buttons to the playerSelection
const selectButtons = document.querySelector(".button-group");
selectButtons.addEventListener("click", function(e){
    
    //only play round if the game isn't over
    if(!gameOver){
        let selection = e.target.id;
        let winner = playRound(selection, computerPlay());

        //checking for who won (if "win" is in the message, then player wins and vice-versa)
        if(winner.includes("Win")){
            scorePlayer++;
        }
        else if(winner.includes("Lose")){
            scoreComp++;
        }
        else if (winner.includes("Draw")){
            numTies++;
        }

        //Updating the scores
        playerScore.textContent = scorePlayer.toString();
        compScore.textContent = scoreComp.toString();
        ties.textContent = numTies.toString();
        
        roundResult.textContent = winner;
    }

    if (gameOver == false && ((scorePlayer >= 5) || (scoreComp >= 5))){
        //checking who won the game
        if(scorePlayer > scoreComp){
            roundResult.textContent = "Player Wins! You won " + scorePlayer + " rounds and the computer won " + scoreComp;
        }
        else if (scorePlayer < scoreComp){
            roundResult.textContent = "Computer Wins! The computer won " + scoreComp + " rounds and you won " + scorePlayer;
        }
        else{
            roundResult.textContent =  "\nIt's a Draw! Both won " + scorePlayer + " rounds!";
        }
        gameOver = true;
    }
    else{
        return;
    }
});

//Play Again button
const reset = document.querySelector("#reset");
reset.addEventListener("click", function(e){
    scorePlayer = 0;
    scoreComp = 0;
    numTies = 0;
    gameOver = false;

    playerScore.textContent = scorePlayer.toString();
    compScore.textContent = scoreComp.toString();
    ties.textContent = numTies.toString();

    roundResult.textContent = "To Play: Choose Rock, Paper, or Scissors";

});

//computer choosing rock, paper, or scissors
function computerPlay(){
    let pick = Math.random();

    //selecting rock, paper, or scissors using random; not including 1/3 as 0 is included so rock has the range (0-0.329..)
    if(pick < 1/3){
        return "rock"
    }
    else if (pick < 2/3){
        return "paper"
    }
    else{
        return "scissors"
    }
}

//function that plays a round of the game
function playRound(playerSelection, computerSelection){
    // to make the playerselection case insensitive
    let playerSelect = playerSelection.toLowerCase();

    // determining the winner
    switch(playerSelect){
        case "rock":
            if(computerSelection == "rock"){
                return "It's a Draw! You both picked Rock";
            }
            else if(computerSelection == "paper"){
                return "You Lose! Paper beats Rock";
            }
            else{
                return "You Win! Rock beats Scissors";
            }
            break;
        
        case "paper":
            if(computerSelection == "rock"){
                return "You Win! Paper beats Rock";
            }
            else if(computerSelection == "paper"){
                return "It's a Draw! You both picked Paper";
            }
            else{
                return "You Lose! Scissors beats Paper";
            }
            break;

        case "scissors":
            if(computerSelection == "rock"){
                return "You Lose! Rock beats Scissors";
            }
            else if(computerSelection == "paper"){
                return "You Win! Scissors beats Paper";
            }
            else{
                return "It's a Draw! You both picked Scissors";
            }
            break;
        default:
            return "Please enter either rock, paper, or scissors"
    }

    
}

