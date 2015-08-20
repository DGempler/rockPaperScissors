// Create a browser-based, single-player version of Rock Paper Scissors.
// The "computer" should pick a random move each turn.
// Keep a score counter somewhere on the page. Don't worry about styling until you're done with the logic.

$(document).ready(function() {
  var $container = $('#container');
  var $gameInfo = $('#gameInfo');
  var $myConsole = $('#console');
  var $userTally = $('#user');
  var $compTally = $('#comp');
  var $button = $('button');
  var userChoice;
  var computerChoice;
  var userWins;
  var tie;
  var pending = false;

  $('#container').on("click", function(event) {
    if (pending) {
      return;
    }
    if (event.target.id === "container" || event.target.id === "") {
      return;
    }
    pending = true;
    $gameInfo.text('');
    userChoice = event.target.id;
    getOutcome(userChoice);
    $myConsole.text("You chose " + userChoice + ". ");
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
      $gameInfo.text("The result is a tie!");
      tie = false;
    }
    else if (userWins) {
      $('#gameInfo').text("You win this round!");
      var text1 = $userTally.text();
      $userTally.text(parseInt(text1) + 1);
      userWins = false;
    }
    else {
      $gameInfo.text("The computer wins this round!");
      var text2 = $compTally.text();
      $compTally.text(parseInt(text2) + 1);
    }
  }

  function logCompResult() {
    setTimeout(function () {
      var text3 = $myConsole.text();
      $myConsole.text(text3 + "The computer chose");
      var timer = setInterval(addDot, 500);
      setTimeout(function () {
         clearInterval(timer);
         var text4 = $myConsole.text();
        $myConsole.text(text4 + " " + computerChoice + "!");
      }, 2000);
    }, 1000);
  }

  function addDot() {
    var text5 = $myConsole.text();
    $myConsole.text(text5 + ".");
  }

  function reset() {
    $myConsole.text("Choose rock, paper, or scissors!");
    $gameInfo.text("Nodoby has won a round yet.");
    $userTally.text('0');
    $compTally.text('0');
  }

  $('button').on("click", function() {
      reset();
    });

});