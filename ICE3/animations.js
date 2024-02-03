console.log('animations.js loaded successfully')

// TODO: function fadeInOutTo()
// add following fade in out to the appropriate boxes
// fade out - display none 3000 ms (red-box)
// fade in- display to 1500 ms (red-box)
// fade to 2000 ms with 30% opacity (green-box)
// fade to 1000 ms with 50% opacity (blue-box)
// toggle the display (blue-box)

function fadeInOutTo() {
  
  // fade out - display none 3000 ms (red-box)
  $('.red-box').fadeOut(3000, function () {
    // fade in- display to 1500 ms (red-box)
    $(this).fadeIn(1500);
  });

  // fade to 2000 ms with 30% opacity (green-box)
  $('.green-box').fadeTo(2000, 0.3);

  // fade to 1000 ms with 50% opacity (blue-box)
  $('.blue-box').fadeTo(1000, 0.5, function () {
    // toggle the display (blue-box)
    $(this).toggle();
  });

}


// TODO: function hideElement()
// for the green box, toggle the display with hide, 1000 ms timeout
// for the green box, toggle the display with show, 1000 ms timeout
// for the green box, slide up 1000 ms timeout
// for the green box, slide down 1000 ms timeout
// for the green box, toggle slide state 1000 ms timeout
// for the green box, toggle slide state 1000 ms timeout

function hideElement() {
  // for the green box, toggle the display with hide, 1000 ms timeout
  $('.green-box').hide(1000);

  // for the green box, toggle the display with show, 1000 ms timeout
  $('.green-box').show(1000);

  // for the green box, slide up 1000 ms timeout
  $('.green-box').slideUp(1000);

  // for the green box, slide down 1000 ms timeout
  $('.green-box').slideDown(1000);

  // for the green box, toggle slide state 1000 ms timeout
  $('.green-box').slideToggle(1000);

  // for the green box, toggle slide state 1000 ms timeout
  $('.green-box').slideToggle(1000);
}

// TODO: function chainAnimations()
// for the blue box, fade to 50% opacity with 1000 ms timeout
// for the green box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout (use chaining)
// for the red box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout, delay by 1000ms, fade to 100% opacity with 1000ms timeout, delay  1000ms, then fade out (use chaining)

function chainAnimations() {
  // for the blue box, fade to 50% opacity with 1000 ms timeout
  $('.blue-box').fadeTo(1000, 0.5);

  // for the green box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout (use chaining)
  $('.green-box').delay(1000).fadeTo(1000, 0.5);

  // for the red box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout, delay by 1000ms, fade to 100% opacity with 1000ms timeout, delay  1000ms, then fade out (use chaining)
  $('.red-box').delay(1000).fadeTo(1000, 0.5).delay(1000).fadeTo(1000, 1).delay(1000).fadeOut();

}

// testing functions
fadeInOutTo();
hideElement(); 
chainAnimations();