const dropdown = document.querySelector('.dropdown') //point to dropdown
const dropdown_list = document.querySelector('.dropdown-list') //point to list of dropdown options
const options = document.querySelectorAll('.dropdown-list li') //point to all dropdown options elements
const selected = document.querySelector('.selected') //point to current display option


// listen for dropdown click and open/close list
dropdown.addEventListener('click', ()=>{
  dropdown_list.classList.toggle('dropdown-list-open')
})

// display choosed option in display container
options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerHTML = option.innerHTML  + `<i class="arrow down"></i>`
  })
})