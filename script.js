// mobile menu

var ham = document.querySelector(".ham");
var menu = document.querySelector(".menu");
var openMenuBtn = document.querySelector(".menuIcon");
var closeMenuBtn = document.querySelector(".closeMenu");
var header = document.querySelector(".nav-scrolled");

ham.addEventListener("click", toggleMenu);

menu.classList.contains("showMenu");

function toggleMenu(){
  if(menu.classList.contains("showMenu")){
    menu.classList.remove("showMenu");
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "block";
  }else{
    menu.classList.add("showMenu");
    closeMenuBtn.style.display = "block";
    openMenuBtn.style.display = "none";
  }
}

// change background on scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    header.style.backgroundColor  = "#000000";
  } else {
    header.style.backgroundColor  = "transparent";
  }
}