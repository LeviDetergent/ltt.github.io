// JavaScript Document
let prevScrollpos = window.pageYOffset;
let isNavVisible = true;

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");
  
  // Check window width and only run auto hide code for desktop devices
  const desktopBreakpoint = 992;
  if (window.innerWidth >= desktopBreakpoint) {
    if (prevScrollpos > currentScrollPos) {
      navbar.classList.remove("hidden");
      if (!isNavVisible) {
        navbar.classList.add("scrolled-up");
        navbar.classList.remove("scrolled-down");
        isNavVisible = true;
      }
    } else {
      navbar.classList.add("hidden");
      navbar.classList.add("scrolled-down");
      navbar.classList.remove("scrolled-up");
      isNavVisible = false;
    }
  } else {
    // Always show navbar for tablet devices
    navbar.classList.remove("hidden");
    navbar.classList.remove("scrolled-up");
    navbar.classList.remove("scrolled-down");
    isNavVisible = true;
  }
  
  prevScrollpos = currentScrollPos;
});

// Adjust navbar behavior on window resize
window.addEventListener("resize", function() {
  const desktopBreakpoint = 992;
  const navbar = document.querySelector(".navbar");

  // If window width is less than desktop breakpoint, always show navbar and remove auto hide classes
  if (window.innerWidth < desktopBreakpoint) {
    navbar.classList.remove("hidden");
    navbar.classList.remove("scrolled-up");
    navbar.classList.remove("scrolled-down");
    isNavVisible = true;
  } else {
    // If window width is greater than or equal to desktop breakpoint, reset navbar visibility
    isNavVisible = true;
  }
});

 // Open the modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Show the current slide
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  // Close the modal when the user clicks outside the modal
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      closeModal();
    }
  };
