 // Get the navbar links
 var navbarLinks = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");
    
 // Set the home icon as active by default
 navbarLinks[0].classList.add("active");
 
 // Add event listeners to each navbar link
 for (var i = 0; i < navbarLinks.length; i++) {
   navbarLinks[i].addEventListener("click", function() {
     // Remove the "active" class from all links
     for (var j = 0; j < navbarLinks.length; j++) {
       navbarLinks[j].classList.remove("active");
     }
 
     // Add the "active" class to the clicked link
     this.classList.add("active");
   });
 }