let numb = 0;
const button = document.getElementById('button');
const display = document.getElementById('display');

button.addEventListener('click',() =>{
    numb++;
    display.textContent = numb
});