export default function changePriority(taskPriority, task, tasks, i) {
    taskPriority.addEventListener('click', () => {
        if (tasks[i].priority == "High") {
            tasks[i].priority = "Medium";
            taskPriority.innerText = `Priority: ${tasks[i].priority}`;
            changeShadow();
        } else if (tasks[i].priority == "Medium") {
            tasks[i].priority = "Low";
            taskPriority.innerText = `Priority: ${tasks[i].priority}`;
            changeShadow();
        } else {
            tasks[i].priority = "High";
            taskPriority.innerText = `Priority: ${tasks[i].priority}`;
            changeShadow();
        }
    });

    const changeShadow = () => {
        if (tasks[i].priority == "High") {
            task.style.boxShadow = "5px 5px 8px red";
        } else if (tasks[i].priority == "Medium") {
            task.style.boxShadow = "5px 5px 8px orange";
        } else {
            task.style.boxShadow = "5px 5px 8px lightgreen";
        }
    }

    changeShadow();
}