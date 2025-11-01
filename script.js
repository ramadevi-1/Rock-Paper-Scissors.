const choices =["Rock","Paper","Scissors"];
const player = document.getElementById("player")
const computer = document.getElementById("comp")
const result1 = document.getElementById("res")
const playerscore = document.getElementById("playerscore")
const computerscore = document.getElementById("computerscore")
let playerScore = 0;
let computerScore = 0;
function game(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)]
    let res ="";
    
    if(playerchoice === computerchoice){
        res = "IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "Rock":
                res = (computerchoice === "Paper") ? "YOU LOSE!" : "YOU WIN!";
                break;
            case "Paper":
                res = (computerchoice === "Scissors") ? "YOU LOSE!" : "YOU WIN!";
                break;
            case "Scissors":
                res = (computerchoice === "Rock") ? "YOU LOSE!" : "YOU WIN!";
                break;
        }
    }
    player.textContent = `Player:${playerchoice}`;
    computer.textContent = `Computer:${computerchoice}`;
    result1.textContent = res;
    result1.classList.remove("orange","green","red")

    switch(res){
        case "IT'S A TIE!":
            result1.classList.add("orange");
            break;
        case "YOU WIN!":
            result1.classList.add("green");
            playerScore++;
            playerscore.textContent = playerScore;
            break;
        case "YOU LOSE!":
            result1.classList.add("red");
            computerScore++;
            computerscore.textContent = computerScore;
            break;
    }
}