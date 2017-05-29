$(document).ready(function(){
  // весь ваш код
 var menu = document.querySelector('.menu');
function toggleMenu () {
  menu.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu);

});


	$('.gallery__slider').slick({
		
			prevArrow: '<img class="prevArrow" src="img/ArrowPrew.png" width="40px" height="48px">',
		  nextArrow: '<img class="nextArrow" src="img/ArrowNext.png" width="40px" height="48px">',

  	 	dots: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1280,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
  		
});