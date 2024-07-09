// You need to add EventListeners for the Computer-User interaction
//This allows users to input their tasks, remove completed tasks and search tasks


//Document is a predefined object in JS that references the html document (DOM)
// You are retrieving an element by the ID attribute 

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('remove-completed').addEventListener('click', removeCompletedTasks);
document.getElementById('search').addEventListener('input', searchTasks);
});

function addTask() {
const taskInput= document.getElementById('new-task'); //get new task input for todolist
const taskText= taskInput.value.trim(); //remove any extra spaces from input value

if(taskText !== "") { //if the input is not empty
    const taskList = document.getElementById('task-list'); //retrieve the inputed element
    const newTask= document.createElement('li'); //create a new list item element
    newTask.textContent = taskText; // set the text of the new task
    newTask.addEventListener('click', markTaskComplete); //completion will be toggled upon clicking
    taskList.appendChild(newTask); //add (append) new task to task list 
    taskInput.value=""; //clear input field 
}

}
function markTaskComplete(event) {
    const task=event.target;
    task.classList.toggle('completed');
}

function removeCompletedTasks () {
    const tasks = document.querySelectorAll('#task-list li'); //select all tasklist items
    tasks.forEach(task => { //iterating over each task
        if (task.classList.contains('completed')) { // Check if the task has the 'completed' class
            task.remove(); // Removes the task if it is completed
        }
    });
}

function searchTasks() {
    const searchInput = document.getElementById('search').value.toLowerCase(); //retrieve search input and converts it to lowercase for case-sensitive comparison
    const tasks =document.querySelectorAll('#task-list li');

    tasks.forEach(task=> {
        const taskText= task.textContent.toLowerCase();
        if(taskText.includes(searchInput)) { //
            task.style.display = ''; //display task
        }
        else {
            task.style.display = 'none'; //hide task
        }

    })

//include print statements or alerts in the function line by line
//Before I see Iyanu- fix it before end of day Monday, fix it and send Prof an email.



}





