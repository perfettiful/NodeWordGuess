/**
 * The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses
 */

 //Global npm packages needed:

 var inquirer = require("inquirer");
 var Word = require("./Word");

var words = require("./words")

//Start game function 

function game(){
 var self = this;
this.play = function(){
    this.guessesLeft=10;
    this.nextWord();
},
//nextword function
this.nextWord=function(){
    var randWord =  words[Math.floor(Math.random()*words.lengt)];
    console.log(randWord)
    this.currentword= new Word(randWord);
}
};//end game

//makeGuess
this.makeGuess = function() {
    this.askForLetter().then(function() {
      // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
      if (self.guessesLeft < 1) {
        console.log(
          "No guesses left! Word was: \"" + self.currentWord.getSolution() + "\"\n"
        );
        self.askToPlayAgain();

        // If the user guessed all letters of the current word corrently, reset guessesLeft to 10 and get the next word
      }
      else if (self.currentWord.guessedCorrectly()) {
        console.log("You got it right! Next word!");
        self.guessesLeft = 10;
        self.nextWord();

        // Otherwise prompt the user to guess the next letter
      }
      else {
        self.makeGuess();
      }
    });
  };
//playagain
this.askToPlayAgain = () => {
// Returns true if all letters in the word have been guessed
inquirer
.prompt([
  {
    type: "confirm",
    name: "choice",
    message: "Play Again?"
  }
])
.then(function(val) {
  // If the user says yes to another game, play again, otherwise quit the game
  if (val.choice) {
    self.play();
  }
  else {
    self.quit();
  }
});

}


//ask for letter
this.askForLetter = function() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          validate: function(val) {
            // The users guess must be a number or letter
            return /[a-z1-9]/gi.test(val);
          }
        }
      ])
      .then(function(val) {
        // If the user's guess is in the current word, log that they chose correctly
        var didGuessCorrectly = self.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(chalk.green("\nCORRECT!!!\n"));

          // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
        }
        else {
          self.guessesLeft--;
          console.log(chalk.red("\nINCORRECT!!!\n"));
          console.log(self.guessesLeft + " guesses remaining!!!\n");
        }
      });
  };
//quit
this.quit = function() {
    console.log("\nGoodbye!");
    process.exit(0);
  }

//  inquirer.prompt([

//     {
//         type: "input",
//         name: "userGuess",
//         message: "Guess a letter!"
//     }
//  ]).then(function(userInput){


// //Start game function 

// function game(){
//  var self = this;
// this.play=function(){
//     this.guessesLeft=10;
//     this.nextWord();
// }
// //nextword function
// };//end game


//  inquirer.prompt([

//     {
//         type: "input",
//         name: "userGuess",
//         message: "Guess a letter!"
//     }
//  ]).then(function(userInput){

// //if(userInput.userGuess === ){}


//  });//end prompt()

module.exports = game;