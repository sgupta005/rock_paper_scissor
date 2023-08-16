function getComputerChoice(){
    choices = ['Rock','Paper','Scissor']
    choice = Math.floor(Math.random()*3)
    return choices[choice]
}

function play(){
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    console.log(computerSelection);
    console.log(playerSelection);
    switch (computerSelection){
        case playerSelection:
            console.log("It's a tie!");
            break;
        case 'rock':
            if (playerSelection=='paper'){
                console.log('You won!');
            } else{
                console.log('You Lost!');
            } break;
        case 'paper':
            if (playerSelection=='scissor'){
                console.log('You won!');
            } else{
                console.log('You Lost!');
            } break;
        case 'scissor':
            if (playerSelection=='rock'){
                console.log('You won!');
            } else{
                console.log('You Lost!');
            } break;
    }
}
console.log("hello");
play();