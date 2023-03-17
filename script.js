// Assignment code here
function generatePassword() {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let numeric = "0123456789";
  let special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

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
    includes.includes("numeric") ||
    includes.includes("special")
  ) {
    let types = includes.join(" ");
    alert(
      `Your password will be ${passwordLength} characters long and will include [${types}] character type(s).`
    );
  } else {
    alert("Please select at least one option of characters to include.");
    generatePassword();
  }

  let types = includes.join(" ");
  let characters = "";
  if (types.includes("uppercase")) characters += uppercase;
  if (types.includes("lowercase")) characters += lowercase;
  if (types.includes("numeric")) characters += numeric;
  if (types.includes("special")) characters += special;

  let password = "";
  for (i = 0; i < passwordLength; i++) {
    let character = characters[Math.floor(Math.random() * characters.length)];
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
