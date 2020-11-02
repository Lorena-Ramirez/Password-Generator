// Prompts for password criteria
var length = prompt("How long do you want the password to be? (atleast 8 character , no more then 128)");
while(length <= 7 || length >= 129) {
  alert("Must be aleast 8 characters, no more then 128. Try again");
  var length = prompt("How long do you want the password to be? (atleast 8 character , no more then 128)");
  } 
var specialChar = confirm(" Would you like special characters? ");
var upperCase = confirm(" Would you like uppercase letters?");
var lowerCase = confirm("Would you like lowercase letters?");
var numbers = confirm("would you like numbers?");
alert("Ok great! so your password will have will contain: \n Length: " + length + " characters" + " \n Special Characters: "
  + specialChar + "\n Uppercase Letters: " + upperCase + "\n Lowercase Letters: " + lowerCase + "\n Numbers: " + numbers);

  var passwordOptions = {
    "upperCase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "lowerCase": "abcdefghijklmnopqrstuvwxyz",
    "numbers": "1234567890",
    "specialChar": "!#$&’()*+,-./:;<=>?@[]^_`{|}~"
  }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(options,length,lower){
var password;
  for(var i = 0; i < length; i++){

  if(lower){
  var rndNum = Math.floor(Math.random()*26 + 1);
  password = password.concat(options["lowerCase"][rndNum]);
  }
}
return password.value;
}

function writePassword() {
  var password = generatePassword(passwordOptions,length,lowerCase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
