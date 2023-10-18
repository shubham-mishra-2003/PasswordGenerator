// Function to generate a random password based on user settings
function generatePassword() {
  const passwordLength = document.getElementById("passwordlength").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numeric = document.getElementById("numeric").checked;
  const specialLetters = document.getElementById("specialLetters").checked;

  const charset = generateCharset(
    uppercase,
    lowercase,
    numeric,
    specialLetters
  );
  const password = generateRandomPassword(passwordLength, charset);

  // Display the generated password in the input field
  document.getElementById("result").value = password;
}

// Function to generate a charset based on user preferences
function generateCharset(uppercase, lowercase, numeric, specialLetters) {
  let charset = "";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numeric) charset += "0123456789";
  if (specialLetters) charset += "!@#$%^&*()_-+=<>?";

  return charset;
}

// Function to generate a random password of a specified length
function generateRandomPassword(length, charset) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Event listener to generate a password when the "Generate" button is clicked
document.getElementById("generate").addEventListener("click", generatePassword);

// Initialize the password length display
document
  .getElementById("passwordlength")
  .addEventListener("input", function () {
    document.querySelector(".PB-range-slidervalue").textContent = this.value;
  });

// Function to copy the generated password to the clipboard
function copyToClipboard() {
  const passwordInput = document.getElementById("result");
  passwordInput.select();
  document.execCommand("copy");
  const copyButton = document.querySelector(".copy .tooltip");
  copyButton.textContent = copyButton.getAttribute("data-text-end");
}

// Event listener to copy the password to the clipboard when the "Copy" button is clicked
document.querySelector(".copy").addEventListener("click", copyToClipboard);
