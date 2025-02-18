document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Function to toggle the menu
  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    navMenu.classList.toggle("active");
  });

  // Prevent clicks inside the nav menu from closing it
  navMenu.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from bubbling to the document
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(event.target)
    ) {
      navMenu.classList.remove("active");
    }
  });

  // Optional: Close menu when a link inside it is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active"); // Close the menu when a link is clicked
    });
  });
});

/////////////////////////scroll reveal///////////////////////
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}
///////////////////////////////////////////////////////////////

///////////////////////translation code///////////////////////

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
