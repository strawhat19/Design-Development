// Portfolio
console.log(`Portfolio`);
console.log(`This is the Developer Console`);

// Fading In Main Body
const body = $(`body`);
body.attr(`style`,`display: none`);
body.fadeIn(2000);

// Fade In 1 Second Animation
var fadeIn1s = $(`.fadeIn1s`);
fadeIn1s.attr(`style`,`display: none`);
fadeIn1s.fadeIn(1000);

// Fade In 3 Second Animation
var fadeIn3s = $(`.fadeIn3s`);
fadeIn3s.attr(`style`,`display: none`);
fadeIn3s.fadeIn(3000);

// Fade In 5 Second Animation
var fadeIn5s = $(`.fadeIn5s`);
fadeIn5s.attr(`style`,`display: none`);
fadeIn5s.fadeIn(5000);

// // Fade In 1 Second Animation
// var fadeIn1s = $(`.fadeIn1s`);
// fadeIn1s.attr(`style`,`display: none`);
// fadeIn1s.fadeIn(1000);

// Grow In 3 Second Animation
var growIn3s = $(`.growIn3s`);
growIn3s.show(3000);

// // Fade In 5 Second Animation
// var fadeIn5s = $(`.fadeIn5s`);
// fadeIn5s.attr(`style`,`display: none`);
// fadeIn5s.fadeIn(5000);



// Open and Close Mobile Menu
openMobileMenu = () => {
	var menuToggler = $(`#openMenuToggler`);
    var mobileMenu = $(`.mobileMenuLinks`);
	menuToggler.toggleClass(`clicked`);
    mobileMenu.toggleClass(`show`);
  if (mobileMenu.hasClass(`show`) && menuToggler.hasClass(`clicked`)) {
    console.log(`Menu Is Open`);
    mobileMenu.removeClass(`hide`);
    mobileMenu.attr(`style`,``);
  } else {
      console.log(`Menu Is Closed`);
      mobileMenu.removeClass(`show`);
      mobileMenu.toggleClass(`hide`);
      mobileMenu.fadeOut();
      mobileMenu.attr(`style`,``);
  }
}