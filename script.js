const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var password = "";


const generatePassword = function() {
  var selectedChars = [];
  var charNum = prompt('How many characters do you want? Please choose between 8-128');

  if(charNum >= 8 && charNum <= 128) {
    var confirmLower = confirm('Do you want lower case characters on your password?');
    if (confirmLower) {
      selectedChars += lowerCase;
    }

    var confirmUpper = confirm('Do you want upper case characters on your password?');
    if(confirmUpper) {
      selectedChars += upperCase;
    }

    var confirmNumbers = confirm('Do you want numbers on your password?');
    if(confirmNumbers) {
      selectedChars += numbers;
    } 

    var confirmSpecials = confirm('Do you want special characters on your password? (!, @, #, etc.)' );
    if(confirmSpecials) {
      selectedChars += specialChars;
    }

    console.log(selectedChars);
  } else { 
    alert("Please enter a number between 8-128.")
    generatePassword()
  }
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