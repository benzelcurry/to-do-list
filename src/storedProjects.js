import drawAllTasks from "./drawAllTasks.js";

export default function restoreProjects(body, tasks, projects, addProjectButton, storedProjects) {
    for (let i = 0; i < storedProjects.length; i++) {
        let newProject = document.createElement('div');
        newProject.classList.add('new-project');
        newProject.innerText = storedProjects[i];
        projects.insertBefore(newProject, addProjectButton);

        newProject.addEventListener('click', () => {
            body.innerHTML = '';
            CURRENTPAGE = newProject.innerText;
            drawAllTasks(body, tasks, newProject.innerText)
        });
    }
}