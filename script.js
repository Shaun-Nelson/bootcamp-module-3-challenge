// Assignment code here

// TODO: error checking (includes) -- no double inputs
function generatePassword() {
  // Initialize all possible password characters
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numeric = "0123456789";
  const special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Prompt user to input password length and check to see if it meets requirements
  const passwordLength = prompt(
    "Please enter a password length between 8-128 characters."
  );

  if (!passwordLength || !(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Please enter a number between 8-128");
    generatePassword();
  }

  // Prompt user to enter character types to use and cast string into an array
  let options = prompt(
    "Please enter at least one option of characters to include (lowercase, uppercase, numeric, special) seperated by a space."
  )
    .toLowerCase()
    .split(" ");

  //TODO: use confirm instead of alert

  // If user option not valid, remove it from options array
  const categories = ["lowercase", "uppercase", "numeric", "special"];

  for (let option of options) {
    if (!categories.includes(option)) {
      const index = options.indexOf(option);
      options.splice(index, 1);
    }
  }

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
    generatePassword();
  }

  // Initialize an empty string and populate it based on selected user options
  let characters = "";
  if (types.includes("uppercase")) characters += uppercase;
  if (types.includes("lowercase")) characters += lowercase;
  if (types.includes("numeric")) characters += numeric;
  if (types.includes("special")) characters += special;

  let password = "";
  for (i = 0; i < passwordLength; i++) {
    // Through each iteration, add a random character to password string
    const character = characters[Math.floor(Math.random() * characters.length)];
    password += character;
  }

  return password;
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
