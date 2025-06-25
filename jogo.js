
function getComputerChoice () {
    let valor = Math.floor(Math.random()*3);
    switch(valor){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice() {
    let tool = prompt("Chose your weapon: rock/paper/scissors?");
    return tool.toLowerCase();
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Tie");
        return 0;
    } else if (((humanChoice === 'rock') && (computerChoice === 'scissors')) || ((humanChoice === 'scissors') && (computerChoice === 'paper')) || ((humanChoice === 'paper') && (computerChoice === 'rock'))){
        console.log("Human WIN!");
        return 1;
    } else {
        console.log("Computer Win.");
        return 2;
    }
}


//console.log(getComputerChoice());
//console.log(getHumanChoice());

let play = 0;
