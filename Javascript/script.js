// Computer Choice Function
let getComputerChoice = function() {
    let computer
    const random = Math.floor(Math.random()*10)+1;
    (random >= 0 && random <= 3) ? computer = "Rock":
    (random > 3 && random <= 7) ? computer = "Paper":
    computer = "Scissors";
    return computer
    }

    const btn = document.querySelector('.btn-Container')
    const btn1 = document.querySelector('#btn1')
    const btn2 = document.querySelector('#btn2')
    const btn3 = document.querySelector('#btn3')
    const show = document.querySelectorAll('.show')

    const human = document.createElement('span')
    human.setAttribute('class', 'score1')
    show[0].appendChild(human)
    
    const computer = document.createElement('span')
    computer.setAttribute('class', 'score2')
    show[0].appendChild(computer)

    human.textContent = `YOUR SCORE| 0 —  `
    computer.textContent = `0 |COMPUTER SCORE`    
  
    //Score 
    
    let humanScore = 0
    let computerScore = 0
    
    btn1.addEventListener('click',() => {
        humanChoice = btn1.value;
        computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
                show[1].textContent = `You won: ${humanChoice} beats ${computerChoice}` 
                humanScore++
                human.textContent = `YOUR SCORE| ${humanScore} —  `
            }
             else if (humanChoice === computerChoice) {
                show[1].textContent =  `It's a Tie`
            }
            else {
                show[1].textContent =  `Computer won: ${computerChoice} beats ${humanChoice}`
                computerScore++
                computer.textContent = `${computerScore} |COMPUTER SCORE`    
            }
        }
    )
    btn2.addEventListener('click',() => {
            humanChoice = btn2.value;
            computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
                show[1].textContent = `You won: ${humanChoice} beats ${computerChoice}` 
                humanScore++
                human.textContent = `YOUR SCORE| ${humanScore} —  `
            }
             else if (humanChoice === computerChoice) {
                show[1].textContent =  `It's a Tie`
            }
            else {
                show[1].textContent =  `Computer won: ${computerChoice} beats ${humanChoice}`
                computerScore++
                computer.textContent = `${computerScore} |COMPUTER SCORE`    
            }
        }
    )
    btn3.addEventListener('click',() => {
            humanChoice = btn3.value;
            computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
                show[1].textContent = `You won: ${humanChoice} beats ${computerChoice}` 
                humanScore++
                human.textContent = `YOUR SCORE| ${humanScore} —  `
            }
             else if (humanChoice === computerChoice) {
                show[1].textContent =  `It's a Tie`
            }
            else {
                show[1].textContent =  `Computer won: ${computerChoice} beats ${humanChoice}`
                computerScore++
                computer.textContent = `${computerScore} |COMPUTER SCORE`    
            }
        }     
    )