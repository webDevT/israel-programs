$(function(){

	$('.btn__menu').click(function(){
		$(this).toggleClass('active');
		$('.header__menu ul').toggleClass('active');		
	})

$('.filter-btn').click(function(){
		$(this).toggleClass('active');
		$('.event-header').toggleClass('active');
				
	})

$('.faq__header').click(function(){
    $(this).parent().find('.faq__text').slideToggle();   
    $(this).toggleClass('active');
  })




$('.sign-in').click(function(){
    $('.popup-login').fadeIn();
    
  });

$('.new-event__button').click(function(){
    $('.popup-new-event').fadeIn();
    
  });

$('.presentation-item-detail').click(function(){
    $(this).parent().find('.presentation-details-popup-wrap').slideToggle();    
  });
$('.presentation-popup__close').click(function(){
    $(this).parent().parent().parent().slideUp();    
  });


$('.cumpus').click(function(){
    $('.popup-cumpus').fadeIn();
    
  });
$('.about-school').click(function(){
    $('.popup-about').fadeIn();
    
  });
$('.missions').click(function(){
    $('.popup-missions').fadeIn();
    
  });
$('.broochure-edit').click(function(){
    $('.popup-new-page').fadeIn();
    $(".tab-content:nth-child(2)").fadeIn();
    $(".tab:nth-child(2)").addClass('active');
    $(".tab:first-child").removeClass('active');
    
  });

$('.new-page').click(function(){
    $('.popup-new-page').fadeIn();
    $(".tab-content:first-child").fadeIn();
    $(".tab:nth-child(2)").removeClass('active');
    $(".tab:first-child").addClass('active');
    
  });

  $(".tab").click(function() {
  $(".tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// $('.edit').click(function(){
//     $(this).parent().attr("contenteditable", true);
    
//   });



$('.sign-up').click(function(){
    $('.popup-signup').fadeIn();
    
  });
$('.popup-close').click(function(){
    $('.popup').fadeOut();
    
  });


$('.presentation-item .blue-button').click(function(){
    $(this).parent().parent().parent().addClass('active');
    $(this).parent().addClass('book');
    $(this).text('Your seat is reserved');
    $(this).parent().find('.presentation-item-detail').text('You will be notified via email.');  
  });

$('.presentation-details-popup-wrap .blue-button').click(function(){
    $(this).parent().parent().parent().hide();
    $(this).parent().parent().parent().parent().parent().addClass('book');
     $(this).parent().parent().parent().parent().parent().find('.blue-button').text('Your seat is reserved');
$(this).parent().parent().parent().parent().parent().find('.presentation-item-detail').text('You will be notified via email.');
   
  });

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".popup__content"); 
    var div2 = $(".popup");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.fadeOut();
    }
  });
});

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

$('.slider4').slick({
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 1,
  dots: true
  
});

$('.slider5').slick({
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 1,
  dots: true
  
});



 if( window.innerWidth <= 768 ){
$('.slider3').slick({
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 1,
  dots: true
});




}


 if( window.innerWidth <= 768){
window.onresize = function () {

        location.reload();
    
};
 }

// var oldWidth = window.innerWidth;
// window.onresize = function () {

//         location.reload();
    
// };


$('.more').click(function(){
		$(this).parent().find('.how-it-work__item-p').slideToggle();
		$(this).toggleClass('active');
	})


});

