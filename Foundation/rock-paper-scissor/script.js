console.log("Hello World")


var humanScore = 0;
var computerScore = 0;

function findChoice(compChoice)
{
    switch (compChoice) {
        case 0:
            return "rock";            
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;    
        default:
            break;
    }
}

function getComputerChoice()
{
    var compChoice = Math.random() * 3;
    compChoice = Math.floor(compChoice);
    console.log(compChoice)
    var compOut = findChoice(compChoice)
    return compOut
}

function getHumanChoice()
{
    var humanChoice = prompt("Enter your choice(Rock , Paper , Scissor) : ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}

function restart()
{
    var opt = prompt("Do you want to restart (Y/N) : ")
    opt = opt.toLowerCase();
    if(opt === "y")
    {
        playRound();
    }
    else
    {
        close();
    }
}

function displayScore()
{
    console.log("Computer Scored : " + computerScore);
    console.log("Player Scored : " + humanScore)
}

function playRound()
{
    var user = getHumanChoice();
    var bot = getComputerChoice();
    if (user === bot)
    {
        console.log("Tie")
        restart();
    }
    else if(user === "rock" & bot === "paper")
    {
        computerScore +=1;
        console.log("Computer Wins")
        displayScore()
        restart();
    }
    else if (user === "rock" & bot === "scissor")
    {
        humanScore+=1;
        console.log("Player wins")
        displayScore();
        restart();
    }
    else if (user === "paper" & bot === "rock")
    {
        humanScore+=1;
        console.log("Player wins");
        displayScore();
        restart();
    }
    else if(user === "paper" & bot==="scissor")
    {
        computerScore+1;
        console.log("Computer wins");
        displayScore();
        restart();
    }
    else if(user === "scissor" & bot === "rock")
    {
        computerScore+=1;
        console.log("Computer wins");
        displayScore();
        restart();
    }
    else if(user === "scissor" & bot === "paper")
    {
        humanScore+=1;
        console.log("Player wins");
        displayScore();
        restart();
    }
}

playRound();