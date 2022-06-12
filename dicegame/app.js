var diceimages = new Array()
var diceContainer = document.getElementById('dices')  
var displaySum = document.getElementById('sumofnumbers')
var showhighscore = document.getElementById('highscore')
var sum = 0
var highscore

function getDices(){
  for(let i=0; i <6; i++){
    diceimages[i] = new Image()
    diceimages[i].src = 'images/dice' + (i+1) + '.png';
  }
}
function displayRandomDices(){    
  clearDisplay()
  for(let i=0; i <6; i++){  
    let random = generateRandomNumber() //generate radom nr
    sum += (random + 1) // save the sum of numbers

    let imgnode = document.createElement('img')
    imgnode.src = diceimages[random].src
    diceContainer.appendChild(imgnode)
  }
  displaySum.innerHTML = "You rolled " + sum + " !"
  saveHighScore(sum)
  sum = 0
}
function generateRandomNumber(){
  return random = Math.floor(Math.random() * 6)
}
function clearDisplay(){
  while (diceContainer.firstChild) 
    diceContainer.firstChild.remove()
}
function saveHighScore(score){
  if(localStorage.getItem('highscore') == null ) localStorage.setItem('highscore', score)
  if(localStorage.getItem('highscore') < score) localStorage.setItem('highscore', score)
  showhighscore.innerHTML =  localStorage.getItem('highscore')
}

getDices()
displayRandomDices()