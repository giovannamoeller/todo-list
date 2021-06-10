import { LoadTask } from "./Task.js";

const ButtonDelete = (id) => {
    const img = document.createElement('img');
    img.src = 'assets/delete.svg';
    img.classList.add('remove');

    img.addEventListener('click', function() {
        deleteTask(id);
    });

    return img;
}

function deleteTask(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const findElementToRemoveIndex = tasks.findIndex(task => task.id === id);

    tasks.splice(findElementToRemoveIndex, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    LoadTask();
}

export default ButtonDelete;

/* export {
    ButtonDelete, deleteTask
} */