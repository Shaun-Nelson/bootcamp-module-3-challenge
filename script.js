// Assignment code here
function getPasswordLength() {
  // Prompt user to input password length and check to see if it meets requirements
  const passwordLength = prompt(
    "Please enter a password length between 8-128 characters."
  );

  if (!passwordLength || !(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Please enter a number between 8-128");
    return "";
  }

  return passwordLength;
}

function getOptions() {
  // Prompt user to enter character types to use and cast string into an array
  let options = prompt(
    "Please enter at least one option of characters to include (lowercase, uppercase, numeric, special) seperated by a space."
  )
    .toLowerCase()
    .split(" ");

  // If user option not valid or duplicate, remove it from options array
  const categories = ["lowercase", "uppercase", "numeric", "special"];

  //Remove duplicate options by creating a Set and using the spread operator to coerce it back into an array (from StackOverflow)
  options = [...new Set(options)];

  //Get indices of all invalid options
  let indices = [];
  for (let option of options) {
    if (!categories.includes(option)) {
      let index = options.indexOf(option);
      indices.push(index);
    }
  }

  //Loop through options array starting from the end and remove invalid options (from StackOverflow)
  for (let i = indices.length - 1; i >= 0; i--) {
    options.splice(indices[i], 1);
  }

  return options;
}

function validateOptions(passwordLength, options) {
  // Create a string of user options to be used in confirmation alert
  const types = options.join(" ");

  // Check to see if user options includes at least one valid option
  if (
    options.includes("lowercase") ||
    options.includes("uppercase") ||
    options.includes("numeric") ||
    options.includes("special")
  ) {
    alert(
      `Your password will be ${passwordLength} characters long and will include [${types}] character type(s).`
    );
  } else {
    alert("Please select at least one option of characters to include.");
    return "";
  }
}

function generatePassword() {
  // Initialize all possible password characters
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numeric = "0123456789";
  const special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  const passwordLength = getPasswordLength();

  if (passwordLength) {
    const options = getOptions();

    validateOptions(passwordLength, options);

    // Initialize an empty string and populate it based on selected user options
    let characters = "";
    if (options.includes("uppercase")) characters += uppercase;
    if (options.includes("lowercase")) characters += lowercase;
    if (options.includes("numeric")) characters += numeric;
    if (options.includes("special")) characters += special;

    let password = "";
    for (i = 0; i < passwordLength; i++) {
      // Through each iteration, add a random character to password string
      const character =
        characters[Math.floor(Math.random() * characters.length)];
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
