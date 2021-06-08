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
    
            const itemList = document.createElement('li');
            const content = `<span>${value}</span>`;
            
            itemList.innerHTML = content;
            itemList.insertBefore(ButtonDone(), itemList.childNodes[0]);
            itemList.appendChild(ButtonDelete());
            list.appendChild(itemList); // add a child element inside the parent element
    
            input.value = "";
        }
        
    }





