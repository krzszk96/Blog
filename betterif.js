let check = false;

function checkIfbad(){
  if(check) {
    console.log("check is true")
  }
  else{
    console.log("check is false")
  }
}

function checkIfbetter(){
  if(check) console.log("check is true")
  if(!check) console.log("check is false")
}

// Ternary Operator
function checkIfbest(){
  check ? console.log("check is true") : console.log("check is false")
}

checkIfbad()
checkIfbetter()
checkIfbest()

let isRaining = false
let isSunny = false

isRaining ? console.log("Its raining now") 
: isSunny ? console.log("Its sunny now") 
: console.log("Its snowing")