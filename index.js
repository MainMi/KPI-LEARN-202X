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
    console.log('w')
    boxTwo.style = "font-style: italic!important; "
})