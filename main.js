function getComputerChoice(){
    choices = ['Rock','Paper','Scissor']
    choice = Math.floor(Math.random()*3)
    return choices[choice]
}

function play(playerSelection, computerSelection){
    switch (computerSelection){
        case playerSelection:
            return("It's a tie!");
        case 'rock':
            if (playerSelection=='paper'){
                return('You won!');
            } else{
                return('You Lost!');
            }
        case 'paper':
            if (playerSelection=='scissor'){
                return('You won!');
            } else{
                return('You Lost!');
            }
        case 'scissor':
            if (playerSelection=='rock'){
                return('You won!');
            } else{
                return('You Lost!');
            }
    }
}

function game(){
    let score = 0;
    for (let i=0; i<5; i++){
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        let result = play(playerSelection, computerSelection);
        console.log(result);
        if (result == 'You won!'){
            score+=1;
        }
        console.log(score);
    }
    
}

game();