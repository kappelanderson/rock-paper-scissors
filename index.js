let countPlayer = 0
let countMachine = 0
let getComputerChoice = () => {

    // Get a random number 1 2 or 3
    let randomNumber = Math.floor(Math.random() * 3) + 1

    //Depends on the number select one role
    if(randomNumber === 1){
        return 'Rock'
    }
    else if(randomNumber === 2){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}

let singleRound = (playerSelect, machineSelect) => {
    // CHANGE DOM Images
    let imgs = document.querySelectorAll("img")
    imgs.forEach(img => img.style.display = 'block')
    document.querySelector("#playerside").src = `images/${playerSelect.toLowerCase()}.png`
    document.querySelector("#machineside").src = `images/${machineSelect.toLowerCase()}.png`
    

    

    //Check if the round tied
    if(playerSelect.toLowerCase() === machineSelect.toLowerCase() ){
        document.querySelector(".msg").innerHTML = `Tied, Anybody wins ${machineSelect} ${countPlayer}x${countMachine}`
        return
    }

    //Check if the player won the round
    if(playerSelect.toLowerCase() === 'rock' && machineSelect.toLowerCase() === 'scissors' || playerSelect.toLowerCase() === 'paper' && machineSelect.toLowerCase() === 'rock' ||
    playerSelect.toLowerCase() === 'scissors' && machineSelect.toLowerCase() === 'paper'){
        countPlayer++
        if(checkWinner()){
            document.querySelector(".msg").innerHTML = `You won the game, you beat the machine ${countPlayer}x${countMachine}`
            return
        }
        else{
            document.querySelector(".msg").innerHTML = `You Won the round! ${playerSelect} beats ${machineSelect} ${countPlayer}x${countMachine}`
            return
}
    }
    else{
        

        countMachine++
        if (checkWinner()) { 
            document.querySelector(".msg").innerHTML = `You loose, The machine won the game ${countPlayer}x${countMachine}`
            return
            
        }
        else{
        document.querySelector(".msg").innerHTML = `You loose the round, ${machineSelect} beats ${playerSelect} ${countPlayer}x${countMachine}`
        return}

    }

}




// When the selectors btns were clicked 
const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => button.addEventListener('click', () => singleRound(button.classList[1], getComputerChoice())))

// when reset btn is clicked
const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {countPlayer = 0; countMachine = 0; 
document.querySelector('.msg').innerHTML = "The game was reseted " + countPlayer + 'x' + countMachine;

buttons.forEach(button => button.style.display = 'inline-block')
reset.style.display = 'none'
})
    // Check if there is a winner in the whole game

    let checkWinner = () =>{
    if(countPlayer > 2){
        buttons.forEach(button => button.style.display = 'none')
        reset.style.display = 'block'
        return true
    }
    else if(countMachine > 2){
        buttons.forEach(button => button.style.display = 'none')
        reset.style.display = 'block'
        return true

    }
    else{
    return false}}