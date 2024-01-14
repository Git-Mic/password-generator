    // 1. Prompt the user for the password criteria
    // a. Password length between 8 and 128 characters
    // b. lowercase, uppercase, numbers, special characters
    // 2. Validate the input
    // 3. Generate password based on criteria 

var characterLength = 8;
var choiceArr = [];

const specialCharArr = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','?','<','>'];
const lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
const upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Event Listener
    generateBtn.addEventListener("click", writePassword); 


// Write password to the #password input
function writePassword() {
   var correctPrompts = getPrompts(); // Returns true or false
   var passwordText = document.querySelector("#password");

    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    }

    else {
        passwordText.value = "";
    }

}

function generatePassword() {
    console.log("You clicked the button!")
    // Generate password based on prompts
    var password = "";
    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password
}


function getPrompts() {
    characterLength = parseInt(prompt("How many characters do you want your password to have? (It must be 8 - 128 characters"));
    //NaN
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character length has to be a number, 8 - 128 digits. Try again.");
        return false
    }

    if(confirm("Would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCaseArr);
    }

    if(confirm("Would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }

    if(confirm("Would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }

    if(confirm("Would you like numbers in your password?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    return true;

}


