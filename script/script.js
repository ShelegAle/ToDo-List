let input = document.querySelector('.message'),
  btn = document.querySelector('.add'),
  todo = document.querySelector('.todo'),
  ulTodo = document.querySelector('ul.todo')

function loadTodos() {
  const data = localStorage.getItem('todo')
  if (data) {
    ulTodo.innerHTML = data
  }
}

loadTodos()

btn.addEventListener('click', (e) => {
  if (input.value === '') return
  createDeleteElements(input.value)
  input.value = ''
})

input.addEventListener('keypress', (keyPressed) => {
  const keyEnter = 13
  if (keyPressed.which == keyEnter) {
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
  }
})

function createDeleteElements(value) {
  let li = document.createElement('li'),
    del = document.createElement('button'),
    fin = document.createElement('button'),
    imp = document.createElement('button')

  li.className = 'li'
  li.textContent = value

  del.className = 'btn'
  del.textContent = 'DEL'
  li.appendChild(del)

  fin.className = 'btn'
  fin.textContent = 'Finish'
  li.appendChild(fin)

  imp.className = 'btn'
  imp.textContent = 'Impotant'
  li.appendChild(imp)

  del.addEventListener('click', (e) => {
    todo.removeChild(li)
  })

  imp.addEventListener('click', (e) => {
    li.classList.toggle('li-impotant')
  })

  fin.addEventListener('click', (e) => {
    li.classList.toggle('li-finish')
  })

  todo.appendChild(li)
}

let saveButton = document.querySelector('#saveList'),
  clearButton = document.querySelector('#clearList')

saveButton.addEventListener('click', () => {
  localStorage.setItem('todo', ulTodo.innerHTML)
})

clearButton.addEventListener('click', () => {
  ulTodo.innerHTML = ''
  localStorage.removeItem('todo', ulTodo.innerHTML)
})
