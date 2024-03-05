let rock = document.querySelector("#images1");
let paper = document.querySelector("#images2");
let scissor = document.querySelector("#images3");
let schoice = document.querySelector("#schoice");
let uchoice = document.querySelector("#uchoice");
let result = document.querySelector("#result");

let uset;
let comSet;
var userWins = 0;
var computerWins = 0;

let clickRock = false;
let clickPaper = false;
let clickScissor = false;

rock.onclick = () => {
    clickRock = true;
    clickPaper = false;
    clickScissor = false;
    playGame();
}
paper.onclick = () => {
    clickRock = false;
    clickPaper = true;
    clickScissor = false;
    playGame();
}
scissor.onclick = () => {
    clickRock = false;
    clickPaper = false;
    clickScissor = true;
    playGame();
}

function playGame() {
    if (clickRock) {
        uset = 'ROCK';
    } else if (clickPaper) {
        uset = 'PAPER';
    } else if (clickScissor) {
        uset = 'SCISSOR';
    } else {
        uset = 'Not Clicked';
    }


uchoice.innerText = 'You Choosed :- ' + uset;

let goption = ['ROCK', 'PAPER', 'SCISSORS'];
let goptionIndex = Math.floor(Math.random() * goption.length);
comSet = goption[goptionIndex];
schoice.innerText = 'System Choosed :- ' + comSet;

winner(comSet, uset);
updateWinCounts();

}

function winner(comSet, uset){
    if(comSet!=uset){
        if( (uset === 'ROCK' && comSet === 'SCISSORS') ||
        (uset === 'PAPER' && comSet === 'ROCK') ||
        (uset === 'SCISSOR' && comSet === 'PAPER')){
            result.innerText = "Yahh !! You win";
            userWins++;
        }
        else{
                result.innerText = "Ooops !! You Lose "
                computerWins++;
        }
    }
    else{
        result.innerText = " Hey !!  It's is a TIE";
    }
}
function updateWinCounts() {
    document.getElementById("user-wins").innerHTML = `Your Wins: ${userWins}`;
    document.getElementById("computer-wins").innerHTML = `Computer Wins: ${computerWins}`;
}

console.log(comSet);
console.log(uset);
