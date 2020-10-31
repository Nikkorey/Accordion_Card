import  data  from './data.js';

const info = document.querySelector('.info')
const infoBtn = document.querySelector('.info__btn')


const accordion = data.map((data, index) => {
    const {question, answer} = data
    return `
    <div class="info__container">
        <div class="info__question">
            <h3>${question}</h3>
            <button class="info__btn"><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></button>
        </div>

        <p class="info__details">${answer}</p>
        <hr>
    </div>`;
}).join("");

info.innerHTML = accordion
const infoDetails = document.querySelectorAll('.info__details')

console.log({...infoDetails});

infoBtn.addEventListener('click', () => {
    console.log('hell');
})