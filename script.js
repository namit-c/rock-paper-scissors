//Global variables
let scorePlayer = 0;
let scoreComp = 0;



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
                return "It's Win! Scissors beats Paper";
            }
            else{
                return "It's a Draw! You both picked Scissors";
            }
            break;
        default:
            return "Please enter either rock, paper, or scissors"
    }

    
}

//Connecting the buttons to the playerSelection
const selectButtons = document.querySelector(".buttons");
selectButtons.style.cssText = "text-align: center";
selectButtons.addEventListener("click", function(e){
    let selection = e.target.textContent;
    alert(playRound(selection, computerPlay()));
});

//Score and results
const results = document.querySelector(".results");
let playerScore = document.createElement("h3");
playerScore.classList.add("player-score");
playerScore.textContent = "Score: " + scorePlayer;
playerScore.style.cssText = "float: left";

let compScore = document.createElement("h3");
compScore.classList.add("computer-score");
compScore.textContent = "Computer Score: " + scoreComp;
compScore.style.cssText = "float: right";

results.append(playerScore, compScore);






/* //Function that plays the five rounds of the game
function game(){
    //Initializing the scores of the player and computer
    let scorePlayer = 0;
    let scoreComp = 0;

    //const for the number of rounds
    const totalRounds = 5;

    //loop for five rounds
    for(let round = 0; round < totalRounds; round++){
        
        let winner = playRound(computerPlay());

        //checking for who won (if "win" is in the message, then player wins and vice-versa)
        if(winner.includes("Win")){
            scorePlayer++;
        }
        else if(winner.includes("Lose")){
            scoreComp++;
        }

        console.log(winner);
    }

    //checking who won the game
    if(scorePlayer > scoreComp){
        console.log("You Win! You won " + scorePlayer + " rounds and the computer only won " + scoreComp);
    }
    else if (scorePlayer < scoreComp){
        console.log("You Lose! The computer won " + scoreComp + " rounds and you only won " + scorePlayer);
    }
    else{
        console.log("It's a Draw! Both won " + scorePlayer + " rounds!")
    }
}
 */