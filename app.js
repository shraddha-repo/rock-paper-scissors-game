let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


let userScore = 0;
let compScore = 0;

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    let ranndomIdx = Math.floor(Math.random() * 3);
    return options[ranndomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "#1B1F3B"
    //  console.log("game was draw")
}

const showWinner = (userWin, userChoice, compChoice) => {
      if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
      } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
      }
}

const playGame = (userChoice) => {
      console.log("userChoice =", userChoice);
      // generate computer choice
     const compChoice = generateCompChoice();
     console.log("compChoice =", compChoice);

     if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // compchoice paper, scissor 
            userWin =  compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // compchoice rock, scissor 
            userWin =  compChoice === "scissors" ? false : true;
        } else {
            // compchoice rock, paper 
            userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice,"click")
        playGame(userChoice);
    })
})
