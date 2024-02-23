import { startConfetti ,removeConfetti,stopConfetti } from "./confetti.js";
// player's element
const playerScoreEl=document.getElementById('playerScore');
const playerChoiceEl=document.getElementById('playerChoice');

const playerRock=document.getElementById('playerRock');
const playerPaper=document.getElementById('playerPaper');
const playerScissor=document.getElementById('playerScissors');
const playerLizard=document.getElementById('playerLizard');
const playerSpock=document.getElementById('playerSpock');

// computer's element

const computerScoreEl=document.getElementById('computerScore');
const computerChoiceEl=document.getElementById('computerChoice');

const computerRock=document.getElementById('computerRock');
const computerPaper=document.getElementById('computerPaper');
const computerScissor=document.getElementById('computerScissors');
const computerLizard=document.getElementById('computerLizard');
const computerSpock=document.getElementById('computerSpock');

// other elements
const resultText=document.getElementById('resultText');
const allGameIcons=document.querySelectorAll('.far');

const choices = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
};

let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

// check result increase scores ,update resulttext
function updateScore(playerChoice){
  console.log(playerChoice, computerChoice);
  if(playerChoice === computerChoice){
    resultText.textContent = "it's a tie";
  }
  else{
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1){
      // startConfetti();
      resultText.textContent='You Won';
      playerScore++;
      playerScoreEl.textContent=playerScore;
    }
    else{
     
      resultText.textContent='You Lost!';
      computerScore++;
      computerScoreEl.textContent=computerScore;
    }
  }

}
// function computerRancomChoice
function computerRandomChoice(){
  let computerNumber = Math.random();
  if(computerNumber<=0.2){
    computerChoice='Rock';
  }
  else if(computerNumber<=0.4){
    computerChoice='Paper';
  }
  else if(computerNumber<=0.6){
    computerChoice='Scissor';
  } 
  else if(computerNumber<=0.8){
    computerChoice='Spock';
  }
  else{
    computerChoice='Lizard';
  }
}

  // add selected styling and computer choice
  function displayComputerChoice(){
        switch(computerChoice){
      case 'Rock':
        computerRock.classList.add('selected');
        computerChoiceEl.textContent = '---Rock';
        break;

      case 'Paper':
        computerPaper.classList.add('selected');
        computerChoiceEl.textContent = '---Paper';
        break;

      case 'Scissor':
        computerScissor.classList.add('selected');
        computerChoiceEl.textContent = '---Scissors';
        break;

      case 'Spock':
        computerSpock.classList.add('selected');
        computerChoiceEl.textContent = '---spock';
        break;

      case 'Lizard':
        computerLizard.classList.add('selected');
        computerChoiceEl.textContent = '---Lizard';
        break;

        default:
        break;   
      }
  }

//calls function to process turns
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function resetSelected(){
  allGameIcons.forEach((icons) => {
icons.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

// passing player selection value and styling icons
function select(playerChoice){
  checkResult(playerChoice);
  // add selected  styling and playerChoice
  switch(playerChoice){
    case 'Rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '---Rock';
      break;

    case 'Paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '---Paper';
      break;

    case 'Scissor':
      playerScissor.classList.add('selected');
      playerChoiceEl.textContent = '---Scissors';
      break;

    case 'Spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '---spock';
      break;

    case 'Lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '---Lizard';
      break;

      default:
      break;
  }
}
window.select=select;
// Reset Score and PlayerChoice/computerChoice
function resetAll(){
 resultText.textContent = "";
 playerScoreEl.textContent = '0';
 computerScoreEl.textContent = '0';
 playerChoiceEl.textContent = "---Choice";
 computerChoiceEl.textContent = "---Choice";
 playerScore=0;
 computerScore=0;
 resetSelected();
}
window.resetAll=resetAll;
resetAll();

