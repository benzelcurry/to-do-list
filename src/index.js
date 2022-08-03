import './style.css';
import createTask from './create.js';
import createProject from './addProject.js';
import addTask from './drawTask.js';
import drawAllTasks from './drawAllTasks.js';

let mainContent = document.querySelector('.tasks-display');
let body = document.querySelector('.tasks-area');
let projects = document.querySelector('.projects');
let addProjectButton = document.querySelector('.add-project');
let printButton = document.querySelector('.btn-console');
let taskButton = document.querySelector('.btn');
let homeButton = document.querySelector('.home');
window.CURRENTPAGE = "home";
let tasks = createTask(CURRENTPAGE);

homeButton.addEventListener('click', () => {
    CURRENTPAGE = "home";
    body.innerHTML = '';
    body.style.display = "grid";
    body.style.gridAutoRows = "minmax(auto, 50px)";
    drawAllTasks(body, tasks, homeButton.innerText.toLowerCase());
});

printButton.addEventListener('click', () => {
    console.log(CURRENTPAGE);
    console.log(tasks);
});

createProject(body, tasks, projects, addProjectButton);

taskButton.addEventListener('click', () => {  
    addTask(body, tasks);
});