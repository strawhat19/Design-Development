// Portfolio
console.log(`Portfolio`);
console.log(`This is the Developer Console`);

// Fading In Main Body
// More Animation Variables Below
const body = $(`body`);
body.attr(`style`,`display: none`);
body.fadeIn(2000);

// Open and Close Mobile Menu
// Also Track How Many Times The User Clicks The Menu Button
// Get The Menu Click Count from Local Storage Which Can Be Found In Inspect > Application > Local Storage
// If Menu has never been clicked or Local Storage has been cleared, Menu Click Count = 0
// This Function Defines Actions to take place when the user clicks the Menu Button Toggle
openMobileMenu = (menuClickCount = localStorage.getItem(`Menu Click Count`) || 0) => {
    menuClickCount++; // This tells the Menu Click Count to Add 1 // Same as + 1
	let menuToggler = $(`#openMenuToggler`);
    let mobileMenu = $(`.mobileMenuLinks`);
	menuToggler.toggleClass(`clicked`);
    mobileMenu.toggleClass(`show`);
  if (mobileMenu.hasClass(`show`) && menuToggler.hasClass(`clicked`)) { // Menu Is Open
    // console.log(`Menu Is Open`);
    mobileMenu.removeClass(`hide`);
    mobileMenu.attr(`style`,``);
  } else { // Menu Is Closed
    //   console.log(`Menu Is Closed`);
      mobileMenu.removeClass(`show`);
      mobileMenu.toggleClass(`hide`);
      mobileMenu.fadeOut();
      mobileMenu.attr(`style`,``);
  } // Storing the # of clicks on the menu button
  console.log(`Menu has been clicked ${menuClickCount} times`);
  localStorage.setItem(`Menu Click Count`, menuClickCount);
}

// Intersection Observer
// An API That Lets Us Detect When Elements Are In ViewPort
let options = {
    root: null,
    rootMargin: `-250px 0px`,
    threshhold: 0.05
};

// Declaring New Observer To Use for Observing All Elements with Class of .observe
var observedItems = $(`.observe`);
console.log(`Total Elements Being Observed: ${observedItems.length}`);

let observer = new IntersectionObserver(inView, options);
observedItems.each((index,element) => {
    observer.observe(element);
})

// If The Element Is In The View Port
function inView(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            $(entry.target).children().attr(`style,animation:none;`)
            $(entry.target).fadeIn(5000);
            $(entry.target).children().html(`In User's View`);
            $(entry.target).toggleClass(`inView`);
            $(entry.target).removeClass(`notInView`);
            $(entry.target).removeClass(`animationEnded`);
        } else {
            $(entry.target).toggleClass(`notInView`);
            // $(entry.target).hide(1000);
            // $(entry.target).show(1000);
            // $(entry.target).attr(`style`,`display: block;`);
            // setTimeout(function() {
            //     // $(entry.target).addClass(`animationEnded`);
            // },5000)
        }
    })
}

// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
// triggerElement: '.notInView'
// })

// .setClassToggle('.notInView', 'animationended')
// .addTo(controller);

// $(`.notInView text`).on(`animationend`, function(event) {
//     $(event.target).parent().removeClass(`notInView`);
//     $(event.target).parent().removeClass(`inView`);
//     setTimeout(function() {
//         $(event.target).parent().addClass(`animationEnded`);
//     },5000)
// })

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

// Grow In 3 Second Animation
var growIn3s = $(`.growIn3s`);
growIn3s.show(3000);

// Deprecated

// Styled Console logs

// const consolelog = console.log;
// console.log = function (...args) {
//     return consolelog.apply(this, [Math.random()].concat(args));
// }

// Asyncronous Javascript
// if (window.innerWidth > screenWidth || window.innerWidth < screenWidth) {
//     console.log(screenWidth);
// };

// widthChange = (screenWidth) => {
//     setInterval(() => {
//         if (window.innerWidth > screenWidth || window.innerWidth < screenWidth) {
//             console.log(screenWidth);
//         };
//     },1000)
// }
// widthChangeLog = (callback) => {
//     setTimeout(() => {
//         callback();
//     },1000)
// }

// widthChangeLog(widthChange);

// setInterval((clearLog) => {
//     console.clear();
// },1000)