document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('task-form');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        // Load tasks from local storage
        loadTasks();
    
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                saveTasks();
                taskInput.value = '';
            }
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
                e.stopPropagation(); // Prevent taskItem click event from firing
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
            const tasks = [];
            taskList.querySelectorAll('li').forEach(function (taskItem) {
                tasks.push({
                    text: taskItem.textContent,
                    completed: taskItem.classList.contains('completed')
                });
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    
        function loadTasks() {
            const tasksJSON = localStorage.getItem('tasks');
            if (tasksJSON) {
                const tasks = JSON.parse(tasksJSON);
                tasks.forEach(function (task) {
                    addTask(task.text);
                    if (task.completed) {
                        toggleTaskCompletion(taskList.lastChild);
                    }
                });
            }
        }
    });
