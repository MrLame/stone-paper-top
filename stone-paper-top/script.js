let pScore = 0;
let cScore = 0;

function computerPlay (){
    let options = ['rock', 'paper', 'scissors']
    const randomElement = options[Math.floor(Math.random() * options.length)];
    return randomElement;
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == computerSelection)
    {
        console.log("TIE");
    }

    else if(playerSelection == 'rock' && computerSelection == 'paper')
    {
        console.log("You lose");
        cScore = cScore + 1;
    }

    else if(playerSelection == 'rock' && computerSelection == 'scissors')
    {
        console.log("You win");
        pScore = pScore + 1;
    }

    else if(playerSelection == 'paper' && computerSelection == 'rock')
    {
        console.log("You win");
        pScore = pScore + 1;

    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors')
    {
        console.log("You lose");
        cScore = cScore + 1;
    }
    
    else if(playerSelection == 'scissors' && computerSelection == 'paper')
    {
        console.log("You win");
        pScore = pScore + 1;

    }

    else if(playerSelection == 'scissors' && computerSelection == 'rock')
    {
        console.log("You lose");
        cScore = cScore + 1;
    }

    console.log("Player Score = " + pScore);
    console.log("Computer Score = " + cScore);
}

function game(){
    for(let i = 0; i <= 5; i++){
        let playerSelection = prompt("Enter your selection");
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection,computerPlay());
        console.log("Computer Score : "+cScore);
        console.log("Your Score : "+pScore);

        if(pScore > cScore){
            console.log("You won!");
        }

        else{
            console.log("You Lose!");
        }
    }
}

game();