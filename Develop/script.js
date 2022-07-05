// Assignment code here
// Present series of promts for password criteria when the button to generate password is clicked
// When prompted for length of password, choose at least 8 characters and no more than 128 characters
// Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected
// password should be generated that matches the selected criteria and displayed in an alert or written to the page


// Character arrays

var specialArr = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~' ];
var lowercaseArr = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var uppercaseArr = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var numericArr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Insert blank array to account for the differnet possible combinations of characters

var comboArrays = [];

// Assignment code here
var generateBtn = document.querySelector("#generate");

//Add Event Listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write function to allow the user to select their password criteris through a series of prompts.

function passwordCriteria() {

  lengthChoice = parseInt(prompt("Please enter the amount of characters you would like your password to be (between 8 and 128)"));
  if(isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    alert("Password must be between 8-128. Please try again.");
    return false;
  }

  // Use concat to join more than one strings.


  if (confirm("Would you like lowercase letters in your password?")) {
      comboArrays = comboArrays.concat(lowercaseArr);
    }

    // console.log (comboArrays); (used to make sure comboArrays is being filled correctly)


  if (confirm("Would you like uppercase letters in your password?")) {
      comboArrays = comboArrays.concat(uppercaseArr);
    }

    // console.log (comboArrays);

  if (confirm("Would you like numbers in your password?")) {
      comboArrays = comboArrays.concat(numericArr); 
    }

    // console.log (comboArrays);


  if (confirm("Would you like special characters in your password?")) {
      comboArrays = comboArrays.concat(specialArr);
    }

    // console.log (comboArrays);

    return true;
}

// Write function to generate the user's new password based on their answers to the prompts.

function generatePassword() {
  var password = "";
  for (var i = 0; i < lengthChoice; i++) {
    var randomIndex = Math.floor(Math.random() * comboArrays.length)
    password = password + comboArrays[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var criteria = passwordCriteria();
  var passwordText = document.querySelector("#password");
  if (criteria) {
  var password = generatePassword();
  passwordText.value = password;
  } else {
  passwordText.value = "";
  }
  
  
}