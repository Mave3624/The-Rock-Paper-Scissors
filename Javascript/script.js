setTimeout(() => {console.log("Game starting in 3 Seconds")},3000)

// Computer Choice Function
let getComputerChoice = function(computer, random) {
random = Math.floor(Math.random()*100);
(random >= 0 && random <= 30) ? computer = "Rock":
(random > 30 && random <= 70) ? computer = "Scissors":
(random > 70 && random <= 100) ? computer = "Paper":
computer = "Error";
return computer
}
console.log(getComputerChoice())

//Human Choice Function
let getHumanChoice = function(input) {
    input = prompt("Make a choice; Rock, Scissors or Paper")

    //Retures a Random Value if 'input' = "" or null
    if (input === null) {input = getComputerChoice()}
    else if (input === "") {input = getComputerChoice()};

    //returns "input" with it's first letter capitalized.
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return input
}
console.log(getHumanChoice())

//Score Board
let humanScore = 0;
let computerScore = 0;

//Single Round
function playRound(humanChoice, computerChoice) {
humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
 console.log(`You won ${humanChoice} beats ${computerChoice}`)
 humanScore++
} else if (humanChoice == computerChoice) {
    console.log(`Try Again, Your choice "${humanChoice}" = Computer choice "${computerChoice}"`)
}
else {
    console.log(`Computer won ${computerChoice} beats ${humanChoice}`)
    computerScore++
}
return {computerScore, humanScore}
}
console.log(playRound());

//Play Round

function playGame() {
 for (i = 1; i <= 5; i++ ) {
    playRound()
}
if (computerScore === humanScore) {
    console.log("Try again it's a Tie")
} else if (computerScore > humanScore) {console.log("Computer won")} else {console.log("Congrat you won")}
 return {computerScore, humanScore,};
}
console.log(playGame())