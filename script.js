
let computerChoice;
let myChoice;
let rock = "rock"
let scissors = "scissors"
let paper = "paper"
let winCounter = 0
let lossCounter = 0




function myRock() {
    myChoice = rock;
    return(rock);
}

function myScissors() {
    myChoice = scissors;
    return(scissors);
}

function myPaper() {
    myChoice = paper;
    return(paper);
}





let compPick = function compChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = rock;
    }
    else if (randomNumber === 2) {
        computerChoice = paper;
    }
    else {
        computerChoice = scissors;
    }

    console.log(computerChoice);
}

    
