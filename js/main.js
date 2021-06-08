import ButtonDone from './components/ButtonDone.js';
import ButtonDelete from './components/ButtonDelete.js';


const button = document.querySelector('[data-button]');
const input = document.querySelector('[data-input]');
const list = document.querySelector('ul');

button.addEventListener('click', addTask);
input.addEventListener('keydown', addTask);
//button.onclick = addTask;

function addTask(e) {

    if (e.keyCode == 13 || (e instanceof MouseEvent)) {
        const value = input.value;

        if (value == "") return;

        const itemList = document.createElement('li');
        const content = `<span>${value}</span>`;

        itemList.innerHTML = content;
        itemList.insertBefore(ButtonDone(), itemList.childNodes[0]);
        itemList.appendChild(ButtonDelete());
        list.appendChild(itemList); // add a child element inside the parent element

        input.value = "";
    }
}

(function getDate() {
    const date = new Date();
    let weekDay, month;
    const day = date.getDate();

    switch(date.getDay()) {
        case 1: weekDay = 'Monday'; break;
        case 2: weekDay = 'Tuesday'; break;
        case 3: weekDay = 'Wednesday'; break;
        case 4: weekDay = 'Thursday'; break;
        case 5: weekDay = 'Friday'; break;
        case 6: weekDay = 'Saturday'; break;
        case 7: weekDay = 'Sunday'; break;
    }

    switch(date.getMonth() + 1) {
        case 1: month = 'jan'; break;
        case 2: month = 'fev'; break;
        case 3: month = 'mar'; break;
        case 4: month = 'apr'; break;
        case 5: month = 'may'; break;
        case 6: month = 'jun'; break;
        case 7: month = 'jul'; break;
        case 8: month = 'aug'; break;
        case 9: month = 'sep'; break;
        case 10: month = 'oct'; break;
        case 11: month = 'nov'; break;
        case 12: month = 'dec'; break;
    }

    const fullDate = `${weekDay}, ${day} ${month}.`;

    const span = document.querySelector('.welcome span');
    span.textContent = fullDate;
})();



