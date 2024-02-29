document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const fetchButton = document.getElementById('fetch-tasks');
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTasks().then(() => {
                taskInput.value = '';
            });
        }
    });
  
    fetchButton.addEventListener('click', function () {
        fetchTasksFromServer();
    });
  
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
  
        taskItem.addEventListener('click', function () {
            toggleTaskCompletion(taskItem);
            saveTasks();
        });
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function (e) {
            e.stopPropagation();
            removeTask(taskItem);
            saveTasks();
        });
  
        taskItem.appendChild(removeButton);
    }
  
    function toggleTaskCompletion(taskItem) {
        taskItem.classList.toggle('completed');
    }
  
    function removeTask(taskItem) {
        taskItem.parentNode.removeChild(taskItem);
    }
  
    function saveTasks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tasks = [];
                taskList.querySelectorAll('li').forEach(function (taskItem) {
                    tasks.push({
                        text: taskItem.textContent,
                        completed: taskItem.classList.contains('completed')
                    });
                });
                // Simulate saving tasks asynchronously
                console.log('Tasks saved.');
                resolve();
            }, 500);
        });
    }
  
    function fetchTasksFromServer() {
        // Simulate fetching tasks from a server
        setTimeout(() => {
            const tasksFromServer = ['Task from Server 1', 'Task from Server 2', 'Task from Server 3'];
            // Add fetched tasks to the list
            tasksFromServer.forEach(taskText => {
                addTask(taskText);
            });
            console.log('Tasks fetched from server.');
        }, 1000);
    }
  });