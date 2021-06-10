import ButtonDone from './ButtonDone.js';
import ButtonDelete from './ButtonDelete.js';

const input = document.querySelector('[data-input]');

export const LoadTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.querySelector('ul');

    list.innerHTML = '';

    tasks.forEach((task, id) => {
        list.appendChild(CreateTask(task, id));
    });
}

export const CreateTask = ({ value, done }, id) => {

    const itemList = document.createElement('li');
    itemList.innerHTML = `<span>${value}</span>`;

    const img = ButtonDone(id);
    itemList.insertBefore(img, itemList.childNodes[0]);
    itemList.appendChild(ButtonDelete(id));
    const span = img.parentElement.querySelector('span');

    if(done) {
        img.src = 'assets/filled.svg';
        span.classList.add('task-done');
    } else {
        img.src = 'assets/not-filled.svg';
        span.classList.remove('task-done');
    }

    // list.appendChild(itemList); // add a child element inside the parent element

    return itemList;
}

export function handleAddTask(event) {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (event.keyCode == 13 || (event instanceof MouseEvent)) {
        const value = input.value;

        if (value == "") return;
        const done = false;

        const task = {
            value,
            done
        }

        const newTasks = [...tasks, task];

        localStorage.setItem('tasks', JSON.stringify(newTasks));

        input.value = "";

        LoadTask();
    }
}