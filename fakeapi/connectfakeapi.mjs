const url = 'https://jsonplaceholder.typicode.com/todos/'
let container = document.getElementById('tasks')

async function getTasks(url) {
  try {
      let res = await fetch(url)
      return res.json()
  } catch (error) {
      console.log(error)
  }
}

async function renderTasks(url) {
  let items = await getTasks(url)
  let html = `<tr>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>`
              
  items.forEach(item => {
    let htmlpart = `<tr>
                      <td>${item.id}</td>
                      <td>${item.title}</td>
                      <td>${item.completed}</td>
                    </tr>`
    html += htmlpart;
  })
  container.innerHTML = html
}
renderTasks(url)