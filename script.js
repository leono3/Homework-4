// Assignment Code
var startBtn = document.querySelector("#start");
var generateBtn = document.querySelector("#generate");
alphabet = "abcdefghijklmnopqrstuvwxyz"
const lowerCase = alphabet.split("");
const upperCase = alphabet.toUpperCase().split("");
const nums = "0123456789".split("");
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\".split();
var passwordLower;
var passwordUpper; 
var passwordNum;
var passwordText;
var passwordLength;
document.getElementById("generate").style.display = "none";

function pwLength() {
  passwordLength = prompt("Input length for your password (characters)");
    if (!isNaN(passwordLength)){
      if (passwordLength < 8 || passwordLength > 128){
        alert("Password length must be at least 8 characters and no more than 128 characters");
        pwLength();}
      else{
        //console.log(passwordLength); //logs length but not global var? b/c declared var again at promt
      }
    }
    else {
      pwLength();
    }
  }

function pwLower() {
  passwordLower = confirm("Do you want to include lowercase characters?");
}

function pwUpper() {
  passwordUpper = confirm("Do you want to include uppercase characters?");
}

function pwNum() {
  passwordNum = confirm("Do you want to include numbers?");
}

function pwSpecial() {
  passwordSpecial = confirm("Do you want to include special characters?");
}

function generatePassword(){
  
  var passwordText = document.querySelector("#password");
  passwordText.removeAttribute("readonly")
  
}


// Write password to the #password input
function setUpPassword(event) {
  
  pwLength();
  pwLower();
  pwUpper();
  pwNum();
  pwSpecial();
  generatePassword();
  document.getElementById("start").style.display = "none";
  document.getElementById("generate").style.display = "block";
  generateBtn.addEventListener("click", writePassword);
  
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = passwordText.value;
  var passwordChar = password.split("");
  //console.log(password);
  if (!passwordLower) {
    for (let i = 0; i < passwordChar.length; i++) {
      if (lowerCase.includes(passwordChar[i])) {
        alert("Your password cannot include lowercase characters")
        resetPage();
        //console.log(passwordChar[i]);
        return
        
      }
    } 
  }
  if (!passwordUpper) {
    for (let i = 0; i < passwordChar.length; i++) {
      if (upperCase.includes(passwordChar[i])) {
        alert("Your password cannot include uppercase characters")
        resetPage();
        return
      }
    }
  }
  if (!passwordNum) {
    for (let i = 0; i < passwordChar.length; i++) {
      if (!isNaN(passwordChar[i]))  {
        alert("Your password cannot include numbers")
        resetPage();
        return
      }
    }
  }
  if (!passwordSpecial) {
    for (let i = 0; i < passwordChar.length; i++) {
      if (specialChar.includes(passwordChar[i])) {
        alert("Your password cannot include special characters")
        resetPage();
        return
      }
    } 
  }

  if (passwordChar.length != (passwordLength)) {
    alert(`You password must contain ${passwordLength} characters`);
    resetPage();
    return
  }
  alert(`Password successfully generated! Your password is ${password}`)
}

function resetPage() {
  document.querySelector("#password").value = "";
  window.location.reload();
}
// Add event listener to generate button
startBtn.addEventListener("click", setUpPassword);
