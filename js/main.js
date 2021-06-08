(() => {
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
            list.appendChild(itemList); // add a child element inside the parent element
    
            input.value = "";
        }
        
    }
    
    const ButtonDone = () => {
        const img = document.createElement('img');
        img.src = 'assets/not-filled.svg';
    
        img.addEventListener('click', taskDone);
    
        return img;
    }

    const ButtonDelete = () => {
        const 
    }
    
    
    function taskDone(evento) {
        const span = evento.target.parentElement.querySelector('span');
        const img = evento.target;
    
        span.classList.toggle('task-done');
    
        img.src.includes('not-filled') ? img.src = 'assets/filled.svg'
        : img.src = 'assets/not-filled.svg';
    }
})()




