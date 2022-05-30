let mylabel = document.getElementById('mylabel')

function saveData(){
  var name = document.getElementById('name').value
  var street = document.getElementById('street').value
  var city = document.getElementById('city').value
  var email = document.getElementById('email').value

  localStorage.setItem('name', name)
  localStorage.setItem('street', street)
  localStorage.setItem('city', city)
  localStorage.setItem('email', email)
}

function printDoc(){
  let html =`
  <div class="packagelabelwrap">
    <h1>My package label</h1>
    <div class="labelinfo">Name and Surname: ${localStorage.getItem('name')}</div> 
    <div class="labelinfo">Street: ${localStorage.getItem('street')}</div> 
    <div class="labelinfo">City/Code: ${localStorage.getItem('city')}</div> 
    <div class="labelinfo">E-mail: ${localStorage.getItem('email')}</div> 
    <div class="labelinfo">Tracking number: ${localStorage.getItem('trackingnumber')}</div> 
  </div>`
  mylabel.innerHTML = html
  window.print()
}

function generateTrackingNumber(){  
  let number = Math.floor(Math.random() * 100000000).toString()
  let nrlength = number.length
  if(nrlength<8) number = '0' + number
  let formatnumber = "0088 0000 " + number.substring(0,4) + " " + number.substring(4,8)
  localStorage.setItem('trackingnumber', formatnumber)
  document.getElementById('trackingnr').innerHTML = "Tracking number: " + formatnumber
}