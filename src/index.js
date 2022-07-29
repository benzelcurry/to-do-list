import './style.css';
import Task, { createTask } from './create.js';

let body = document.querySelector('.tasks-display');
let addButton = document.querySelector('.open-form');
let submitTask = document.querySelector('.btn');
let cancelButton = document.querySelector('.btn-cancel');
let printButton = document.querySelector('.btn-console');
let submitButton = document.querySelector('.btn-submit');
let tasks = createTask();

// open + close controls for the task entry popup form
addButton.addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = "block";
});
  
cancelButton.addEventListener('click', () => {
    document.getElementById("myForm").style.display = "none";
});

// prevent page from refreshing when submit button is hit
let form = document.querySelector(".form-container");

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


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