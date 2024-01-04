let compScore=0;
let yourScore=0;

let choices = document.querySelectorAll(".choice");
let userScore=document.getElementById("yourScore");
let computerScore=document.getElementById("compScore");
let msg=document.getElementById("msg");

const compChoice=()=>{
    let choiceOfComp=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return choiceOfComp[idx];
}

const showWinner=(userWin)=>{
    if(userWin){
        yourScore++;
        msg.innerText="You Win"
        console.log("you win");
        userScore.innerText=yourScore;
    }
    else{
        compScore++;
        computerScore.innerText=compScore;
        msg.innerText="Computer Win";
    }
}

const playGame=(userChoice)=>{
    
    let computerChoice=compChoice();
    console.log("The computer Choice is ",computerChoice);

    if(userChoice===computerChoice){
        console.log("The Game was a Draw");
        msg.innerText="Game Draw";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute("id");
        console.log("the User Choice is ",userChoice);
        playGame(userChoice);
    })

})