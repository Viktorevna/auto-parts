const minusbutton = document.querySelector('#minusbutton')
const numb = document.querySelector('#numb')
const plusbutton = document.querySelector('#plusbutton')
let num = 1;

plusbutton.addEventListener('click', function() {
    num++
    numb.textContent = num
})
minusbutton.addEventListener('click', function() {
    num--
    numb.textContent = num
})