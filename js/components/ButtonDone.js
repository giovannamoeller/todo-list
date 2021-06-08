const ButtonDone = () => {
    const img = document.createElement('img');
    img.src = 'assets/not-filled.svg';

    img.addEventListener('click', taskDone);

    return img;
}

function taskDone(event) {
    const span = event.target.parentElement.querySelector('span');
    const img = event.target;

    span.classList.toggle('task-done');

    img.src.includes('not-filled') ? img.src = 'assets/filled.svg'
    : img.src = 'assets/not-filled.svg';
}

export default ButtonDone;