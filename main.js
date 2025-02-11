// toggle background active
const slideNavigator = (name) => {
  let slides = document.querySelectorAll(".bg-slide");
  slides.forEach((slide) => {
    slide.classList.remove("active");
    if (slide.classList.contains(name)) {
      slide.classList.add("active");
    }
  });
};

// switch background
window.addEventListener("load", () => {
  const slideBtnList = document.querySelectorAll(".slide-btn");
  slideBtnList.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      slideBtnList.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      slideNavigator(this.getAttribute("data-target"));
    });
  });
});

// activate sections

const sectionNavigator = (name) => {
  let sections = document.querySelectorAll("section");
  let header = document.querySelector("header");

  sections.forEach((section) => {
    section.classList.remove("section-show");
    if (section.classList.contains(name)) {
      section.classList.add("section-show");
      header.classList.add("active");
    }
  });
};

// Menu Toggle

const navList = document.getElementById("nav-list");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navList = document.getElementById("nav-list");
  // When we click on each nav__link, we remove the show-menu class
  navList.classList.remove("active");
  navToggle.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));



// navigation to sections

window.addEventListener("load", () => {
  const navLink = document.querySelectorAll(".nav__link");
  navLink.forEach((nav) => {
    nav.addEventListener("click", function (e) {
      e.preventDefault();
      navLink.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      sectionNavigator(this.getAttribute("data-target"));
      screen.width < 500 && toggleMenu();
    });
  });
});

// initial navigation

const initNavigation = () => {
  const navList = document.querySelectorAll(".nav-btn");
  navList.forEach((el) => {
    el.classList.remove("active");
    if (el.getAttribute("data-target") === "contact") {
      el.classList.add("active");
    }
  });
  sectionNavigator("contact");
};


// reset header to initial state

const resetHeader = () => {
  let header = document.querySelector("header");
  header.classList.remove("active");
};


// MIXITUP FILTER PORTFOLIO 


let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork)); 


