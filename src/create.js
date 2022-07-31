// Create task module

export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
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

export function createTask() {
    let myTasks = [];
    let taskTitle = document.querySelector('#task');
    let taskDescription = document.querySelector('#notes');
    let taskDue = document.querySelector('#due-date');
    let taskPriority = document.querySelector('#priority');
    let submitButton = document.querySelector(".btn");

    // WORK ON GETTING CARDS TO ADD TO SCREEN FOR EACH TASK

    submitButton.addEventListener('click', () => {
        const newTask = new Task(taskTitle.value, taskDescription.value, taskDue.value, taskPriority.value);
        
        myTasks.push(newTask);
        taskTitle.value = "";
        taskDescription.value = "";
        taskDue.value = "";
        taskPriority.option = "high";
        document.getElementById("myForm").style.display = "none";
    });

    return myTasks;
}