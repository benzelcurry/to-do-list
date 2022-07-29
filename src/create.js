export default function createTask() {
    let myTasks = [];

    class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    let taskTitle = "Homework";
    let taskDescription = "Do homework";
    let taskDue = "Soon";
    let taskPriority = "Important";
    let submitButton = document.querySelector(".btn-submit");

    // WORK ON GETTING CARDS TO ADD TO SCREEN FOR EACH TASK

    submitButton.addEventListener('click', () => {
        const newTask = new Task(taskTitle, taskDescription, taskDue, taskPriority);
        
        myTasks.push(newTask);

        console.log(myTasks);
    });
        
    return myTasks;
}