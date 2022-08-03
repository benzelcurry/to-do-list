import completeTask from './complete.js';
import expandTask from './expand.js';
import deleteTask from './delete.js';
import changePriority from './priority.js';
import Expand from './photos/expand.svg';
import Checkbox from './photos/checkbox.svg';
import Delete from './photos/delete.svg';

export default function addTask(body, tasks) {
    for (let i = (tasks.length - 1); i < tasks.length; i++) {
        let task = document.createElement('div');
        task.classList.add('task-card');
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
        taskPriority.innerText = `Priority: ${tasks[i].priority}`;

        let expandButton = document.createElement('img');
        expandButton.src = Expand;
        expandButton.classList.add('expand');

        let deleteButton = document.createElement('img');
        deleteButton.src = Delete;
        deleteButton.classList.add('delete-task');

        let checkButton = document.createElement('img');
        checkButton.src = Checkbox;
        checkButton.classList.add('complete-task');

        body.appendChild(task);
        task.appendChild(checkContainer);
        task.appendChild(infoContainer);
        task.appendChild(taskDescription);
        task.appendChild(taskPriority);
        checkContainer.appendChild(checkButton);
        checkContainer.appendChild(taskTitle);
        infoContainer.appendChild(taskDue);
        infoContainer.appendChild(deleteButton);
        infoContainer.appendChild(expandButton);

        expandTask(expandButton, task, taskDescription, taskPriority);
        completeTask(checkButton, task);
        deleteTask(deleteButton, body, task, tasks, i);
        changePriority(taskPriority, task, tasks, i);
    }
};