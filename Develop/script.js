// Assignment code here
// Present series of promts for password criteria when the button to generate password is clicked
// When prompted for length of password, choose at least 8 characters and no more than 128 characters
// Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected
// password should be generated that matches the selected criteria and displayed in an alert or written to the page


// Character arrays

var special = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~' ];
var lowercase = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var uppercase = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var numeric = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Variables for different combinations of characters 

var allCharacters = special + lowercase + uppercase + numeric;
var lu = lowercase + uppercase;
var uln = lowercase + uppercase + numeric;
var un = uppercase + numeric;
var ln = lowercase + numeric;
var sl = special + lowercase;
var su = special + uppercase;
var sn = special + numeric;
var slu = special + lowercase + uppercase;
var sun = special + uppercase +numeric;
var sln = special + lowercase + numeric;

// Blank string for new password 



// Function to select password criteria

function selectPassword(){

let lengthChoice = prompt ("Enter the number of characters you would like your password to be (Must be between 8-128)");
if (isNaN(lengthChoice) || lengthChoice <8 || lengthChoice > 128) {
  lengthChoice = prompt("Please enter a number from 8 to 128 and try again.");
}

let specialSelect = confirm("Include Special Characters? (!, #, %, &, *, etc)");
let lowerSelect = confirm("Include lowecase characters?");
let upperSelect = confirm("Include uppercase characters?");
let numericSelect = confirm ("Include numeric characters? (0-9)");




}

// Create if statements with loops to create the password combination

function passwordCombination() {

  
  if ((specialSelect === true) && (lowerSelect === true) && (upperSelect === true) && (numericSelect === true)) {
    for (i = 0; i < lengthChoice; i++) {
        let character = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters.charAt(character, character + 1);
    }
    return;
}

else if ((specialSelect === false) && (lowerSelect === true) && (upperSelect === true) && (numericSelect === false)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * lu.length);
      newPassword += lu.charAt(character, character + 1);
  }
}

else if ((specialSelect === false) && (lowerSelect === true) && (upperSelect === true) && (numericSelect === true)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * uln.length);
      newPassword += uln.charAt(character, character + 1);
  }
}

else if ((specialSelect === false) && (lowerSelect === false) && (upperSelect === true) && (numericSelect === true)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * un.length);
      newPassword += un.charAt(character, character + 1);
  }
}

else if ((specialSelect === false) && (lowerSelect === true) && (upperSelect === false) && (numericSelect === true)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * ln.length);
      newPassword += ln.charAt(character, character + 1);
  }
}

else if ((specialSelect === true) && (lowerSelect === true) && (upperSelect === false) && (numericSelect === false)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * sl.length);
      newPassword += sl.charAt(character, character + 1);
  }
}

else if ((specialSelect === true) && (lowerSelect === false) && (upperSelect === true) && (numericSelect === false)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * su.length);
      newPassword += su.charAt(character, character + 1);
  }
}

else if ((specialSelect === true) && (lowerSelect === false) && (upperSelect === false) && (numericSelect === true)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * sn.length);
      newPassword += sn.charAt(character, character + 1);
  }
}

else if ((specialSelect === true) && (lowerSelect === true) && (upperSelect === true) && (numericSelect === false)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * slu.length);
      newPassword += slu.charAt(character, character + 1);
  }
}

else if ((specialSelect === true) && (lowerSelect === false) && (upperSelect === true) && (numericSelect === true)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * sun.length);
      newPassword += sun.charAt(character, character + 1);
  }
}

else if ((specialSelect === true) && (lowerSelect === true) && (upperSelect === false) && (numericSelect === true)) {
  for (i = 0; i < lengthChoice; i++) {
      let character = Math.floor(Math.random() * sln.length);
      newPassword += sln.charAt(character, character + 1);
  }
}

return newPassword;


}





function generatePassword() {

  var password = "";
  var selection = selectPassword();
  var combination = passwordCombination();

  return password; 
  


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
