
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleTask(e.target.description.value)
    form.reset()
  })
});

function handleTask(task){

  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = "x";
  btn.addEventListener('click', handleDelete)

  li.textContent = `${task} `;
  li.appendChild(btn)

  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}