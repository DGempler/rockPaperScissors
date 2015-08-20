// Create a browser-based, single-player version of Rock Paper Scissors.
// The "computer" should pick a random move each turn.
// Keep a score counter somewhere on the page. Don't worry about styling until you're done with the logic.

(function() {

  var header = document.querySelector('#header');
  var container = document.getElementById('container');
  var gameInfo = document.querySelector('#gameInfo');
  var score = document.getElementById('score');
  var console = document.getElementById('console');
  var userTally = document.querySelector('#user');
  var compTally = document.querySelector('#comp');
  var button = document.querySelector('button');
  var userChoice;
  var computerChoice;
  var userWins;
  var tie;
  var pending = false;

  container.addEventListener("click", function(event) {
    if (pending) {
      return;
    }
    if (event.target.id === "container") {
      return;
    }
    pending = true;
    gameInfo.innerHTML = '';
    userChoice = event.target.id;
    getOutcome(userChoice);
    console.innerHTML = "You chose " + userChoice + ". ";
    logCompResult();
    setTimeout(function() {
      showResult();
      pending = false;
    }, 4000);
  });

  function getOutcome(userChoice) {
    var randomNum = Math.random();

    if (randomNum >= 0.66) {
      computerChoice = "rock";
      if (userChoice === "scissors") {
        userWins = false;
      }
      else if (userChoice === "paper") {
        userWins = true;
      }
      else {
        tie = true;
      }
    }
    else if (randomNum >= 0.33) {
      computerChoice = "paper";
      if (userChoice === "rock") {
        userWins = false;
      }
      else if (userChoice === "scissors") {
        userWins = true;
      }
      else {
        tie = true;
      }
    }
    else {
      computerChoice = "scissors";
      if (userChoice === "paper") {
        userWins = false;
      }
      else if (userChoice === "rock") {
        userWins = true;
      }
      else {
        tie = true;
      }
    }
  }

  function showResult() {
    if (tie === true) {
      gameInfo.innerHTML = "The result is a tie!";
      tie = false;
    }
    else if (userWins) {
      gameInfo.innerHTML = "You win this round!";
      userTally.innerHTML++;
      userWins = false;
    }
    else {
      gameInfo.innerHTML = "The computer wins this round!";
      compTally.innerHTML++;
    }
  }

  function logCompResult() {
    setTimeout(function () {
      console.innerHTML += "The computer chose";
      var timer = setInterval(addDot, 500);
      setTimeout(function () {
         clearInterval(timer);
        console.innerHTML += " " + computerChoice + "!";
      }, 2000);
    }, 1000);
  }

  function addDot() {
    console.innerHTML += ".";
  }

  function reset() {
    console.innerHTML = "Choose rock, paper, or scissors!";
    gameInfo.innerHTML = "Nodoby has won a round yet.";
    userTally.innerHTML = 0;
    compTally.innerHTML = 0;
  }

  button.addEventListener("click", function() {
    reset();
  });

})();