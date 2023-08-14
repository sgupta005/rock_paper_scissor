function getComputerChoice(){
    choices = ['Rock','Paper','Scissor']
    choice = Math.floor(Math.random()*3)
    console.log(choice)
    return choices[choice]
}

console.log(getComputerChoice())