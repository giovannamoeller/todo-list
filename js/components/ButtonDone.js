import { LoadTask } from './Task.js';

const ButtonDone = (id) => {
    const img = document.createElement('img');
    img.src = 'assets/not-filled.svg';

    img.addEventListener('click', function() {
        taskDone(id);
    });

    return img;
}

function taskDone(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks[id].done = !tasks[id].done;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    LoadTask();
}

export default ButtonDone;