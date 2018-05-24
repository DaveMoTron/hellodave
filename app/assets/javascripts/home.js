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
    $(this).html("Phone: +61 402 428 184").attr('href', "tel:+61402428184").removeClass('hidden');
  } else if($(this).hasClass('email')) {
    $(this).html("Email: davecruikshank@gmail.com").attr('href', 'mailto:davecruikshank@gmail.com').removeClass('hidden');
  };
});