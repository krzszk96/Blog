const blocks = [10,20,10,20,10,30,10]
let builds = document.getElementById('build')

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
             </div>`;
    check =true
    color ="red"
  }
  builds.innerHTML = html;
}

checkSunshine(blocks)