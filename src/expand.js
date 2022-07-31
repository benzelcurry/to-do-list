export default function expandTask() {
    let expanded = false;
    let expandButton = document.querySelector('.expand');
    let task = document.querySelector('.task-card');
    let taskDescription = document.querySelector('.task-description');
    let taskPriority = document.querySelector('.task-priority');

    expandButton.addEventListener('click', () => {
        if (expanded == false) {
            expanded = true;
            task.style.height = "125px";
            task.style.alignContent = "start";
            taskDescription.style.display = "inherit";
            taskPriority.style.display = "inherit";
        } else {
            expanded = false;
            task.style.height = "30px";
            task.style.alignContent = "center";
            taskDescription.style.display = "none";
            taskPriority.style.display = "none";
        }
    });
}