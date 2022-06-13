let progress_label = document.getElementById('loading')
let progress_bar = document.getElementById('progress-bar')
let progress_done = document.getElementById('done')

function showProgress(){
  progress_label.style.display = 'block'
  progress_bar.style.display = 'block'

  setTimeout(() =>{
    progress_label.style.display = 'none'
    progress_bar.style.display = 'none'
    progress_done.style.display = 'block'    
  },2000)
}