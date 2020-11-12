$(function(){

	$('.btn__menu').click(function(){
		$(this).toggleClass('active');
		$('.header__menu ul').toggleClass('active');		
	})

$('.filter-btn').click(function(){
		$(this).toggleClass('active');
		$('.event-header').toggleClass('active');
				
	})



$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});

$('.slider').slick({
	prevArrow: false,
	nextArrow: false,
	slidesToShow: 3,
	responsive: [
   {
    breakpoint: 993,
    settings: {
      slidesToShow: 2,
      centerPadding: '125px',
      dots: true
    }
  },
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      centerPadding: '125px',
      dots: true
    }
  },




   

  ]
});

$('.slider2').slick({
	prevArrow: false,
	nextArrow: false,
	slidesToShow: 3,
	dots: true,
	responsive: [
   {
    breakpoint: 993,
    settings: {
      slidesToShow: 2,
      centerPadding: '125px',
      dots: true
    }
  },
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      centerPadding: '125px',
      dots: true
    }
  },




   

  ]
});


$('.more').click(function(){
		$(this).parent().find('.how-it-work__item-p').slideToggle();
		$(this).toggleClass('active');
	})


});