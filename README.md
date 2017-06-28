# _Hangperson_

#### _A politically more correct version of the classic Hangman, word guessing game, 6/28/2017_

#### By _**Nathan E. M. Mayer & Michael Brooks**_

## Description

_The word to guess is represented by a row of dashes, representing each letter of the word. In most variants, proper nouns, such as names, places, and brands, are not allowed. Slang words, sometimes referred to as informal or shortened words, are also not allowed. If the guessing player suggests a letter which occurs in the word, the other player writes it in all its correct positions. If the suggested letter or number does not occur in the word, the other player draws one element of a hanged man stick figure as a tally mark.

The player guessing the word may, at any time, attempt to guess the whole word. If the word is correct, the game is over and the guesser wins. Otherwise, the other player may choose to penalize the guesser by adding an element to the diagram. On the other hand, if the other player makes enough incorrect guesses to allow his opponent to complete the diagram, the game is also over, this time with the guesser losing. However, the guesser can also win by guessing all the letters or numbers that appears in the word, thereby completing the word, before the diagram is completed. (wikipedia : https://en.wikipedia.org/wiki/Hangman_(game) as accessed 6/26/2017 at 11:26am_
## Specifications

_* assume a targetWord of "donkey"_

| Rank  | Behavior          | I   |          O       |
|-------|-------------------|-----|------------------|
|1|Accept user input        |"o"  |var guess = "o"   |
|2|Accept only 1 character  |"on" | "false"          |
|3|Accept only letters      | "4" | "false"          |
|4|Guess to lower case      | "A" | "a"              |
|-|----End Code Section     |     |                  |
|5|Check is guess in targetWord| "d" | "true"|
|6| if in word push to wordBlanks| "d" | [d,?,?,?,?,?]|
|7|If guess not in WORD add to WRONG GUESS |"z"| ["z"]|
|8|Display WORD BLANKS (HTML) |*[d,?,?,?,?,?]| d  ?  ?  ?  ? ?|
|9|Display WRONG GUESS (HTML) |["z"]  | Wrong guess: z|
|10|Game over occurs at 6 incorrect guesses | wrongGuess.length === 6 | GAME OVER|
|11| Game Won occurs at revealed word | | |
|12| Increase available vocabulary |

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_Please email {support} if you run into any issues or have questions, ideas or concerns.  We encourage you to contact us with suggestions or contributions to the code._

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*This software licensed under the MIT license.*

Copyright (c) 2017 **_Nathan E. M. Mayer & Michael Brooks_**
