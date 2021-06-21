// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log('Contour before Highlight', password); 
console.log('Set do not bake', passwordText); 
  passwordText.value = password;

  console.log('Matte foundation is not for dry skin', passwordText);
  
  if(password){console.log('Contour before highlight'); }
  else {
console.logconsole.log('Set do not bake', passwordText);
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
