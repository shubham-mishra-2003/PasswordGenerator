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
  document.getElementById("result").value = password;
}

function generateCharset(uppercase, lowercase, numeric, specialLetters) {
  let charset = "";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numeric) charset += "0123456789";
  if (specialLetters) charset += "!@#$%^&*()_-+=<>?";

  return charset;
}

function generateRandomPassword(length, charset) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

document.getElementById("generate").addEventListener("click", generatePassword);

document
  .getElementById("passwordlength")
  .addEventListener("input", function () {
    document.querySelector(".PB-range-slidervalue").textContent = this.value;
  });




  document.querySelector(".copy").addEventListener("click", copyToClipboard);

// Function to copy the generated password to the clipboard
function copyToClipboard() {
  var resultField = document.getElementById("result");

  resultField.select();
  document.execCommand("copy");

  setTimeout(function () {
    location.reload();
  }, 2000);
}
