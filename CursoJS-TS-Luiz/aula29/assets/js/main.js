const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
};

inputTask.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value)
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createClearBtn(li) {
    li.innerText += ' ';
    const clearBtn = document.createElement('button');
    clearBtn.innerText = 'Apagar';
    clearBtn.setAttribute('class', 'clear-btn') //USADO PARA CRIAR QUALQUER ATRIBUTO NO ELEMENTO
    li.appendChild(clearBtn);
}

function createTask(text) {
    const li = createLi();
    li.innerText = text;
    tasks.appendChild(li);
    clearInput();
    createClearBtn(li);
    saveTask();
};

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value)
});

document.addEventListener('click', function(event) {
    const el = event.target;

    if (el.classList.contains('clear-btn')) {
        el.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    const liTask = tasks.querySelectorAll('li');
    const listTask = [];

    for (let task of liTask) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        listTask.push(textTask);
    }

    const taskJSON = JSON.stringify(listTask);
    localStorage.setItem('tasks', taskJSON);
}

function loadTask() {
    const task = localStorage.getItem('tasks');
    const listTask = JSON.parse(task);

    for (let task of listTask) {
        createTask(task);
    }
}

loadTask();