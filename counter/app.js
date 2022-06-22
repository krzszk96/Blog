let counter_container = document.querySelector('.counter')
let counter = 0
let target = 15678

window.onload = () => updateCounter()

const updateCounter = () =>{
  if(counter < target){
    counter += Math.floor(target / 200) 
    document.querySelector('.counter').innerHTML = counter
    setTimeout(updateCounter,1)
  }
}
