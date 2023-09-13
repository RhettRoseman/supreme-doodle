// Assignment Code
// Criteria for password
var generateBtn = document.querySelector("#generate");
// prompts 
var must = confirm("You must put information into the prompts in order to create password." , "Click OK to confirm")
var lowercase = prompt("Password  has lowercase letters ")
var uppercase = prompt("Password  has uppercase letters")
var Characters = prompt("Password  has 8-125 characters")
var special = prompt("pasword has special characters")
// Character banks for password
var upper = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
var lower = ( "a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var num = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var symbol = ("!", "@", "#", "$", "%", "^", "&", "*", "-", "+")
// fucnction that makes password usable 
function generatePassword() {
console.log( "Use button to generate password")
return lowercase + uppercase + Characters + special 
}
// + upper + lower + num + symbol 








// prompt("If satisfied with your password copy and paste. If dissatisfied press Generate Password button again. ");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event Listener to generate button 
generateBtn.addEventListener("click", writePassword)