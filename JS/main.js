// Function to get the navigation bar working with changing colors
// Get the navbar links
var navbarLinks = document
  .getElementsByClassName("navbar")[0]
  .getElementsByTagName("a");

// Set the home icon as active by default
navbarLinks[0].classList.add("active");

// Add event listeners to each navbar link
for (var i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    // Remove the "active" class from all links
    for (var j = 0; j < navbarLinks.length; j++) {
      navbarLinks[j].classList.remove("active");
    }

    // Add the "active" class to the clicked link
    this.classList.add("active");
  });
}

//Function to change the colors of social-links when the user reaches the end of the page
function changeIconColorOnScroll() {
  var icons = document.querySelectorAll(".social-icon");
  var pageHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Add a scroll event listener
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Check if the user has reached the bottom of the page
    if (scrollPosition >= pageHeight) {
      // Apply green color to the icons
      icons.forEach(function (icon) {
        icon.style.transition = "color 0.3s";
        icon.style.color = "#00E35D";
      });
    } else {
      // Reset the color to white
      icons.forEach(function (icon) {
        icon.style.transition = "color 0.3s";
        icon.style.color = "white";
      });
    }
  });
}

// Call the function to start monitoring the scroll position
changeIconColorOnScroll();

//Function to fade elements in when the user scrolls down
//Scroll effect animation activation
window.addEventListener("scroll", fadeInElements);

function fadeInElements() {
  var elements = document.querySelectorAll(".fade-in");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elementPosition = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
      element.style.opacity = 1;
      element.classList.remove(".fade-in");
    }
  }
}

// $("document").ready( function () {
//   alert('This website is still under construction. \nPlease understand you may experience missing information and/or browser issues');
// });
