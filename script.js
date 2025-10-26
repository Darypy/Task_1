document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const titleInput = document.getElementById('task-title');
        const descInput = document.getElementById('task-desc');

        const title = titleInput.value.trim();
        const description = descInput.value.trim();

        if (title === '') {
            alert('Пожалуйста, введите название задачи.');
            return;
        }

        // Создание карточки задачи
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        // Заголовок задачи
        const taskTitle = document.createElement('h3');
        taskTitle.textContent = title;
        taskCard.appendChild(taskTitle);

        // Описание (если есть)
        if (description !== '') {
            const taskDesc = document.createElement('p');
            taskDesc.className = 'task-desc';
            taskDesc.textContent = description;
            taskCard.appendChild(taskDesc);
        }

        // Кнопка "Удалить"
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskCard);
        });

        taskCard.appendChild(deleteBtn);

        // Добавление карточки в список
        taskList.appendChild(taskCard);

        // Очистка формы
        form.reset();
    });
});