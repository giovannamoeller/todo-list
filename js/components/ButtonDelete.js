const ButtonDelete = () => {
    const img = document.createElement('img');
    img.src = 'assets/delete.svg';
    img.classList.add('remove');

    img.addEventListener('click', deleteTask);

    return img;
}

function deleteTask(event) {
    const element = event.target.parentElement;
    element.remove();
}

export default ButtonDelete;

/* export {
    ButtonDelete, deleteTask
} */