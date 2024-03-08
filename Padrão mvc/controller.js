document.addEventListener('DOMContentLoaded', function () {
    const taskListElement = document.getElementById('taskList');
    
    function renderTasks() {
        tasks.forEach(Task => {
            const li = document.createElement('li');
            li.textContent = `${Task.description} - ${Task.status}`;

            if (Task.status === 'Concluído' || Task.status === 'Concluido' ) {
                li.classList.add('completed');
            }

            taskListElement.appendChild(li);
        });
    }

    renderTasks();
});
