// Assignment code here
function generatePassword() {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let numeric = "0123456789";
  let special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  let passwordLength = prompt(
    "Please enter a password length between 8-128 characters."
  );

  if (!passwordLength || !(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Please enter a number between 8-128");
    generatePassword();
  }

  let includes = prompt(
    "Please enter at least one option of characters to include (lowercase, uppercase, numeric, special) seperated by a space."
  )
    .toLowerCase()
    .split(" ");

  if (
    includes.includes("lowercase") ||
    includes.includes("uppercase") ||
    includes.includes("numeric" || includes.includes("special"))
  ) {
    console.log("includes", includes);
  } else {
    alert("Please select at least one option of characters to include.");
    generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
