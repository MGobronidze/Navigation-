let burgerElement = document.querySelector('.burger')
let navigationElement = document.querySelector('.navigation')
let navUlElement=document.querySelector('.nav-ul')
let navImgElement=document.querySelector('.nav-img')

let firstElement = document.querySelector('.first')
let secondElement = document.querySelector('.second')
let thirdElement = document.querySelector('.third')

burgerElement.addEventListener('click',function() {
    navigationElement.classList.toggle('active');
    navUlElement.classList.toggle('display')
    navImgElement.classList.toggle('notDisplay')
    firstElement.classList.toggle('displayFirst')
    secondElement.classList.toggle('displaySecond')
    thirdElement.classList.toggle('displayThird')
})
