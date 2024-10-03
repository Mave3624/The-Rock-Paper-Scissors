
    const btn = document.querySelector('.btn-Container')
    const reset = document.querySelector('.reset')
    const btn1 = document.querySelector('#btn1')
    const btn2 = document.querySelector('#btn2')
    const btn3 = document.querySelector('#btn3')
    const show = document.querySelectorAll('.show')
    const btn4 = document.createElement('button')
    btn4.textContent = "Restart"

    const Score = document.createElement('span')
    Score.setAttribute("id", "sp2")
    show[0].insertBefore(Score, sp3)
    Score.textContent= " - — - "

    show[1].innerHTML = 'Choose Between <br> Rock | Paper | Scissors'

let getComputerChoice = function() {
    let computer
    const random = Math.floor(Math.random()*10)+1;
    (random >= 0 && random <= 3) ? computer = "Rock":
    (random > 3 && random <= 7) ? computer = "Paper":
    computer = "Scissors";
    return computer
}
 
    let humanScore = 0
    let computerScore = 0

function GameLogic() {
    let computerChoice = getComputerChoice()
    if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++
        show[1].textContent = `${humanChoice}  beats  ${computerChoice}` 
        Score.textContent = ` ${humanScore} — ${computerScore} ` 
        show[1].style.color = 'green'
    }
    else if (humanChoice === computerChoice) {
        show[1].textContent =  `It's a Tie`
    }
    else {
        computerScore++
        show[1].textContent =  `${computerChoice}  beats  ${humanChoice}`
        Score.textContent = ` ${humanScore} — ${computerScore} ` 
        show[1].style.color = 'red'
    }
}

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

function Checker() {
    show[2].textContent = ''
    GameLogic()
    if (humanScore < 5 && computerScore < 5) {
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
    }
    if (computerScore === 5 || humanScore === 5) {
        show[2].textContent = 'Game Over'
        show[1].textContent = ''
        let result
        if (humanScore > computerScore) {
            result = `Congratulations, You Won`
        }
        if (computerScore > humanScore) {
            result = `You Lost, Try Again`
        }
        show[1].textContent = result
        reset.append(btn4)
        btn1.remove()
        btn2.remove()
        btn3.remove()
    }
    else Timer()

    btn4.addEventListener('click', () => {
        humanScore = 0
        computerScore = 0
        show[2].textContent = ''
        Score.textContent= " - — - "
        show[1].style.color = 'black';
        show[1].innerHTML = 'Choose Between <br> Rock | Paper | Scissors'
        btn.append(btn1, btn2, btn3)
        btn4.remove()
    })
}

    btn1.addEventListener('click',() => {
        humanChoice = btn1.value;
            Checker()
    }
    )
    btn2.addEventListener('click',() => {
        humanChoice = btn2.value;
            Checker()
        }
    )
    btn3.addEventListener('click',() => {
        humanChoice = btn3.value;
            Checker()
        }
    )
 