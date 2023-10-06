let numb = 0;
let numb1 = 0;
let numb2 = 0;

const button = document.getElementById('button');
const display = document.getElementById('display');
const button1 = document.getElementById('button1');
const display1 = document.getElementById('display1');
const button2 = document.getElementById('button2');
const display2 = document.getElementById('display2');

button.addEventListener('click',() =>{
    numb++;
    display.textContent = numb
});

button1.addEventListener('click',() =>{
    numb1++;
    display1.textContent = numb1
});

button2.addEventListener('click',() =>{
    numb2++;
    display2.textContent = numb2
});