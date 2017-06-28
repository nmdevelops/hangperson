//working section
var guess;// = prompt("What's your guess?");
var validate;
var targetWord = "donkey";
var wordBlanks = [];
var wordBlanksString;
var  wordBlanksStringClean;
var wrongGuess = [];
var notIt = [];
var iteration = targetWord.length;
var alphabetPublic = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



//Business Logic (Back-end)
var gameSetup = (function() {
  for (var n = 0; n < iteration; n++) {
    wordBlanks.push("_");
  }
  iteration -= targetWord.length;

  $(".userInputs").show();
  $(".beginGame").hide();
  $("#gameOver").hide();
  wordBlanks.fill("_");
  wordBlanksString = wordBlanks.join();
  wordBlanksStringClean = wordBlanksString.replace(/,/g, '  ');
  $("#wordBlanks").text(wordBlanksStringClean);
  wrongGuess = [];
  $("#wrongGuess").empty();

});


var formReset = (function() {
  notIt = [];
    $("#validationError").empty();
    // $(".userInputs form").empty();
});

var isGameOver = (function() {
  if (wrongGuess.length === 6) {
    $("#gameOver").show();
    $(".userInputs").hide();
    $("#targetWord").text(targetWord);
    $(".beginGame").show();
  }
});

var isGameWon = (function() {
  if (targetWord === wordBlanks) {
    $("#gameWon").show();
  }
})

var hangperson = (function() {
  if (validate.length === 1) {
    if (alphabetPublic.indexOf(validate.toLowerCase()) >= 0) {
      guess = validate.toLowerCase();
    } else {
      $("#validationError").text ("This input is a number, Please input a single letter guess.");
    }
  } else {
    $("#validationError").text ("Enter only one letter!");
  }




  for (var i = 0; i < targetWord.length; i++) {
    if (targetWord.charAt(i) === guess) {
      wordBlanks.splice(i,1,guess);
    } else {
      notIt.push(guess);
    }
  }
  if (notIt.length === 6) {
    wrongGuess.push(guess);
    $("#wrongGuess").text("Wrong guess: " + wrongGuess);
  }
  wordBlanksString = wordBlanks.join();
  wordBlanksStringClean = wordBlanksString.replace(/,/g, '  ');

  $("#wordBlanks").text(wordBlanksStringClean);

  document.getElementById("formToClear").reset();
});



//User Logic (Front-end)
$(document).ready(function() {
  $("button#gameSetup.btn").click(function() {
    gameSetup();
  });

  $(".userInputs form").submit(function(event) {
    event.preventDefault();
        // document.getElementById("input#guess").reset("");

    validate = $("input#guess").val();
    formReset();
    hangperson();
    isGameOver();
    isGameWon();
  });
});
// $("input#guess").val()
