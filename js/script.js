$(document).ready(function(){
  // Initiate slick carousel
  $('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="lni lni-chevron-left"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="lni lni-chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
  // On scroll event
  $(document).on("scroll", onScroll);
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('.dd-menu a').each(function () {
      $(this).removeClass('active');
      if( window.innerWidth <= 768 ) {
        $('.dd-menu').slideUp('fast');
        $('[dd-toggle]').removeClass('active');
      }
    })
    $(this).addClass('active');
    var target = this.hash, menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
    });
  });
  // Toggle menu
  $('[dd-toggle]').on('click', function() {
    if( window.innerWidth <= 768 ) {
      $(this).toggleClass('active');
      var _id = $(this).attr('dd-toggle');
      $('#'+_id).slideToggle('fast');
    }
  });
});
// On scoroll
$(window).on('scroll', function(){
  // Add remove sticky class from header on scroll
  if( $(window).scrollTop() ) {
    $('.dd-header').addClass('sticky');
  } else {
    $('.dd-header').removeClass('sticky');
  }
  // Call onScroll function
  $(document).on("scroll", onScroll);
});
// on scroll function
function onScroll(event){
  // Add remove active class from menu on scroll
  var scrollPos = $(document).scrollTop();
  $('.dd-menu li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 75 <= scrollPos && refElement.position().top + refElement.height() + 75 > scrollPos) {
      $('.dd-menu li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}
