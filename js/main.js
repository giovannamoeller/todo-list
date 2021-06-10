import Date from './components/Date.js';
import { handleAddTask, LoadTask } from './components/Task.js';

const button = document.querySelector('[data-button]');
const input = document.querySelector('[data-input]');

button.addEventListener('click', handleAddTask);
input.addEventListener('keydown', handleAddTask);
//button.onclick = handleAddTask;

const span = document.querySelector('.welcome span');
span.textContent = Date();

LoadTask();




