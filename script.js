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

  //Criteria arrays
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    var specialCharArray = ["!","#","$","&", "’", "(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
  
    
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Random number function
function RandomNum(n) {
  return Math.floor(Math.random() * n);
}

//shuffle function



// Write password to the #password input
function generatePassword(length,upper,lower,numbers,special,upperArray,lowerArray,numbersArray,specialArray){
var passwordArray = [];
var password ="";

if(lower){
  password = password.concat(lowerArray[RandomNum(lowerArray.length-1)]);
  passwordArray = passwordArray.concat(lowerArray);
}

if(upper){
  password = password.concat(upperArray[RandomNum(upperArray.length-1)]);
  passwordArray = passwordArray.concat(upperArray);
}

if(numbers){
  password = password.concat(numbersArray[RandomNum(numbersArray.length-1)]);
  passwordArray = passwordArray.concat(numbersArray);
}

if(special){
  password = password.concat(specialArray[RandomNum(specialArray.length-1)]);
  passwordArray = passwordArray.concat(specialArray);
}

var newLength = length - password.length;

for(var i =0; i < newLength; i++ ){
  password = password.concat(passwordArray[Math.floor(Math.random()*(passwordArray.length-1))])
}

return password;
}

function writePassword() {
  var password = generatePassword(length,upperCase,lowerCase,numbers,specialChar,upperCaseArray,lowerCaseArray,numbersArray,specialCharArray);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
