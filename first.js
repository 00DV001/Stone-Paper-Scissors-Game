//console.log("Hello JS Learner");
//Rock Paper Scissors

let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreDisplay = document.querySelector("#user-score");
const aiScoreDisplay = document.querySelector("#ai-score");

const genAiChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "It was a Draw. Play again";
};

const showWinner = (userWin, userChoice, aiChoice) => {
    if(userWin){
        console.log("You Won");
        msg.innerText = `You Won, ${userChoice} beats ${aiChoice}`;
        userScore++;

        userScoreDisplay.innerText = userScore;
    }
        
    else{
        console.log("AI wins");
        msg.innerText = `A.I. Won, ${aiChoice} beats ${userChoice}`;
        aiScore++;

        aiScoreDisplay.innerText = aiScore;
    }
};

const play_game = (userChoice) => {
    console.log("User Choice =", userChoice);
    const aiChoice = genAiChoice();
    console.log("AI Choice =", aiChoice);

    if(userChoice === aiChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = aiChoice === "paper" ? false : true;
        }
        else if(userChoice === "Scissors"){
            userWin = aiChoice === "Rock" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = aiChoice === "Scissors" ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(choice.getAttribute("id"), "was clicked");
        play_game(userChoice);
        console.log("\n\n")
    });
});








