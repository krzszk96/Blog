
let builds = document.getElementById('build')
var blocks = [10,20,10,20,10,30,10]

var blocksObj = [
  {height: 10, sunshine: false, color: 'green'},
  {height: 20, sunshine: false, color: 'green'},
  {height: 30, sunshine: false, color: 'green'},
  {height: 20, sunshine: true, color: 'red'},
  {height: 40, sunshine: true, color: 'red'},
  {height: 10, sunshine: true, color: 'red'},
  {height: 20, sunshine: true, color: 'red'}]


function checkSunshineObj(array){
  array[0].sunshine = true
  array[0].color = 'green'

  for(let j=1; j<array.length; j++){
    array[j].sunshine = true
    array[j].color = 'red'

    for(let i=j-1; i>=0; i--){
      if (array[j].height <= array[i].height) array[j].sunshine = false
    }     
    if(array[j].sunshine == true) array[j].color = 'green'
  }  
return array 
}

function displaySunshineObj(array){
  let html = ``
  array.forEach(block => {
    html +=`<div 
              class="block" 
              style="height: ${block.height *10 }px; 
              background-color: ${block.color}">
              ${block.height}m
            </div>`
  })
  builds.innerHTML = html
}
displaySunshineObj(checkSunshineObj(blocksObj))

function checkSunshine(array){
  let check =true
  let color ="red"
  let html=`<div 
              class="block" 
              style="height: ${array[0] *10 }px; 
              background-color: green">
              ${array[0]}m
            </div>`

  for(let j=1; j<array.length; j++){
    for(let i=j-1; i>=0; i--){
      if (array[j] <= array[i]) check = false
    }
    if(check) color = "green"
    html += `<div 
              class="block" 
              style="height: ${array[j] *10 }px; 
              background-color: ${color}">
              ${array[j]}m
            </div>`
    check =true
    color ="red"
  }
  builds.innerHTML = html
}

// checkSunshine(blocks)

const inputs = document.querySelectorAll('#b0, #b1, #b2, #b3, #b4, #b5, #b6')

inputs.forEach(input => {
  input.addEventListener('change', updateHeight)
});

function updateHeight(e) {
  let number = e.target.id.slice(-1)
  let userinput = e.target.value
  if(userinput <= 0 || userinput > 50) return alert("please put number between 1 and 50")
  // blocks[number]= userinput
  // checkSunshine(blocks)

  blocksObj[number].height = userinput
  displaySunshineObj(checkSunshineObj(blocksObj))
}
