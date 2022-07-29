import './style.css';
import Task, { createTask } from './create.js';

let body = document.querySelector('.tasks-display');
let printButton = document.querySelector('.btn-console');
let submitButton = document.querySelector('.btn-submit');
let tasks = createTask();

printButton.addEventListener('click', () => {
    console.log(tasks);
});

function addTask() {
    for (let i = (tasks.length - 1); i < tasks.length; i++) {
            let task = document.createElement('div');
            task.classList.add('task-card');
            task.innerText = `${tasks[i].title}, ${tasks[i].description}, ${tasks[i].dueDate}, ${tasks[i].priority}`;
            body.appendChild(task);
    }
}

submitButton.addEventListener('click', () => {
    addTask();
});