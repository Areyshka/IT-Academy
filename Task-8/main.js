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

// Обработчик события отправки формы.
let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

// Получение значений полей формы.
let firstName = document.getElementById('firstName').value;
let gender = document.getElementById('gender').value;
let consent = document.getElementById('consent').checked;
let info = document.getElementById('info');

// Проверка заполнения полей паролей формы.
if (!password.value || !repeatPassword.value){
    text.textContent = '';
    return;
// Проверка совпадения паролей.
} else if (password.value !== repeatPassword.value) {
    text.textContent = 'Пароль не подтверждён.';
    text.style.display = 'block';
    setTimeout(() => {
        text.style.display = 'none';
    }, 3000);
    return;
}

// Вывод отправленных данных.
info.innerHTML = `Отправленные данные: <br>Имя пользователя: ${firstName}<br>Пароль: ${password.value}<br>Пол: ${gender}`;

});