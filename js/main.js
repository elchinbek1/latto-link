$('.burger__menu').click(function() {
    $('.header__menu').addClass('active');
    $('body').addClass('hid')
})
$('.close').click(function() {
    $('body').removeClass('hid')
    $('.header__menu').removeClass('active');
})

// Login
$('.js-button-campaign').click(function() { 
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

// Registration
$('.js-button-campaign-registration').click(function() { 
	$('.js-overlay-campaign-registration').fadeIn();
	$('.js-overlay-campaign-registration').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign-registration').click(function() { 
	$('.js-overlay-campaign-registration').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign-registration');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign-registration').fadeOut();
		
	}
});

/* slider */

$('.owl-carousel').owlCarousel({
    margin: 50,
       responsiveClass: true,
    responsiveClass: true,
    nav: true,
    stagePadding:30,
    dots:false,
    navText: ["<img src='images/icon/next.png'>", "<img src='images/icon/next.png'>"],
    responsive : {
        // breakpoint from 0 up
        0 : {
            margin:10,
            stagePadding:10,
        },
        // breakpoint from 768 up
        768 : {
            margin: 50,stagePadding:30,
        }
    }
})