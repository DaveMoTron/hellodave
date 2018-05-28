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
