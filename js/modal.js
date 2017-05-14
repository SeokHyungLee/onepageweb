function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var modalSlideIndex = 1;
showModalSlides(modalSlideIndex);

function plusModalSlides(n) {
  showModalSlides(modalSlideIndex += n);
}

function currentModalSlide(n) {
  showModalSlides(modalSlideIndex = n);
}

function showModalSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {modalSlideIndex = 1}
  if (n < 1) {modalSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[modalSlideIndex-1].style.display = "block";
  dots[modalSlideIndex-1].className += " active";
  captionText.innerHTML = dots[modalSlideIndex-1].alt;
}
