const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

const generatePassword = function() {
  //variable to store selected characters
  password = '';
  var selectedChars = [];

  var charNum = prompt('How many characters do you want? Please choose between 8-128');

  if(charNum >= 8 && charNum <= 128) {
    var confirmLower = confirm('Do you want lower case characters on your password?');
    if (confirmLower) {
      selectedChars.push(...lowerCase);
    }

    var confirmUpper = confirm('Do you want upper case characters on your password?');
    if(confirmUpper) {
      selectedChars.push(...upperCase);
    }

    var confirmNumbers = confirm('Do you want numbers on your password?');
    if(confirmNumbers) {
      selectedChars.push(...numbers);
    } 

    var confirmSpecials = confirm('Do you want special characters on your password? (!, @, #, etc.)' );
    if(confirmSpecials) {
      selectedChars.push(...specialChars);
    }

    if(!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecials) {
      alert('Please select at least 1 type of character.');
      return generatePassword();
    }

    //randomize selected characters
    selectedChars = selectedChars.sort(() => {return 0.5 - Math.random()}).splice(0, charNum);
    return password = selectedChars.join('')
  } else { 
    alert("Please enter a number between 8-128.");
    return generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password)
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);