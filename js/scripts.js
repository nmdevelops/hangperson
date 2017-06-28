//working section
var guess;// = prompt("What's your guess?");
var validate;
var targetWord = "donkey";
var wordBlanks = [];
var wrongGuess = [];
var notIt = [];
var iteration = targetWord.length;

//Business Logic (Back-end)
var formReset = (function() {
  notIt = [];
});

var isGameOver = (function() {
  if (wrongGuess.length === 5) {
    $(".gameOver").show();
    $(".userInputs").hide();
    $("#targetWord").text(targetWord);
  }
});

var hangperson = (function() {
  if (validate.length === 1) {
    if (alphabetPublic.indexOf(validate.toLowerCase()) >= 0) {
      guess = validate.toLowerCase();
    } else {
      console.log("this is a number");
    }
  } else {
    console.log("enter only 1 character");
  }

  for (var n = 0; n < iteration; n++) {
    wordBlanks.push("-");
  }

  iteration -= targetWord.length;

  for (var i = 0; i < targetWord.length; i++) {
    if (targetWord.charAt(i) === guess) {
      wordBlanks.splice(i,1,guess);
    } else {
      notIt.push(guess);
    }
  }
  if (notIt.length === 6) {
    wrongGuess.push(guess);
  }
  $("#wordBlanks").text(wordBlanks);
  $("#wrongGuess").text(wrongGuess);
});

var alphabetPublic = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//User Logic (Front-end)
$(document).ready(function() {
  $(".userInputs form").submit(function(event) {
    event.preventDefault();
    validate = $("input#guess").val();
    formReset();
    isGameOver();
    hangperson();
  });
});
// $("input#guess").val()
