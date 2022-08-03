import './style.css';
import createTask from './create.js';
import createProject from './addProject.js';
import addTask from './drawTask.js';
import drawAllTasks from './drawAllTasks.js';
import setProject from './setProject.js';

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
    body.style.display = "grid";
    body.style.gridAutoRows = "minmax(auto, 50px)";
    drawAllTasks(body, tasks);
});

printButton.addEventListener('click', () => {
    console.log(CURRENTPAGE);
    console.log(tasks);
});

createProject(body, projects, addProjectButton);

taskButton.addEventListener('click', () => {  
    addTask(body, tasks);
});