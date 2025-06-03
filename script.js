'use strict';

/** add Event Listener on multiple elements */
const addEventOnELements = function(elements, eventType, callback) {
    for (let i=0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/** Preloader
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});


/** 
 * Mobile Navbar
 * 
 * show the mobile navbar when click menu button 
 * and hidden after click menu close button or overlay 
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnELements(navTogglers, "click", toggleNav);



/* Header & BACK TOP BTN
active header & back top btn when window scroll down to 100px
*/

const header = document.querySelector("[data-header]")
const backTopbtn = document.querySelector("[data-back-top-btn]")

const activeElementOnScroll = function () {
    if(window.scrollY > 100) {
        header.classList.add("active");
        backTopbtn.classList.add("active");
    }
    else{
        header.classList.remove("active");
        backTopbtn.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);


/** #SCROLL REVEAL */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementsOnScroll = function () {
    for(let i=0, len = revealElements.length; i < len; i++) {
        if(revealElements[i].getBoundingClientRect().top < window.innerHeight /1.15) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}


window.addEventListener("scroll", revealElementsOnScroll);

window.addEventListener("load", revealElementsOnScroll);

