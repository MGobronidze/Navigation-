let burgerElement = document.querySelector('.burger')
let navigationElement = document.querySelector('.navigation')
let navUlElement=document.querySelector('.nav-ul')
let navImgElement=document.querySelector('.nav-img')

burgerElement.addEventListener('click',function() {
    navigationElement.classList.toggle('active');
    navUlElement.classList.toggle('display')
    navImgElement.classList.toggle('notDisplay')

})
