import './style.css';
import createTask from './create.js';
import createProject from './addProject.js';
import addTask from './drawTask.js';
import drawAllTasks from './drawAllTasks.js';
import restoreProjects from './storedProjects';

let body = document.querySelector('.tasks-area');
let projects = document.querySelector('.projects');
let addProjectButton = document.querySelector('.add-project');
let printButton = document.querySelector('.btn-console');
let taskButton = document.querySelector('.btn');
let homeButton = document.querySelector('.home');
window.CURRENTPAGE = "home";
let tasks = [];
const storedTasks = localStorage.getItem('taskList');
const storedProjects = localStorage.getItem('projects');

if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    drawAllTasks(body, JSON.parse(storedTasks), homeButton.innerText.toLowerCase());
}

if (storedProjects) {
    restoreProjects(body, JSON.parse(storedTasks), projects, addProjectButton, JSON.parse(storedProjects));
}

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
    localStorage.removeItem('taskList');
    localStorage.removeItem('projects');
});

createProject(body, tasks, projects, addProjectButton);
createTask();

// taskButton.addEventListener('click', () => { 
//     addTask(body, tasks);
// });