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
    show[1].innerHTML = 'Choose Between <br> Rock | Paper | Scissors'
    human.textContent = `YOUR SCORE| 0 —  `
    computer.textContent = `0 |COMPUTER SCORE`    
  
    //Score 
    
    let humanScore = 0
    let computerScore = 0
    
    btn1.addEventListener('click',() => {
        Timer()
            humanChoice = btn3.value;
            computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
                humanScore++
                show[1].style.color = 'green';
                show[1].textContent = `You won: ${humanChoice} beats ${computerChoice}` 
                human.textContent = `YOUR SCORE| ${humanScore} —  `
                
            }
             else if (humanChoice === computerChoice) {
                show[1].textContent =  `It's a Tie`
            }
            else {
                computerScore++
                show[1].style.color = 'red';
                show[1].textContent =  `Computer won: ${computerChoice} beats ${humanChoice}`
                computer.textContent = `${computerScore} |COMPUTER SCORE`    
            }
            btn1.disabled = true
            btn2.disabled = true
            btn3.disabled = true
        }
    )
    btn2.addEventListener('click',() => {
        Timer()
            humanChoice = btn3.value;
            computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
                humanScore++
                show[1].style.color = 'green';
                show[1].textContent = `You won: ${humanChoice} beats ${computerChoice}` 
                human.textContent = `YOUR SCORE| ${humanScore} —  `
                
            }
             else if (humanChoice === computerChoice) {
                show[1].textContent =  `It's a Tie`
            }
            else {
                computerScore++
                show[1].style.color = 'red';
                show[1].textContent =  `Computer won: ${computerChoice} beats ${humanChoice}`
                computer.textContent = `${computerScore} |COMPUTER SCORE`    
            }
            btn1.disabled = true
            btn2.disabled = true
            btn3.disabled = true
        }
    )
    btn3.addEventListener('click',() => {
        Timer()
            humanChoice = btn3.value;
            computerChoice = getComputerChoice();
            if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
                humanScore++
                show[1].style.color = 'green';
                show[1].textContent = `You won: ${humanChoice} beats ${computerChoice}` 
                human.textContent = `YOUR SCORE| ${humanScore} —  `
                
            }
             else if (humanChoice === computerChoice) {
                show[1].textContent =  `It's a Tie`
            }
            else {
                computerScore++
                show[1].style.color = 'red';
                show[1].textContent =  `Computer won: ${computerChoice} beats ${humanChoice}`
                computer.textContent = `${computerScore} |COMPUTER SCORE`    
            }
            btn1.disabled = true
            btn2.disabled = true
            btn3.disabled = true
        }
    )
 
function Timer() {
    setTimeout(() => {
        btn1.disabled = false
        btn2.disabled = false
        btn3.disabled = false
        show[1].style.color = 'black';
        show[1].innerHTML = 'Choose Between <br> Rock | Paper | Scissors'
        }, 800
)
}