$(document).on('click', '[data-menulink]', function(e){
  e.preventDefault();
  var target = $(this).data('menulink');
  $('[data-menu=' + target + ']').toggleClass('open');
});

$(document).bind('mousemove',function(ev){
  var docWidth = $(window).width();
  var docHeight = $(window).height();
  var posX = ev.pageX;
  var posY = (ev.pageY - $(window).scrollTop());
  
  var percentX = ((posX / docWidth) * 20) - 13
  var percentY = ((posY / docHeight) * 20) - 10.5
  $('.daisy img.eyeball').attr("style", "-webkit-transform: translate3d(" + percentX + "px, " + percentY + "px, 0)");
});

$(document).on('click', '.social__link.hidden', function(e){
  e.preventDefault();
  if($(this).hasClass('phone')) {
    $(this).html("+61 402 428 184").attr('href', "tel:+61402428184").removeClass('hidden');
  } else if($(this).hasClass('email')) {
    $(this).html("why@hellodave.com.au").attr('href', 'mailto:why@hellodave.com.au').removeClass('hidden');
  };
});

$(document).ready(function(){
  $('.portfolio-slider').slick({
    prevArrow: "<button type='button' class='slick-prev slick-button'></button>",
    nextArrow: "<button type='button' class='slick-next slick-button'></button>",
    infinite: false,
    dots: true,
    appendDots: $('.slide-title')
  });

  $('.portfolio-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){   
    if(currentSlide <= 4){
      $('.project-website-link').html('Businest').attr('href', 'https://businest.com');
    } else if (currentSlide >= 5 && currentSlide <= 10) {
      $('.project-website-link').html('Sterling Vineyards').attr('href', 'https://itunes.apple.com/au/app/sterling-vineyards/id1223207297?mt=8');
    } else if (currentSlide => 10) {
      $('.project-website-link').html('PetRescue').attr('href', 'https://www.petrescue.com.au');
    }
  });
});

$(window).on('scroll', function () {
   var sections = $('.homepage-section')
    , nav = $('nav.main')
    , nav_height = nav.outerHeight()
    , cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});