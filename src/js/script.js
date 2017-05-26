$(document).ready(function(){
  // весь ваш код
 var menu = document.querySelector('.menu');
function toggleMenu () {
  menu.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu);
});
