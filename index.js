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

let getPlayerSelection = () => {
    // Get a player input
    let inputChoose = prompt('Do you want rock paper or scissors? Type it')

    // Check if input is valid
    if(!(/paper/i).test(inputChoose) && !(/rock/i).test(inputChoose) && !(/scissors/i).test(inputChoose)){
        alert('Invalid! Certify you typed it correct')
        // Recursion return to get input again
        getPlayerSelection()
    }
    else{
        return inputChoose
    }

    //

}

let singleRound = (playerSelect, machineSelect) => {

    //Check if the gamer tied
    if(playerSelect.toLowerCase() === machineSelect.toLowerCase() ){
        return alert('Tied, Anybody wins')
    }

    //Check if the player won
    if(playerSelect.toLowerCase() === 'rock' && machineSelect.toLowerCase() === 'scissors' || playerSelect.toLowerCase() === 'paper' && machineSelect.toLowerCase() === 'rock' ||
    playerSelect.toLowerCase() === 'scissors' && machineSelect.toLowerCase() === 'paper'){
        countPlayer++
        return alert(`You Won! ${playerSelect} beats ${machineSelect} ${countPlayer}x${countMachine}`) 
    }
    else{
        countMachine++
        return alert(`You loose, ${machineSelect}beats ${playerSelect} ${countPlayer}x${countMachine}`)

    }

}




let game = () =>{
    //Play the a round
    singleRound(getPlayerSelection(),getComputerChoice())

    //Check if there is a winner
    if(countPlayer > 2){
        return alert(`You win, you beat the machine ${countPlayer}x${countMachine}`)
    }
    else if(countMachine > 2){
        return alert(`You loose, The machine won ${countPlayer}x${countMachine}`)
    }
    else{ //repeat the process
        game()

    }
    



}