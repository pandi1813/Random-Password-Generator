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



let passwordLength;
let addLowerCasedCharacters;
let addUpperCasedCharacters;
let addNumbers;
let addSpecialCharacters;

let selectedCharactersArray = [];
let randomNumber = [];
let generatedPassword = [];


// function to prompt the get password requirements
function getPasswordOptions() {

  passwordLength = prompt("How many characters would you like to use?");

  // if statements to set password length limits
  if (passwordLength < 10) {
    return alert("Password too short, please select at least 10 characters");
  };

  if (passwordLength > 64) {
    return alert("Password too long, please select maximum 64 characters");
  }


  addLowerCasedCharacters = confirm("Would you like to use lower cased characters?");
  addUpperCasedCharacters = confirm("Would you like to use upper cased characters?");
  addNumbers = confirm("Would you like to use numbers?");
  addSpecialCharacters = confirm("Would you like to use special characters?");

  selectCharacterTypes();
  generateRandomNumbers();
}


// function to create 1 long array of the required character types
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

// function to generate an array of random number to use as index for the joined array
function generateRandomNumbers() {
  for (let i = 0; i < passwordLength; i++) {
    randomNumber.push(Math.floor(Math.random() * selectedCharactersArray.length));

  };

}
// console.log(randomNumber)

// select characters from the joined array and create a string as a random password

function generatePassword() {
  console.log(selectedCharactersArray);

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword.push(selectedCharactersArray[randomNumber[i]]);
    console.log(randomNumber[i]);
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