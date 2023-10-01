function getComputerChoice(){
    choices = ['Rock','Paper','Scissor']
    choice = Math.floor(Math.random()*3)
    return choices[choice]
}

function play(playerSelection, computerSelection){
    switch (computerSelection){
        case playerSelection:
            return("It's a tie!");
            break;
        case 'rock':
            if (playerSelection=='paper'){
                return(`You won${playerSelection} beats ${computerSelection}`);
            } else{
                return(`You lose ${computerSelection} beats ${playerSelection}`);
            }
            break;
        case 'paper':
            if (playerSelection=='scissor'){
                return(`You won${playerSelection} beats ${computerSelection}`);
            } else{
                return(`You lose ${computerSelection} beats ${playerSelection}`);
            }
            break;
        case 'scissor':
            if (playerSelection=='rock'){
                return(`You won${playerSelection} beats ${computerSelection}`);
            } else{
                return(`You lose ${computerSelection} beats ${playerSelection}`);
            }
            break;
    }
}

function game(){
    let score = 0;
    for (let i=0; i<5; i++){
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        let result = play(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('won')){
            score+=1;
        }
        console.log(score);
    }
    
}

// game();