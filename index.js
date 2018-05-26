/**
 * The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses
 */

 //Global npm packages needed:

 var inquirer = require("inquirer");

//Global vars to track during game

var guessesLeft = 9;


 inquirer.prompt([

    {
        type: "input",
        name: "userGuess",
        message: "Guess a letter!"
    }
 ]).then(function(userInput){

//if(userInput.userGuess === ){}


 });//end prompt()