const buttons = document.querySelectorAll('.choosebtn')
var displayboard = document.querySelectorAll('.block')
var winneris = document.getElementById('winner')
var userchoice = ''
var aichoice = ''
var board = ['','','','','','','','','']

// this will be 1
const disableButton = () => {
  buttons.forEach(btn => {
    btn.disabled = true
  })
}
buttons.forEach(btn => {
  btn.addEventListener('click', disableButton);
})
 // this will be 2
function saveUserChoice(choice){
  if(choice == 0) {userchoice = 'O'; aichoice = 'X'}
  if(choice == 1) {userchoice = 'X'; aichoice = 'O'; superAI()}
  displayBoard()
} 
// this will be 3
function displayBoard(){
  let i=0;  
  displayboard.forEach(block => {
    block.innerHTML = board[i]
    i++
  })
  i=0
  displayWinner(checkWin()) //maybe first without it (8)
}
// this will be 6
displayboard.forEach(block => {
  block.addEventListener('click', e => {updateBoard(e.target.id)});
})
// this will be 7
function updateBoard(position){
  if( userchoice == '') return alert("please choose symbol")
  if(board[position] != '') return
  board[position] = userchoice   
  superAI()
  displayBoard() 
}
// this will be 5
function superAI(){
  let empty = checkEmptyPlaces()
  let position = empty[Math.floor(Math.random() * empty.length)]
  board[position] = aichoice
}
// this will be 4
function checkEmptyPlaces(){
  let empty = []
  for (let i =0; i< board.length; i++){
    if(board[i] == '') empty.push(i)
  }
  return empty
}
// this will be 9
function checkWin(){
  let winner ='';
  if ((board[0] == board[1]) && (board[1] == board[2]) && (board[0] != '')) winner = board[0]
  if ((board[3] == board[4]) && (board[4]== board[5]) && (board[3] != '')) winner = board[3]
  if ((board[6] == board[7]) && (board[7]== board[8]) && (board[6] != '')) winner = board[6]

  if ((board[0] == board[4]) && (board[4]== board[8]) && (board[0] != '')) winner = board[0]
  if ((board[6] == board[4]) && (board[4]== board[2]) && (board[6] != '')) winner = board[6]

  if ((board[0] == board[3]) && (board[3] == board[6]) && (board[0] != '')) winner = board[0]
  if ((board[1] == board[4]) && (board[4]== board[7]) && (board[1] != '')) winner = board[1]
  if ((board[2] == board[5]) && (board[5]== board[8]) && (board[2] != '')) winner = board[2]

  return winner
}
// this will be 10
function displayWinner(winner){
  if (winner == '') return
  
  winneris.style.display = "block";

  if (winner == userchoice) winneris.innerHTML = "You won! Congrats!"
  if (winner == aichoice) winneris.innerHTML = "You lost to the computer :("
}
// this will be 11
function restart(){
  for (let i=0; i< board.length; i++) board[i]=''
  buttons.forEach(btn => {btn.disabled = false})
  winneris.style.display = "none";
  userchoice = ''
  aichoice = ''
  displayBoard()
}