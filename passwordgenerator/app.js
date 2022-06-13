let passwd_container = document.getElementById('passwd')
let passwd_length = document.getElementById('passlength')

let checkUpper = document.getElementById('uppercase')
let checkNumber = document.getElementById('numbers')
let checkSymbol = document.getElementById('symbols')

const letters_small = "abcdefghijklmnopqrstuvwxyz"
const letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "`~!@#$%^&*()–_=+[]{}|;:‘“,./<>?"	


function updateTextInput(val) {
  passwd_length.value = val; 
}

function possibleChars(){
  let possible = letters_small
  if (checkUpper.checked) possible += letters_upper
  if (checkNumber.checked) possible += numbers
  if (checkSymbol.checked) possible += symbols
  return possible
}

function generatePasswd(){
  let length = passwd_length.value
  var text = ""
  var possible = possibleChars()

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  passwd_container.innerHTML = text
}