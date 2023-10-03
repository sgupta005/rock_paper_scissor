const rock_btn =document.querySelector('button.rock');
const paper_btn =document.querySelector('button.paper');
const scissor_btn =document.querySelector('button.scissors');
const result_div = document.querySelector('.result');
const result_heading = document.createElement('h2');
result_div.appendChild(result_heading);

rock_btn.addEventListener('click', playerChoice);
paper_btn.addEventListener('click', playerChoice);
scissor_btn.addEventListener('click', playerChoice);
function playerChoice(event){
    if (event.target.classList.contains('rock')){
        playRound('rock');
    }else if (event.target.classList.contains('paper')){
        playRound('paper');
    }else if (event.target.classList.contains('scissors')){
        playRound('scissors');
    }
}


function getComputerChoice(){
    choices = ['rock','paper','scissors']
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
                return(`You won ${playerSelection} beats ${computerSelection}`);
            } else{
                return(`You lose ${computerSelection} beats ${playerSelection}`);
            }
            break;
        case 'paper':
            if (playerSelection=='scissors'){
                return(`You won ${playerSelection} beats ${computerSelection}`);
            } else{
                return(`You lose ${computerSelection} beats ${playerSelection}`);
            }
            break;
        case 'scissors':
            if (playerSelection=='rock'){
                return(`You won ${playerSelection} beats ${computerSelection}`);
            } else{
                return(`You lose ${computerSelection} beats ${playerSelection}`);
            }
            break;
    }
}


let computer_score = 0;
let player_score = 0;
function playRound(player_choice){
    const playerSelection = player_choice;
    const computerSelection = getComputerChoice().toLowerCase();
    let result = play(playerSelection, computerSelection);
        
    if (result.includes('won')){
        player_score+=1;
    }else if (result.includes('lose')){
        computer_score+=1;
    }
    result_heading.textContent = `${result}!!!
    Player Score: ${player_score}
    Computer Score: ${computer_score}`;

    if (player_score == 5){
        result_heading.textContent = `YOU WIN COMPUTER LOSES! 
        Final score: 
        Computer: ${computer_score} Player: ${player_score}`;
        computer_score = 0;
        player_score = 0;
    }else if(computer_score == 5){
        result_heading.textContent = `YOU LOSE COMPUTER WINS! 
        Final score: 
        Computer: ${computer_score} Player: ${player_score}`;
        computer_score = 0;
        player_score = 0;
    }
}


