let rock = "rock"
let scissors = "scissors"
let paper = "paper"
let playerScore = 0
let computerScore = 0
let playerPick = 0
let computerPick = 0
let tie = 0
let buttons = document.querySelectorAll(".button")
const gameResult = document.getElementById("gameResult")
const rockBtn = document.getElementById("rockBtn")
const scissorBtn = document.getElementById("scissorBtn")
const paperBtn = document.getElementById("paperBtn")
let tieDisp = "Tie"
const youWin = "You Win"
const compWins = "You Lose"
const gameOnBtn = document.getElementById("gameOn")
let gameOn = false

rockBtn.addEventListener("click", () => game("rock", computerChoice()))
scissorBtn.addEventListener("click", () => game("scissors", computerChoice()))
paperBtn.addEventListener("click", () => game("paper", computerChoice()))

gameOnBtn.addEventListener("click", function() {
    gameOn = true;
    gameOnBtn.classList.add("displayHidden")
    console.log(gameOn)
})




function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1 && gameOn == true) {
                computerSelections = rock;
            }
    else if (randomNumber === 2 && gameOn == true) {
                computerSelections = scissors;
            }
    else if (randomNumber === 3 && gameOn ==true) {
                computerSelections = paper;
            }
            console.log(computerSelections)
            computerPicks = document.getElementById("computerPicks")
            computerPicks.innerHTML += `<li>
                                                ${computerSelections}
                                          </li>`
            return computerSelections;
}
computerSelection = computerChoice();


    rockBtn.addEventListener("click", () => game("rock", computerChoice()))
    scissorBtn.addEventListener("click", () => game("scissors", computerChoice()))
    paperBtn.addEventListener("click", () => game("paper", computerChoice()))





    
function game(x, computerSelection) {
    playerScorex = document.getElementById("playerScore")
    computerScorex = document.getElementById("computerScore")
    tiesX = document.getElementById("ties")
    playerPicks = document.getElementById("playerPicks")
    playerPicks.innerHTML += `<li>
                                                ${x}
                               </li>`
    console.log(x, computerSelection)
    
    
    
    if (x == computerSelection) {
        gameResult.textContent = tieDisp
        tie++
        tiesX.textContent = tie
        return (tieDisp);}
    else if (x == "rock" && computerSelection == "scissors") {
        gameResult.textContent = youWin
        playerScore++
        playerWins(playerScore)
        return (youWin);}
    else if (x == "paper" && computerSelection == "rock") {
        gameResult.textContent = youWin
        playerScore++
        playerWins(playerScore)
        return (youWin);}
    else if (x == "scissors" && computerSelection == "paper") {
        gameResult.textContent = youWin
        playerScore++
        playerWins(playerScore)
        return (youWin);}
    else {
        gameResult.textContent = compWins
        computerScore++
        computerScorex.textContent = computerScore
        if (computerScore === 3) {
            finalResult = document.getElementById("finalResult")
            finalResult.classList.remove("displayHidden")
            finalResult.textContent = "You Lose CLick to play Again"
            finalResult.addEventListener("click", () => gameReset())
            gameOn = false
            console.log("You LOse")
        }
        return (compWins);}
}

function playerWins(playerScore) {
    playerScorex.textContent = playerScore
        if (playerScore === 3) {
            gameOn = false
            finalResult = document.getElementById("finalResult")
            finalResult.textContent = "You Win Click to Play Again"
            finalResult.classList.remove("displayHidden")
            finalResult.addEventListener("click", () => gameReset())
            console.log("Game Over")
        }
}

function gameReset() {
    gameOn = false
    playerScore = 0
    computerScore = 0
    tie = 0
    playerPicks.textContent = ""
    computerPicks.textContent = ""
    playerScorex.textContent = "0"
    computerScorex.textContent = "0"
    gameResult.textContent = ""
    tiesX.textContent = "0"
    finalResult.classList.add("displayHidden")
    gameOnBtn.classList.remove("displayHidden")
}


        /*function computerChoice() {
            let randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber === 1) {
                        computerSelections = rock;
                    }
            else if (randomNumber === 2) {
                        computerSelections = scissors;
                    }
            else {
                        computerSelections = paper;
                    }
                    console.log(computerSelections)
                    computerPicks = document.getElementById("computerPicks")
                    computerPicks.textContent += " " + computerSelections
                    return computerSelections;
        }



*/






/*function playRound(playerPickx, computerPick) {  
    if (playerPickx == computerPick) {
        gameResult.textContent = tieDisp
        tie++
        return (tieDisp);}
    else if (playerPickx == "rock" && computerPick == "scissors") {
        gameResult.textContent = youWin
        playerScore++
        return (youWin);}
    else if (playerPickx == "paper" && computerPick == "rock") {
        gameResult.textContent = youWin
        playerScore++
        return (youWin);}
    else if (playerPickx == "scissors" && computerPick == "paper") {
        gameResult.textContent = youWin
        playerScore++
        return (youWin);}
    else {
        gameResult.textContent = compWins
        computerScore++
        return (compWins);}
    }



/*

game()
function playerChoice(playerPickx) {

    computerPick = computerChoice()

    playRound(playerPickx, computerPick)
    
    console.log(playerPickx)
    console.log(computerPick)
    console.log(playerScore)
    for (i = 0; i < 1; i++) {
        if (playerScore < 3 && computerScore < 3) {
        //playerChoice(playerPickx)
        //let roundResult = playRound(playerPickx, computerPick);
        //console.log(roundResult + playerScore + computerScore);
        //playRound(playerPickx, computerPick)
        playRoundResult = playRound()
            console.log(playRoundResult)
        playerPickDisp = document.getElementById("playerPicks")
        playerPickDisp.innerHTML += `<li>
                                            ${playerPickx}
                                        </li>`
            
            
        computerPicksDisp = document.getElementById("computerPicks")
        computerPicksDisp.innerHTML += `<li>
                                            ${computerPick}
                                        </li>`
            
        playerScoreDisp = document.getElementById("playerScore")
        playerScoreDisp.textContent = playerScore
        computerScoreDisp = document.getElementById("computerScore")
        computerScoreDisp.textContent = computerScore
        tieScoreDisp = document.getElementById("ties")
        tieScoreDisp.textContent = tie      
        }
        else if (playerScore == 3) {
            playerPickDisp = document.getElementById("playerPicks")
            playerPickDisp.innerHTML += `<li>
                                            ${playerPickx}
                                        </li>`

            computerPicksDisp = document.getElementById("computerPicks")
            computerPicksDisp.innerHTML += `<li>
                                              ${computerPick}
                                            </li>`
            playerScoreDisp = document.getElementById("playerScore")
            playerScoreDisp.textContent = playerScore
            finalScore = document.getElementById("finalResult")
            finalScore.textContent = "You Win the Whole Game"
            
         }
        else if (computerScore == 3) {
            playerPickDisp = document.getElementById("playerPicks")
            playerPickDisp.innerHTML += `<li>
                                            ${playerPickx}
                                        </li>`

            computerPicksDisp = document.getElementById("computerPicks")
            computerPicksDisp.innerHTML += `<li>
                                              ${computerPick}
                                            </li>`
            computerScoreDisp = document.getElementById("computerScore")
            computerScoreDisp.textContent = computerScore
            finalScore = document.getElementById("finalResult")
            finalScore.textContent = "Computer Wins, reload to try again"
            
        }
    }
}
    playerPick = playerChoice()



//function game() {
     
        
    //
    

    function computerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
                    computerSelections = rock;
                }
        else if (randomNumber === 2) {
                    computerSelections = scissors;
                }
        else {
                    computerSelections = paper;
                }
                
                return computerSelections;
    }
    

//function startGame() {
    
    



/*function playerChoice() {
    let input = prompt("Rock, Paper, Scissors");
    input = input.toLowerCase();

    return input
}*/

 
//}













/*let picks = document.getElementById("picks")
        picks +=       `<li>
                        ${playerPick}
                        ${computerPick}
                       </li>`
    picks.innerHTML = picks
    console.log(picks)*/


//alert(playRound())
//console.log(playRound())


/*let scissors = "scissors"
let rock = "rock"
let paper = "paper"
let playerWin = "You Win"
let computerWin = "You Lose"

let playerScore = 0
let computerScore = 0
let playerSelection = playerChoice()
let computerSelection = computerChoice()

function playerChoice() {
    let input = prompt("Rock, Paper, Scissors");
    input = input.toLowerCase();
    return input
 }

//function playRound() {
    //playerSelection = playerChoice()
    //computerSelection = computerChoice()
    //let winner = checkWinner(playerSelection, computerSelection)
    //return (winner);
    //checkWinner()

//}

        
function computerChoice() {
            
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
                computerSelections = rock;
            }
    else if (randomNumber === 2) {
                computerSelections = scissors;
            }
    else {
                computerSelections = paper;
            }
            
            return computerSelections;
            
        }
        

function checkWinner(playerSelection, computerSelection) {
    
            if (playerSelection == computerSelection) {
                return ("Tie");}
            else if (playerSelection == rock && computerSelection == scissors) {
                playerScore += playerScore
                return (playerWin);}
            else if (playerSelection == scissors && computerSelection == paper) {
                playerScore += playerScore
                return (playerWin);}
            else if (playerSelection == paper && computerSelection == rock) {
                playerScore += playerScore
                return (playerWin);}
            else {
                computerScore += computerScore
                return (computerWin);}
                    }
                console.log(checkWinner())
        
//playRound()
       


playerChoice()
computerChoice()
checkWinner()
console.log(computerSelection)
console.log(playerSelection)
//console.log(playRound())

   
                
                
                
                
            
            
 
            
 
                

            
/*
let playerChoice = prompt("Rock,Scissor, or Paper")
console.log(playerChoice)

function rps(playerChoice, computerPlay) {
    console.log(playerChoice, computerPick);
    if (playerChoice === computerPick) {
        return ("Tie");}
        else if (playerChoice == rock && computerPick == scissors) {
            return ("You Win");}
            else if (playerChoice == scissors && computerPick == paper) {
                return ("You Win");}
                else if (playerChoice == paper && computerPick == rock) {
                    return ("You Win");}
                else {
                    return ("You Lose");}

                    
                }
        
                
            
        
    
*/
            