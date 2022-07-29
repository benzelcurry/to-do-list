import './style.css';
import Task, { createTask } from './create.js';

let body = document.querySelector('.tasks-display');
let printButton = document.querySelector('.btn-console');
let submitButton = document.querySelector('.btn-submit');
let tasks = createTask();

printButton.addEventListener('click', () => {
    console.log(tasks);
});

submitButton.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task-card');
    body.appendChild(task);
});