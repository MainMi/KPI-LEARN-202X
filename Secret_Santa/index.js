const buttonGift = document.querySelector('#getGift');
const santaForm = document.forms['santaForm']
const {
    fullname: fullnameInput,
    email: emailInput,
    subject: subjectInput,
} = santaForm;

const getRngNum = (max) => Math.floor(Math.random() * max);

function getCookie(key) {
    const array = document.cookie.split(';');
    const cookie = array.find(vl => vl.split('=')[0] === key);
    return cookie ? JSON.parse(cookie.split('=')[1]) : undefined;
}
function getCookieIndex(key) {
    const array = document.cookie.split(';');
    const cookie = array.findIndex(vl => vl.split('=')[0] === key);
    return cookie !== -1 ? cookie : undefined;
}

function setCookie(key, value) {
    let array = document.cookie.split(';').filter(vl => vl != '');
    console.log(array);
    const cookie = getCookieIndex(key);
    if (cookie != undefined) {
        array[cookie] = `${key}=${JSON.stringify(value)}`;
        document.cookie = array.join(';');
        return;
    }
    array.push(`${key}=${JSON.stringify(value)}`);
    document.cookie = array.join(';');
    return;
}

function SubmitFormHandler(ev) {
    ev.preventDefault();
    if (!fullnameInput.value || !emailInput.value) {
        alert('Будь-ласка заповність форму');
        return;
    }
    const newUser = {
        fullname: fullnameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
    }
    const santaUsers = getCookie('santaUsers');
    const data = santaUsers ? [...santaUsers, newUser] : [newUser]
    setCookie('santaUsers', data)
    alert('Ви успішно стали Таємним Сантою!')
}

function clickButtonHandler() {
    const santaUsers = getCookie('santaUsers');
    if (!santaUsers || !santaUsers?.length) {
        alert('Ми надішлемо вашого підопічного згодом');
        return;
    }
    console.log(santaUsers);
    const randomUser = santaUsers[getRngNum(santaUsers.length)];
    alert(`Ваш санта:\n${randomUser.fullname} - ${randomUser.subject}\nІнформація про Санту:\n${randomUser.email}\n`);
}


buttonGift.addEventListener('click', clickButtonHandler)

santaForm.addEventListener('submit', (ev) => SubmitFormHandler(ev))