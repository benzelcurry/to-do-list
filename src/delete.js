export default function deleteTask(deleteButton, body, task, tasks, i) {
    deleteButton.addEventListener('click', () => {
        body.removeChild(task);
        tasks.splice(i, 1);
        localStorage.setItem('taskList', tasks);
    });
}