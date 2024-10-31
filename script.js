const button = document.getElementById('myButton');

// Функция для изменения текста в кнопке в зависимости от ширины экрана и количества символов
function updateButtonText() {
    if (window.innerWidth < 800) {
        button.textContent = 'Заказать'; // Текст для экранов меньше 800px
    } else {
        button.textContent = 'Заказаь обратный звонок'; // Текст для экранов больше или равных 800px
    }
    
}

// Проверка размера экрана при загрузке
updateButtonText();

// Добавление слушателя события изменения размера окна
window.addEventListener('resize', updateButtonText);