// Assignment code here
// Present series of promts for password criteria when the button to generate password is clicked
// When prompted for length of password, choose at least 8 characters and no more than 128 characters
// Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected
// password should be generated that matches the selected criteria and displayed in an alert or written to the page


// Character arrays

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~' ]
var lowercaseCharacters = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
var uppercaseCharacters = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
var numericCharacters = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Function to select password criteria

function selectPassword(){

var lengthChoice = prompt ("Enter the number of characters you would like your password to be (Must be between 8-128)");
if (isNaN(lengthChoice) || lengthChoice <8 || lengthChoice > 128) {
  lengthChoice = prompt("Please enter a number from 8 to 128 and try again.");
}

var special = confirm("Include Special Characters? (!, #, %, &, *, etc)");
var lower = confirm("Include lowecase characters?");
var upper = confirm("Include uppercase characters?");
var numeric = confirm ("Include numeric characters? (0-9)");

var passwordSelections = {
  length: lengthChoice,
  hasSpecial: special,
  hasLower: lower,
  hasUpper: upper,
  hasNumeric: numeric
}

return passwordSelections;

}

//
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
