export default function expandTask(expandButton, task, taskDescription, taskPriority) {
    let expanded = false;

    expandButton.addEventListener('click', () => {
        if (expanded == false) {
            expanded = true;
            task.style.height = "125px";
            task.style.alignContent = "start";
            taskDescription.style.display = "inherit";
            // taskDescription.style.wordWrap = "break-word";
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