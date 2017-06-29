//Business Logic (Back-end)
var guess;// = prompt("What's your guess?");
var validate;
var randomIndex;
var targetWord;
var wordBlanks = [];
var wordBlanksString;
var wordBlanksStringWin;
var wordBlanksStringClean;
var wrongGuess = [];
var notIt = [];
var iteration;

var alphabetPublic = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wordBank = ["ache","adjust","affordable","alarm","alone","apologize","appetite","applause","artistic","atmosphere","attach","bashful","basket","batch","behave","belong","bend","blink","blush","bolt","bolts","borrow","bundle","cabin","caterpillar","caution","cave","celebrate","centaur","champion","chat","cheat","chimney","compass","complain","conductor","construct","costume","cozy","cranky","crash","creak","croak","crowded","cue","curved","daily","dainty","dart","decorate","delighted","denied","deserve","divide","dodge","drenched","drowsy","enormous","equal","exclaim","exhausted","expensive","fancy","fasten","filthy","flat","flee","fog","footprint","forest","freezing","gather","giant","glad","gleaming","glum","grab","grateful","grin","grip","groan","hatch","heap","hide","hobby","honest","howl","illustrator","injury","jealous","knob","lively","loosen","mask","misty","modern","mountain","narrow","obey","pain","passenger","pattern","pest","polish","pretend","promise","rapid","remove","repeat","rescue","restart","return","ripe","rise","roar","rough","rusty","scold","scratch","seed","selfish","serious","shell","shovel (verb)","shriek","sibling","silent","simple","slippery","sly","sneaky","sob","spiral","splendid","sprinkle","squirm","startle","steep","stormy","striped","surround","switch","terrified","thick","thunder","ticket","timid","transportation","travel","trust","upset","weed","whimper","whirl","wicked","wicked","yank"];

/*80's Typography by David Parker*/
// if ( navigator.platform.indexOf('Win') != -1 ) {
//   window.document.getElementById("wrapper").setAttribute("class", "windows");
// } else if ( navigator.platform.indexOf('Mac') != -1 ) {
//   window.document.getElementById("wrapper").setAttribute("class", "mac");
// }
/*80's Typography by David Parker*/

var randomize = (function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
});

var wordGenerator = (function() {
  randomize(0,wordBank.length);
  targetWord = wordBank [randomIndex];
  iteration = targetWord.length;
  console.log(targetWord);
});

var gameSetup = (function() {
  wordBlanks = [];
  for (var n = 0; n < iteration; n++) {
    wordBlanks.push("_");
  }
  iteration -= targetWord.length;
  $(".userInputs").show();
  $(".beginGame").hide();
  $("#gameOver").hide();
  $("#gameWon").hide();
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
  if (targetWord === wordBlanksStringWin) {
    $("#gameWon").show();
    $(".userInputs").hide();
    $(".beginGame").show();
  }
})

var hangperson = (function() {
  if (validate.length === 1) { //test is redundant and needs to be refactored
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
  if (notIt.length === targetWord.length) {
    wrongGuess.push(guess);
    $("#wrongGuess").text("Wrong guess: " + wrongGuess);
  }
  wordBlanksString = wordBlanks.join();
  wordBlanksStringWin = wordBlanksString.replace(/,/g, '');
  wordBlanksStringClean = wordBlanksString.replace(/,/g, '  ');
  $("#wordBlanks").text(wordBlanksStringClean);
  document.getElementById("formToClear").reset();
});



//User Logic (Front-end)
$(document).ready(function() {
  $("button#gameSetup.btn").click(function() {
    wordGenerator();
    gameSetup();
  });
  $(".userInputs form").submit(function(event) {
    event.preventDefault();
    validate = $("input#guess").val();
    formReset();
    hangperson();
    isGameOver();
    isGameWon();
  });
});
