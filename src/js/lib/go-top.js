export function goTop() {
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('.content__go-top').fadeIn();
    } else {
      $('.content__go-top').fadeOut();
    }
  });

  $('.content__go-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
}
