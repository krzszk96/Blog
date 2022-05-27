// Task
// How many potato is in given string

const givenword = 'potatopotatoappleorangepotatoplumwatermelonpotatopot'; //4

function checkPotato(word){
  let countpotato = 0;
  let potato = '';

  for(let j=0; j<word.length-5; j++){
    for(let i=j; i< j+6; i++) potato += word[i];     
    if (potato == "potato") countpotato++;
    potato = '';
  }
  return countpotato;    
}

function checkPotato2(word){
  // const regexp = /[A-E]/gi; All letters A through E and a through e are returned
  // var count = word.match(/potato/g); //this returns array of matches
  var countpotato = (word.match(/potato/g) || []).length; //[] this is when nothing found returns null so we display empty so it can be length 0
  return countpotato;
}

// function checkPotato2(word){
//   var countpotato = (word.match(/potato/g) || []).length;
//   return countpotato;
// }
console.log(checkPotato2(givenword));
console.log("You have " + checkPotato2(givenword) + " potatoes!");