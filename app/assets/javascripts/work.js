$(document).ready(function(){
  $('.businest-slider').slick({
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    infinite: false,
    dots: true,
    appendDots: $(this).siblings('.slide-title')
  });
  $('.sterling-slider').slick({
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    appendDots: $(this).siblings('.slide-title'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.petrescue-slider').slick({
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    dots: true,
    appendDots: $(this).siblings('.slide-title'),
    infinite: false
  });
});

