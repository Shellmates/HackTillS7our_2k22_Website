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

/*navbar colored section name*/
const navSecNames = document.querySelectorAll('.nav-bar li a');
const sections=document.querySelectorAll('.sec');

  const options = {
    threshold: 0.15, //60% of section is visible
    rootMargin: '0px',
  };

  var observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
          navSecNames[entry.target.id-1].style.color="#FFC947";
        }else {
          navSecNames[entry.target.id-1].style.color="white";
        }
      }

      )
    }, options ) ;

  sections.forEach( (section) => {
      observer.observe(section);
  });

