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



let requiredPasswordLength;
let addLowerCasedCharacters;
let addUpperCasedCharacters;
let addNumbers;
let addSpecialCharacters;

function getPasswordOptions() {
  
   requiredPasswordLength = prompt("How many characters would you like to use?");
   addLowerCasedCharacters = confirm("Would you like to use lower cased characters?");
   addUpperCasedCharacters = confirm("Would you like to use upper cased characters?");
   addNumbers = confirm("Would you like to use numbers?");
   addSpecialCharacters = confirm("Would you like to use special characters?");
   selectCharacterTypes();
   generateRandomNumbers();
}

let selectedCharactersArray = [];

//create 1 long array

// selectCharacterTypes();
function selectCharacterTypes() {
  
    if (addLowerCasedCharacters === true) {
        selectedCharactersArray = selectedCharactersArray.concat(lowerCasedCharacters)
    };
    if (addUpperCasedCharacters === true) {
        selectedCharactersArray = selectedCharactersArray.concat(upperCasedCharacters);
    };
    if (addNumbers === true) {
        selectedCharactersArray = selectedCharactersArray.concat(numericCharacters)
    };
    if (addSpecialCharacters === true) {
        selectedCharactersArray = selectedCharactersArray.concat(specialCharacters)
    };
  
}

// generate random number to use as index for the joined array
let randomNumber = [];
function generateRandomNumbers() {
  for (let i = 0; i < requiredPasswordLength; i++) {
    randomNumber.push(Math.floor(Math.random() * selectedCharactersArray.length));
    
  };
  
}
console.log(randomNumber)

// select characters from the joined array using the random numbers as indexes
let generatedPassword = [];

function generatePassword() {
console.log(selectedCharactersArray)


    for (let i = 0; i < requiredPasswordLength; i++) {
      generatedPassword.push(selectedCharactersArray[randomNumber[i]])
      console.log(randomNumber[i])
    }
    console.log(generatedPassword)
    let stringPassword = generatedPassword.join("");
    console.log(stringPassword)
    return stringPassword   
}
 



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);