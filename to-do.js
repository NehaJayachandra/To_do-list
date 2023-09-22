const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

function addTask() {
    const taskText = taskInput.value.trim()
    if (taskText === '') {
        alert('Please enter a valid task.')
        return
    }

    const existingTasks = [...taskList.querySelectorAll('span')].map(span => span.textContent.trim())
            if (existingTasks.includes(taskText)) {
                alert(`"${taskText}" is already in the list.`)
                return
            }
    const listItem = document.createElement('li')
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>`
     taskList.appendChild(listItem)

    taskInput.value = ''
}

function removeTask(button) {
    const listItem = button.parentElement
            confirm(`Are you sure you want to delete the task ?`)
                taskList.removeChild(listItem)
            }