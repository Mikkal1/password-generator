// Assignment Code

// asks user for password length and character types and returns a random password
function generatePassword() {
  let password = "";
  let choices = "";
  const lowercases = "abcdefghijklmnopqrstuvwxyz";
  const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  // ask user for a valid password length
  let length = 0;
  do {
    let valid = false;
    try {
      let answer = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
      if (answer >= 8 && answer <= 128) {
        length = answer;
        valid = true;
      }
    } catch (error) { } 

    if (!valid)
      alert("Please enter a number between 8 and 128.");
  } while (length < 8 || length > 128);
  
  // for the character types, ask the user if they want to include them
  let hasLower = confirm("Would you like lowercase characters in your password?");
  choices += hasLower ? lowercases : "";

  let hasUpper = confirm("Would you like upper case characters in your password?");
  choices += hasUpper ? uppercases : "";

  let hasNumber = confirm("Would you like a numerical charactar");
  choices += hasNumber ? numbers : "";
  
  let hasSpecial = confirm("Would you like a special character?");
  choices += hasSpecial ? specials : "";

  // make sure that there is at least one character type included
  if (choices.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // generate a random password using the choices string with the specified length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    password += choices[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
