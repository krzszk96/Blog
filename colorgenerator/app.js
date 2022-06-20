const colors_container = document.querySelector('.back-color')
const generate_btn = document.getElementById('generate')

function generateRandomNumber(){ //0-255
  let numbers = []
  for(let i=0; i<3; i++){
    numbers[i] = Math.floor(Math.random() * 255)
  }
  return numbers
}

generate_btn.addEventListener('click', ()=>{
  let numbers = generateRandomNumber()
  let color_value = 'rgb(' + numbers[0] + ',' + numbers[1] + ',' + numbers[2] + ')'

  colors_container.style.backgroundColor = color_value
})


