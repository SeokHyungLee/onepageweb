// Get the modal
var modal = document.getElementById('myModal_1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('modal_1');
var modalImg = document.getElementById("modal_img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
