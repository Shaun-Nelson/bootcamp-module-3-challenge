// Assignment code here
function getPasswordLength() {
  // Prompt user to input password length and check to see if it meets requirements
  var passwordLength = prompt(
    "Please enter a password length between 8-128 characters."
  );

  if (!passwordLength || !(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Please enter a number between 8-128");
    return;
  }

  return passwordLength;
}

function getOptions() {
  var options = [];

  //A series of confirm prompts populates an array containing the results
  var upper = confirm("Include uppercase characters?");
  var lower = confirm("Include lowercase characters?");
  var num = confirm("Include numeric characters?");
  var sp = confirm("Include special characters?");

  options.push(upper, lower, num, sp);

  return options;
}

function validateOptions(passwordLength, options) {
  var types = [];

  //Create a string of options to include in alert
  if (options[0]) types.push("uppercase ");
  if (options[1]) types.push("lowercase ");
  if (options[2]) types.push("numeric ");
  if (options[3]) types.push("special");

  if (types.length >= 1) {
    alert(
      `Your password will be ${passwordLength} characters long and will include [${types.join(
        " "
      )}] character type(s).`
    );
  } else {
    alert("Please select at least one option of characters to include.");
    return;
  }
}

function generatePassword() {
  // Initialize all possible password characters
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var passwordLength = getPasswordLength();

  if (passwordLength) {
    var options = getOptions();

    validateOptions(passwordLength, options);

    // Initialize an empty string and populate it based on selected user options
    var characters = "";
    if (options[0]) characters += uppercase;
    if (options[1]) characters += lowercase;
    if (options[2]) characters += numeric;
    if (options[3]) characters += special;

    var password = "";
    for (i = 0; i < passwordLength; i++) {
      // Through each iteration, add a random character to password string
      var character = characters[Math.floor(Math.random() * characters.length)];
      password += character;
    }

    return password;
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
