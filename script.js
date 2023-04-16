// JavaScript Document
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("hidden");
  } else {
    document.querySelector(".navbar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};

$('.navbar-collapse a').on('touchstart', function(){
    $(".navbar-collapse").collapse('hide');
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
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
