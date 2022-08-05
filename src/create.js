import addTask from './drawTask.js';

// Create task module

class Task {
    constructor(title, description, taskDueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.taskDueDate = taskDueDate;
        this.priority = priority;
        this.project = project;
    }
}

let addButton = document.querySelector('.open-form');
let cancelButton = document.querySelector('.btn-cancel');

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

let storedTasks = localStorage.getItem('taskList');

export default function createTask(tasks) {
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }

    let body = document.querySelector('.tasks-area');
    let taskTitle = document.querySelector('#task');
    let taskDescription = document.querySelector('#notes');
    // let taskDue = document.querySelector('#due-date-input');
    let taskPriority = document.querySelector('#priority');
    let submitButton = document.querySelector(".btn");

    let taskDue = document.querySelector('#due-date-input');
    let taskDueDate

    // Retrieves date from HTML calendar date input form
    taskDue.addEventListener('change', (e) => {
        taskDueDate = (e.target.value);
    });

    // New tasks get pushed to array
    submitButton.addEventListener('click', () => {
        const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate, taskPriority.value, CURRENTPAGE);
        
        tasks.push(newTask);
        addTask(body, tasks);
        taskTitle.value = "";
        taskDescription.value = "";
        taskDueDate = "";
        taskPriority.option = "high";
        document.getElementById("myForm").style.display = "none";

        localStorage.setItem('taskList', JSON.stringify(tasks));
        storedTasks = localStorage.getItem('taskList');
    });
}