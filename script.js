
  //Criteria arrays
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    var specialCharArray =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  
    
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Random number function
function randomNum(n) {
  //generate random number 0 -n
  return Math.floor(Math.random() * n);
}

//shuffle function
function shufflePassword(p) {
  var array = p.split('');           
  var k = array.length;              
  
  for(var i = 0 ; i < k-1 ; ++i) {
    var j = randomNum(k);       
    
    var temp = array[i];             
    array[i] = array[j];
    array[j] = temp;
  }
  
  p = array.join('');                
  return p;    
}         

// Write password to the #password input
function generatePassword(upperArray,lowerArray,numbersArray,specialArray){

  // Prompts for password criteria
var length = prompt("How long do you want the password to be? (atleast 8 character , no more then 128)");
while(length <= 7 || length >= 129) {
  alert("Must be aleast 8 characters, no more then 128. Try again");
  var length = prompt("How long do you want the password to be? (atleast 8 character , no more then 128)");
  } 
  var specialChar = confirm(" Would you like the password to contain special characters? ");
  var upperCase = confirm(" Would you like the password to contain uppercase letters?");
  var lowerCase = confirm("Would you like the password to contain letters?");
  var numbers = confirm("Would you like the password to contain numbers?");

// //If user does not chose a criteria then they will be asked to until they do so
while(!specialChar && !upperCase && !lowerCase && !numbers ){
alert("Must choose atleast one criteria.");
var specialChar = confirm(" Would you like the password to contain special characters? ");
var upperCase = confirm(" Would you like the password to contain uppercase letters?");
var lowerCase = confirm("Would you like the password to contain letters?");
var numbers = confirm("Would you like the password to contain numbers?");
}
alert("Ok great! so your password will have will contain: \n Length: " + length + " characters" + " \n Special Characters: "
  + specialChar + "\n Uppercase Letters: " + upperCase + "\n Lowercase Letters: " + lowerCase + "\n Numbers: " + numbers);

var passwordArray = [];
var password ="";

//If the condition is true then adds a random index from that conditions loop to the password. 
//Also adds conditions array to the password array
if(lowerCase){
  password = password.concat(lowerArray[randomNum(lowerArray.length-1)]);
  passwordArray = passwordArray.concat(lowerArray);
}

if(upperCase){
  password = password.concat(upperArray[randomNum(upperArray.length-1)]);
  passwordArray = passwordArray.concat(upperArray);
}

if(numbers){
  password = password.concat(numbersArray[randomNum(numbersArray.length-1)]);
  passwordArray = passwordArray.concat(numbersArray);
}

if(specialChar){
  password = password.concat(specialArray[randomNum(specialArray.length-1)]);
  passwordArray = passwordArray.concat(specialArray);
}

//calculates how much of the password still needs to be generated
var newLength = length - password.length;

//adds a new character to the password by chosing a random index from the array
for(var i = 0; i < newLength; i++ ){
  password = password.concat(passwordArray[randomNum(passwordArray.length-1)]);
}

return shufflePassword(password);
}

function writePassword() {
  var password = generatePassword(upperCaseArray,lowerCaseArray,numbersArray,specialCharArray);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
