export function pureSlider() {
  // duration of scroll animation
  var scrollDuration = 700;
  // paddles
  var leftPaddle = document.getElementsByClassName('slider__arrow-left');
  var rightPaddle = document.getElementsByClassName('slider__arrow-right');
  // get items dimensions
  var itemsLength = $('.content__game-popular-item').length;
  var itemSize = $('.content__game-popular-item').outerWidth(true);
  // get some relevant size for the paddle triggering point
  var paddleMargin = 20;

  // get wrapper width
  var getMenuWrapperSize = function() {
    return $('.slider__wrapper').outerWidth();
  };
  var menuWrapperSize = getMenuWrapperSize();
  // the wrapper is responsive
  $(window).on('resize', function() {
    menuWrapperSize = getMenuWrapperSize();
  });
  // size of the visible part of the menu is equal as the wrapper size 
  var menuVisibleSize = menuWrapperSize;

  // get total width of all menu items
  var getMenuSize = function() {
    return itemsLength * itemSize;
  };
  var menuSize = getMenuSize();
  // get how much of menu is invisible
  var menuInvisibleSize = menuSize - menuWrapperSize;

  // get how much have we scrolled to the left
  var getMenuPosition = function() {
    return $('.content__game-popular').scrollLeft();
  };

  // finally, what happens when we are actually scrolling the menu
  $('.content__game-popular').on('scroll', function() {

    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled so far
    var menuPosition = getMenuPosition();

    var menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= paddleMargin) {} else if (menuPosition < menuEndOffset) {} else if (menuPosition >= menuEndOffset) {}
  });

  // scroll to left
  $(rightPaddle).on('click', function() {
    $('.content__game-popular').animate({
      scrollLeft: '900'
    }, scrollDuration);
  });

  // scroll to right
  $(leftPaddle).on('click', function() {
    $('.content__game-popular').animate({
      scrollLeft: '0'
    }, scrollDuration);
  });
}
