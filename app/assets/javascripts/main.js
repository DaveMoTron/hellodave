$(document).on('click', '.scrollable-link', function (e) {
  e.preventDefault();
  var speed = $(this).data('speed') || 1000;
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top, easing: 'easeInOutSine'
  }, speed);
  if($('[data-menu]').hasClass('open')) {
    $('[data-menu]').removeClass('open');
  }
});