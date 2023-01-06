// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


let requiredPasswordLength = prompt("How many characters would you like to use?");
let addLowerCasedCharacters = confirm("Would you like to use lower cased characters?");
let addUpperCasedCharacters = confirm("Would you like to use upper cased characters?");
let addNumbers = confirm("Would you like to use numbers?");
let addSpecialCharacters = confirm("Would you like to use special characters?");

let listOfChosenCharacters = [];

//create 1 long array

chosenCharacterTypes();
function chosenCharacterTypes() {
    if (addLowerCasedCharacters === true) {
        listOfChosenCharacters = listOfChosenCharacters.concat(lowerCasedCharacters)
    };
     if (addUpperCasedCharacters === true) {
        listOfChosenCharacters = listOfChosenCharacters.concat(upperCasedCharacters);
    };
    if (addNumbers === true) {
        listOfChosenCharacters = listOfChosenCharacters.concat(numericCharacters)
    };
    if (addSpecialCharacters === true) {
        listOfChosenCharacters = listOfChosenCharacters.concat(specialCharacters)
    };
}

// generate random number to use as index for the joined array
let randomNumber = []
for (let i = 0; i < requiredPasswordLength; i++) {
  randomNumber = randomnumber.push(Math.floor(Math.random() * listOfChosenCharacters.length));
}

console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
 
// Function to prompt user for password options
// function getPasswordOptions() {
  
// }

// Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
// function generatePassword() {

// }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);