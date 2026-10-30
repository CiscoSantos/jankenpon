
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

function playRound() {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();


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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let vencedor;
    do{
        vencedor = playRound();
        if(vencedor === 1 ) humanScore++;
        if(vencedor === 2 ) computerScore++;
        console.log("Placar:\nHumano:"+humanScore+"\nComputador:"+computerScore);
    } while((humanScore < 5)&&(computerScore < 5));
    if (humanScore === 5) alert("Humano venceu a partida!!");
    if (computerScore === 5) alert("Computador venceu a partida!!");
}

const botao = document.querySelector("#jogar");
//const botao = document.getElementById("jogar");
botao.onclick = () => playGame();
//botao.onclick = () => console.log("TEste");


const botao2 = document.querySelector("#teste");
//botao2.onClick = () => alert("TEste");
botao2.addEventListener("click", () => {
    alert("Hello World 2!");
});



//console.log(getComputerChoice());
//console.log(getHumanChoice());

let play = 0;
