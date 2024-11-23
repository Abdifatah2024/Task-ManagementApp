document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToColumn(taskText, 'todo');
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task');
    }
});

function addTaskToColumn(taskText, columnId) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.textContent = taskText;

    // Add event listener to handle moving tasks between columns
    taskDiv.addEventListener('click', function() {
        moveTask(taskDiv);
    });

    document.getElementById(columnId + 'Tasks').appendChild(taskDiv);
}

function moveTask(taskDiv) {
    const currentColumnId = taskDiv.parentElement.parentElement.id;

    if (currentColumnId === 'todo') {
        addTaskToColumn(taskDiv.textContent, 'inProgress');
    } else if (currentColumnId === 'inProgress') {
        addTaskToColumn(taskDiv.textContent, 'done');
    }
    
    taskDiv.remove(); // Remove task from the current column
}