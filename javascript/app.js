// preloader

window.addEventListener("load", function () {
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = 0;
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 300);
  }, 3000);
});

var nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  if (pageYOffset > 100) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
});

var swiper = new Swiper(".header", {
  loop: true,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  effect: "fade",
  autoplay: true,
  autoplaySpeed: 1400,
});

// filter

var btn1 = document.getElementById("btn-2-1");
var btn2 = document.getElementById("btn-2-2");
var btn3 = document.getElementById("btn-2-3");
var btn4 = document.getElementById("btn-2-4");
var all = document.getElementById("all");
var origin = document.getElementById("origin");
var playstation = document.getElementById("playstation");
var steam = document.getElementById("steam");

btn1.addEventListener("click", function () {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  all.classList.add("active");
  origin.classList.remove("active");
  playstation.classList.remove("active");
  steam.classList.remove("active");
});

btn2.addEventListener("click", function () {
  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  all.classList.remove("active");
  origin.classList.add("active");
  playstation.classList.remove("active");
  steam.classList.remove("active");
});
btn3.addEventListener("click", function () {
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
  btn4.classList.remove("active");
  all.classList.remove("active");
  origin.classList.remove("active");
  playstation.classList.add("active");
  steam.classList.remove("active");
});
btn4.addEventListener("click", function () {
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.add("active");
  all.classList.remove("active");
  origin.classList.remove("active");
  playstation.classList.remove("active");
  steam.classList.add("active");
});

// style switcher

// toggle style switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// theme color

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
}

function changeColor() {
  alternateStyle.forEach((style) => {
    if (localStorage.getItem("color") === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// checking if color key exists

if (localStorage.getItem("color") !== null) {
  changeColor();
}

// theme light and dark mode

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  updateIcon();
});

function themeMode() {
  // checking if theme keys exist

  if (localStorage.getItem("theme") !== null) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.remove("dark");
    }
  } else {
    document.body.classList.add("dark");
  }
  updateIcon();
}
themeMode();

function updateIcon() {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.remove("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
}

// aos
AOS.init();

// hamburger animation

var hamb = document.getElementById("hamb");

hamb.addEventListener("click", function () {
  hamb.classList.toggle("active");
});
