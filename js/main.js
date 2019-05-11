

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
