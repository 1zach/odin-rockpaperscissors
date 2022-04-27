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


     