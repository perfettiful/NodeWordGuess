/**Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
 * 
 */


 const Letter = require('./Letter');
  //Start Word() constr

  function Word(word) {

this.letters = word.split("").map(function(char){
    return new Letter(char);
})

  }; //end Word() contr
  
  
  Word.prototype.getSolution=function(){
      return this.letters.map(function(letter){

        return letter.getSolution()
      }).join();

  }

Word.prototype.toString=function(){
    return this.letters.join();

}

//guess
Word.prototype.guess =function(char){
   var foundLetter = false;
   this.letters.forEach(function(letter) {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });

  // Print the word guessed so far--because we set the method for toString,
  //  JavaScript will automatically concatenate this even if we don't call toString
  console.log("\n" + this + "\n");
  // return whether we found a letter
  return foundLetter;
}
//gu
// Returns true if all letters in the word have been guessed
Word.prototype.guessedCorrectly = function() {
    // The `every` method returns true if the callback function returns true for every element in the array
    return this.letters.every(function(letter) {
      return letter.visible;
    });
  };