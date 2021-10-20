"use strict";

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const projectsMenu = document.querySelector("#projects-page");

  let scrollPos = window.scrollY;

  // adds 'highlight' class to any menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    projectsMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    projectsMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add("highlight");
    projectsMenu.classList.remove("highlight");
    aboutMenu.classList.add("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
//Close Mobile Menu when clicking on menu item
//  TODO fix for middle size screens
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
