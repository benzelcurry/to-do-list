import addTask from './drawTask.js';

// Create task module

class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
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

const storedTasks = localStorage.getItem('taskList');

export default function createTask() {
    let myTasks = [];

    if (storedTasks) {
        myTasks = JSON.parse(storedTasks);
    }

    let body = document.querySelector('.tasks-area');
    let taskTitle = document.querySelector('#task');
    let taskDescription = document.querySelector('#notes');
    let taskDue = document.querySelector('#due-date');
    let taskPriority = document.querySelector('#priority');
    let submitButton = document.querySelector(".btn");

    // New tasks get pushed to array
    submitButton.addEventListener('click', () => {
        const newTask = new Task(taskTitle.value, taskDescription.value, taskDue.value, taskPriority.value, CURRENTPAGE);
        
        myTasks.push(newTask);
        addTask(body, myTasks);
        taskTitle.value = "";
        taskDescription.value = "";
        taskDue.value = "";
        taskPriority.option = "high";
        document.getElementById("myForm").style.display = "none";

        localStorage.setItem('taskList', JSON.stringify(myTasks));
    });

    return myTasks;
}