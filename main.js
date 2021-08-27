// Variables.
let todoInput = document.querySelector('.todo-input');
let todoBtn = document.querySelector('.todo-btn');
let todoList = document.querySelector('.todo-list');


// Event listeners.
todoBtn.addEventListener('click', addTodo );
todoList.addEventListener('click', deleteTodo );

// Functions.
function addTodo(e) {
    e.preventDefault();

    if (todoInput.value === '') {
        alert('Input some text!')
        return;
    }

    // create 'li'
    let listItem = document.createElement('li');
    listItem.innerHTML = todoInput.value;
    listItem.classList.add('todo-item');
    todoList.appendChild(listItem);
    todoInput.value = '';

    // create 'div' for button
    let buttons = document.createElement('div')
    buttons.classList.add('inner-todo-btn')
    listItem.appendChild(buttons);

    // delete button
    let completeBtn = document.createElement('button');
    completeBtn.innerText = 'Delete';
    completeBtn.classList.add('delete-btn');
    buttons.appendChild(completeBtn);

    // edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Complete';
    editBtn.classList.add('edit-btn');
    buttons.appendChild(editBtn);

}

function deleteTodo(e) {
    let item = e.target;

    // Delete btn.
    if (item.classList[0] === 'delete-btn') {
        let todo = item.parentElement.parentElement;
        todo.remove();
    }

    // Edit btn.
    if (item.classList[0] === 'edit-btn') {
        let todo = item.parentElement.parentElement;
        todo.classList.toggle('completed');
    }

}