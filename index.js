let scissors = "scissors"
let rock = "rock"
let paper = "paper"

computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber === 1) {
                computerSelection = rock;
                
            }
            else if (randomNumber === 2) {
                computerSelection = scissors;
                
            }
            else {
                computerSelection = paper;
                
            }
            console.log(computerSelection);
            //return computerSelection;
            
}

computerPlay()