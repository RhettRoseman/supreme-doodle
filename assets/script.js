// Assignment Code
// Criteria for password
var generateBtn = document.querySelector("#generate");
// prompts 
var lowercase = confirm("Password  has lowercase letters ")
var uppercase = confirm("Password  has uppercase letters")
var Characters = confirm("Password  has 8-125 characters")
var special = confirm("pasword has special characters")
// Character banks for password
// var letters1 = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
// var letters2 = ("a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
// var numbers = ("1", "2", "3", "4", "5", "6", "7", "8", "9")
// var special = ("!", "@", "#", "$", "%", "^", "&", "*", "-", "+")

// fucnction that makes password usable 
function generatePassword() {
console.log( "Use button to generate password")
// distributes random number and letter generator into box for user to copy and paste 
// return Math.random(23).toString(36).slice(2);
return Math.random().toString(36).slice(2);
}




confirm("If satisfied with your password copy and paste. If dissatisfied press Generate Password button again. ");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event Listener to generate button 
generateBtn.addEventListener("click", writePassword)