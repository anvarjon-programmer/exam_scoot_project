const hamburgerBtn = document.querySelector('.hamburger');
const navbarList = document.querySelector('.navbar__list');


hamburgerBtn.addEventListener('click', function(){
    navbarList.classList.toggle('visible')
})

function closeMenu (){
    console.log('working');
    navbarList.classList.remove('visible');
}
