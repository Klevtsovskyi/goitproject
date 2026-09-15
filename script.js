const button = document.querySelector('#button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
    message.textContent = 'Ви натиснули кнопку!';
});