import drawAllTasks from "./drawAllTasks.js";

let projectsList = [];

// Creates new projects for organizing tasks
export default function createProject(body, tasks, projects, addProjectButton, currentPage) {
    addProjectButton.addEventListener('click', () => {
        let newProject = document.createElement('div');
        let projectName = document.createElement('input');
        projectName.type = "text";
        projectName.id = "project-name";
        projectName.name = "project-name";
        projectName.maxLength = "30";
        newProject.classList.add('new-project');
        projects.insertBefore(projectName, addProjectButton);
        projectName.focus();
        if (projectName == document.activeElement) {
            projectName.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    newProject.innerText = projectName.value;
                    projects.removeChild(projectName);
                    projects.insertBefore(newProject, addProjectButton);
                    projectsList.push(newProject.innerText);
                    localStorage.setItem('projects', JSON.stringify(projectsList));
                }
            });
        }
        
        newProject.addEventListener('click', () => {
            body.innerHTML = '';
            CURRENTPAGE = newProject.innerText;
            drawAllTasks(body, tasks, newProject.innerText)
        });
    });
}