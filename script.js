// Prompts for password criteria
var length = prompt("How long do you want the password to be? (atleast 8 character , no more then 128)");
var specialChar = confirm(" Would you like special characters? ");
var upperCase = confirm(" Would you like uppercase letters?");
var lowerCase = confirm("Would you like lowercase letters?");
var numbers = confirm("would you like numbers?");
alert("Ok great! so your password will have will contain: \n Length: " + length + " characters" + " \n Special Characters: "
  + specialChar + "\n Uppercase Letters: " + upperCase + "\n Lowercase Letters: " + lowerCase + "\n Numbers: " + numbers);





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function generatePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
