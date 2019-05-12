
// Open and close the Image Modal
var openModal = function(e) {

  var modal = document.getElementById('imgModal')
  var modalImg = document.getElementById('modalContent')

  modalImg.src = e.src;

  modal.style.display = "flex";

  var close = document.getElementById('close');

  close.addEventListener("click", function() {
    modal.style.display = "none";
  });
}

// Capture Article Module clicks
var capture = function(e) {
  console.log('Anchor tag hrefs have been left blank since link to article pages were not provided - can be linked to any page necessary such as a new article page');
  console.log(e);
}
