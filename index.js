// pass les
const closeBtn = document.querySelector('.closeBtn');
const detailInfo = document.querySelector('.detailInfo');
closeBtn.addEventListener('click', () => detailInfo.classList.toggle('active'));

// 1 les
let text1 = document.querySelector('.header-subtitle')
let text2 = document.querySelector('.footer-description')
console.log(text1, text2);
[text2.innerHTML, text1.innerHTML] = [text1.innerHTML, text2.innerHTML]

// 2 les
const res = document.querySelector('.res')
d1 = 6
d2 = 8
s = (d1 * d2) / 2 
res.innerHTML = `S = ${s}`

// 3 les

const triangleBox = document.querySelector('.triangle-box');
const buttonToCheckTriangle = triangleBox.querySelector('button');
buttonToCheckTriangle.addEventListener('click', () => checkTriangle())

function checkTriangle() {
    const side1 = parseFloat(document.querySelector('#side1').value);
    const side2 = parseFloat(document.querySelector('#side2').value);
    const side3 = parseFloat(document.querySelector('#side3').value);

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        const result = 'Можливо побудувати трикутник з введеними сторонами.';

        document.cookie = `triangleResult=${result}`;

        alert(result);
    } else {
        const result = 'Неможливо побудувати трикутник з введеними сторонами.';
        alert(result);

        document.cookie = `triangleResult=${result}`;
    }
}

function checkCookies() {
    const cookies = document.cookie;
    if (cookies.includes('triangleResult')) {
        const userResponse = confirm('Знайдені збережені дані. Видалити їх?');
        if (userResponse) {
            document.cookie = '';
            alert('Збережені дані видалені.');
        } else {
            alert('Залишені збережені дані.');
        }
    } else {
        alert('Немає збережених даних в cookies.');
    }
}

checkCookies()

// les 4 

const boxTwo = document.querySelector('.textInfo')
boxTwo.addEventListener('mouseover', () => {
    boxTwo.style = "font-style: italic!important; "
})

// les 5

const savedFormsId = [];

const saveToLocalStorage = (value, id) => {
    const array = localStorage.getItem(`array${id}`)
    if (!array) {
        localStorage.setItem(`array${id}`, JSON.stringify([value]))
        return;
    }
    localStorage.setItem(`array${id}`, JSON.stringify([...JSON.parse(array), value]))

}

const createForm = (element) => {
    const formElement = document.createElement('form');
    const inputElement = document.createElement('input');
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Send';
    buttonElement.type = 'submit';
    formElement.classList.add('sendForm');
    formElement.appendChild(inputElement);
    formElement.appendChild(buttonElement);
    element.appendChild(formElement);
    console.log(inputElement.value);
    formElement.addEventListener('submit', (ev) => {
        ev.preventDefault()
        if (!inputElement.value.trim().length) {
            return;
        }
        saveToLocalStorage(inputElement.value, element.getAttribute('id'))
    })
}



const clickHandler = (ev) => {
    let element = ev.target;

    while (element && !element.classList.contains('grid-item')) {
        element = element.parentElement;
    }
    const id = element.getAttribute('id');
    console.log(savedFormsId, savedFormsId.includes(id));
    if (element && !savedFormsId.includes(id)) {
        savedFormsId.push(id)
        createForm(element);
    }
};


const getArray = (element, array) => {
    const list = document.createElement('ul');
    element.appendChild(list);
    array.forEach((value, index) => {
        const listElement = document.createElement('li')
        listElement.innerHTML = value;
        listElement.style.backgroundColor = index % 2 == 0 ? '#111' : '#fff';
        listElement.style.color= index % 2 !== 0 ? '#111' : '#fff';
        list.appendChild(listElement);
    })
}

const getLocalHostData = () => {
    const allBlocks = document.querySelectorAll('.grid-item');
    for (let i = 1; i < 7; i++) {
        const data = localStorage.getItem(`array${i}`)
        console.log(data);
        if (data) {
            getArray(allBlocks[i - 1], JSON.parse(data))
        }
    }
}

getLocalHostData()