$(document).ready(function(){
  // весь ваш код
 var menu = document.querySelector('.menu');
function toggleMenu () {
  menu.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu);
	
	$("a").click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 1000,
        easing: "swing"
    });
    return false;
  });

	$('.reviews-slider').slick({
		prevArrow: '<img class="prevArrowRev" src="img/ArrowNextRev.png" width="40px" height="48px">',
		nextArrow: '<img class="nextArrowRev" src="img/ArrowNextRev.png" width="40px" height="48px">',
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

  	
		  	// CUTDOWN
		  	function getTimeRemaining(endtime) {
				  var t = Date.parse(endtime) - Date.parse(new Date());
				  var seconds = Math.floor((t / 1000) % 60);
				  var minutes = Math.floor((t / 1000 / 60) % 60);
				  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
				  var days = Math.floor(t / (1000 * 60 * 60 * 24));
				  return {
				    'total': t,
				    'days': days,
				    'hours': hours,
				    'minutes': minutes,
				    'seconds': seconds
				  };
				}

				function initializeClock(id, endtime) {
				  var clock = document.getElementById(id);
				  var daysSpan = clock.querySelector('.days');
				  var hoursSpan = clock.querySelector('.hours');
				  var minutesSpan = clock.querySelector('.minutes');
				  var secondsSpan = clock.querySelector('.seconds');

				  function updateClock() {
				    var t = getTimeRemaining(endtime);

				    daysSpan.innerHTML = t.days;
				    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
				    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
				    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

				    if (t.total <= 0) {
				      clearInterval(timeinterval);
				    }
				  }

				  updateClock();
				  var timeinterval = setInterval(updateClock, 1000);
				}

				var deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);
				initializeClock('clockdiv', deadline);
});