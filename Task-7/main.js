// Получение ссылок на элементы.
let password = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
let eyeClose = document.getElementById('eyeClose');
let eyeOpen = document.getElementById('eyeOpen');
let text = document.getElementById('text');

// Обработчики событий для переключения видимости пароля.
eyeClose.addEventListener('click', () => {
    eyeClose.style.display = 'none';
    eyeOpen.style.display = 'inline';
    password.type = 'text';
    repeatPassword.type = 'text';
});

eyeOpen.addEventListener('click', () => {
    eyeOpen.style.display = 'none';
    eyeClose.style.display = 'inline';
    password.type = 'password';
    repeatPassword.type = 'password';
});