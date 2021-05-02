"use strict";
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navButton() {
    const x = document.getElementById("myLinks");
    const y = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    if (x.style.display === "none") {
      y.style.border = "none";
    } else {
      y.style.border = "1px solid honeydew";
    }
    
  }