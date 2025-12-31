
const choices = ["rock","paper","scissors"]
const playerDisplay = document.getElementById('playerdisplay')
const computerDisplay = document.getElementById('computerdisplay')
const resultDisplay = document.getElementById('result')

function playgame(playerchoice){
      computerchoice = choices[Math.floor(Math.random() * 3)];
      
      let result = ""
      if(playerchoice === computerchoice){
        result = "YOU HAVE A TIE!"
        resultDisplay.style.color = "beige"
      }
      else{
        switch(playerchoice){
        case "rock":
            result = (computerchoice === "paper") ? "YOU LOSE!"  : "YOU WIN!"
            break;
        case "paper":
            result = (computerchoice === "scissors") ? "YOU LOSE!" : "YOU WIN!"
            break;
        case "scissors":
            result = (computerchoice === "rock") ? "YOU LOSE!" : "YOU WIN!"
            break;
      }
      }
      switch(result){
        case "YOU WIN!":
            resultDisplay.style.color = "rgba(13, 255, 0, 1)";
            break;
        case "YOU LOSE!":
            resultDisplay.style.color = "rgba(255, 0, 0, 1)";
            break;
      }
      
      
     
      playerDisplay.textContent = `Player choice: ${playerchoice}`
      computerDisplay.textContent = `Computer choice: ${computerchoice}`
      resultDisplay.textContent = result;
}



