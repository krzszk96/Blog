let name_input = document.getElementById('name')
let lastname_input = document.getElementById('lastname')
let phone_input = document.getElementById('phone')
let email_input = document.getElementById('email')
let table = document.getElementById('tableofcontacts')
var contacts = []

class person {

  constructor(name, lastname, phone, email){
    this.name = name
    this.lastname = lastname
    this.phone = phone
    this.email = email
  }
}

function saveNewContact(){
  if(validateInputs() != true) return
  let new_contanct = new person(
    name_input.value, 
    lastname_input.value, 
    phone_input.value, 
    email_input.value
  )
  contacts.push(new_contanct)
  localStorage.setItem('contacts', JSON.stringify(contacts))
  displayContacts()
  clearInputs()
}

function validateInputs(){
  if(name_input.value.length == 0) return alert("type name!")
  if(lastname_input.value.length == 0) return alert("type last name!")
  if(phone_input.value.length == 0) return alert("type phone!")
  if(email_input.value.length == 0) return alert("type email!")
  return true
}

function clearInputs(){
  name_input.value = ''
  lastname_input.value = ''
  phone_input.value = ''
  email_input.value = ''
}

function displayContacts(){
  if(localStorage.getItem('contacts') == null) return
  let html = `
    <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>E-mail</th>
        <th> </th>
    </tr>`
  contacts = JSON.parse(localStorage.getItem('contacts'))
  let id = 0
  for( let contact of contacts) {
    let person = `
    <tr>
      <td>${contact.name}</td>
      <td>${contact.lastname}</td>
      <td>${contact.phone}</td>
      <td>${contact.email}</td>
      <td>
        <button id="${id}" class="delete-btn" onclick="removeItem(this.id)">delete</button>
      </td>
    </tr>`
    html += person
    id++
  }
  id = 0
  table.innerHTML = html
}
displayContacts()

function removeItem(clicked_id){
  contacts = JSON.parse(localStorage.getItem('contacts'))
  contacts.splice(clicked_id, 1)
  localStorage.setItem('contacts', JSON.stringify(contacts))
  displayContacts()
}
