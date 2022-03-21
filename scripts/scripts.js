const ham=document.querySelector('.hamburger')
const mobnav=document.querySelector('.mobile-nav')

ham.addEventListener('click',function () {
    ham.classList.toggle('is-active')
    mobnav.classList.toggle('is-active')
    if (ham.classList.contains('is-active')) {
        document.querySelector('body').style.overflow='hidden'; } /*unable scrolling*/
    else 
        document.querySelector('body').style.overflow='scroll';
})

const section=document.querySelectorAll('.redirect_sec')

section.forEach((sec) =>  {sec.addEventListener('click', function() {
    ham.classList.toggle('is-active')
    mobnav.classList.toggle('is-active')
    document.querySelector('body').style.overflow='scroll' })
})