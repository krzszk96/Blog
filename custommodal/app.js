const popup = document.querySelector('#alert-popup')
const tint = document.querySelector('#tint-background')

window.onload = function(){
  setTimeout(function(){
    popup.style.display = 'block'
    tint.style.display = 'block'
  }, 1000);
}

function closePopup(){  
  popup.style.display = "none"
  tint.style.display = "none"
}
tint.addEventListener("click", ()=> {
  closePopup()
})