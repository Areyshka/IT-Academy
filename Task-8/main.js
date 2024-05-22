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
    info.innerHTML = '';
    text.textContent = 'Пароль не подтверждён.';
    text.style.display = 'block';
    setTimeout(() => {
        text.style.display = 'none';
    }, 3000);
    return;
}

// Запись данных в localStorage.
localStorage.setItem('firstName', firstName);
localStorage.setItem('password', password);
localStorage.setItem('gender', gender);

// Добавление таймера 5 секунд после отправки формы и последующий вывод отправленных данных.
let time = document.getElementById('time');
let submit = document.getElementById('submit');

time.style.display = 'block';
info.innerHTML = '';
time.textContent = 5;
submit.disabled = true;
let interval = setInterval(() => {
    time.textContent -= 1;
}, 1000);

setTimeout(function() {
    clearInterval(interval);
    time.style.display = 'none';
    submit.disabled = false;
    resultInfo();
    info.innerHTML = `Отправленные данные: <br>Имя пользователя: ${firstName}<br>Пароль: ${password.value}<br>Пол: ${gender}`;
}, 5000);

// Функция получения данных из localStorage.
function resultInfo() {
    const firstName = localStorage.getItem('firstName');
    const password = localStorage.getItem('password');
    const gender = localStorage.getItem('gender'); 
}

});