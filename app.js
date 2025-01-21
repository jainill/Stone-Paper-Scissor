
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


let cchoice = () =>{

    let choices = ["rock", "paper", "scissors"];
    let Cchoice = choices[Math.floor(Math.random() * 3)];
    console.log(Cchoice);
    return Cchoice;
}



let playgame = (Uchoice) => {
    let computerChoice = cchoice();
    
    if (Uchoice === computerChoice) {
        console.log("It's a tie");
    } else if ((Uchoice === "rock" && computerChoice === "scissors") || (Uchoice === "paper" && computerChoice === "rock") || (Uchoice === "scissors" && computerChoice === "paper")) {
        console.log("You win");
    } else {
        console.log("You lose");
    }
}

rock.addEventListener("click", () => {
    playgame("rock");
    });

paper.addEventListener("click", () => {
    playgame("paper");
    });

scissors.addEventListener("click", () => {
    playgame("scissors");
    });

