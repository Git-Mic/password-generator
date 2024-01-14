// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    console.log("You've clicked the button!");

    // 1. Prompt the user for the password criteria
    // a. Password length between 8 and 128 characters
    // b. lowercase, uppercase, numbers, special characters
    // 2. Validate the input
    // 3. Generate password based obn criteria 

    // 4. Display password to page
    return "Generated password here";
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
