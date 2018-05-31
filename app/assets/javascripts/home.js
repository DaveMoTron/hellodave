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
    $(this).html("davecruikshank@gmail.com").attr('href', 'mailto:davecruikshank@gmail.com').removeClass('hidden');
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

// // Cache selectors
// var topMenu = $("nav.main .mobile-nav-wrapper"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find(".scrollable-link"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//    // Set/remove active class
//    menuItems
//      .parent().removeClass("active")
//      .end().filter("[href='#"+id+"']").parent().addClass("active");
// });​


