
let builds = document.getElementById('build')
var blocks = [10,20,10,20,10,30,10]

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

checkSunshine(blocks)

const inputs = document.querySelectorAll('#b0, #b1, #b2, #b3, #b4, #b5, #b6')

inputs.forEach(input => {
  input.addEventListener('change', updateHeight)
});

function updateHeight(e) {
  let number = e.target.id.slice(-1)
  let userinput = e.target.value
  if(userinput <= 0 || userinput > 50) return alert("please put number between 1 and 50")
  blocks[number]= userinput
  checkSunshine(blocks)
}