import './style.css';
import Expand from './photos/expand.svg';
import Checkbox from './photos/checkbox.svg';
import Task, { createTask } from './create.js';

let body = document.querySelector('.tasks-display');
let printButton = document.querySelector('.btn-console');
let taskButton = document.querySelector('.btn');
let tasks = createTask();


printButton.addEventListener('click', () => {
    console.log(tasks);
});

// Adds task to display
function addTask() {
    for (let i = (tasks.length - 1); i < tasks.length; i++) {
            let task = document.createElement('div');
            let expanded = false;
            let infoContainer = document.createElement('div');
            infoContainer.classList.add('info-container');
            let checkContainer = document.createElement('div');
            checkContainer.classList.add('check-container');

            let taskTitle = document.createElement('div');
            taskTitle.innerText = `${tasks[i].title}`;

            let taskDescription = document.createElement('div');
            taskDescription.classList.add('task-description');
            taskDescription.innerText = `${tasks[i].description}`;

            let taskDue = document.createElement('div');
            taskDue.innerText = `${tasks[i].dueDate}`;

            let taskPriority = document.createElement('div');
            taskPriority.classList.add('task-priority');
            taskPriority.innerText = `${tasks[i].priority}`;

            let expandButton = document.createElement('img');
            expandButton.src = Expand;
            expandButton.classList.add('expand');

            let checkButton = document.createElement('img');
            checkButton.src = Checkbox;
            checkButton.classList.add('complete-task');

            checkButton.addEventListener('click', () => {
                checkButton.style.filter = "invert(40%) sepia(39%) saturate(4105%) hue-rotate(136deg) brightness(99%) contrast(97%)"
            });

            task.classList.add('task-card');

            body.appendChild(task);
            task.appendChild(checkContainer);
            task.appendChild(infoContainer);
            checkContainer.appendChild(checkButton);
            checkContainer.appendChild(taskTitle);
            infoContainer.appendChild(taskDue);
            infoContainer.appendChild(expandButton);
            
            expandButton.addEventListener('click', () => {
                if (expanded == false) {
                    expanded = true;
                    task.style.height = "125px";
                    task.style.alignContent = "start";
                    task.appendChild(taskDescription);
                    task.appendChild(taskPriority);
                } else {
                    expanded = false;
                    task.style.height = "30px";
                    task.style.alignContent = "center";
                    task.removeChild(taskDescription);
                    task.removeChild(taskPriority);
                }
            });
    }
}

taskButton.addEventListener('click', () => {
    addTask();
});