'use strict';

// selecting the dom elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// open the modal
const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// assigning an event listener to each show modal button
for(let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}
// event listeners for the overlay and the x on the modal
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal);

// event listener to close the modal when escape key is pressed. 
document.addEventListener('keydown', function(event) {
  if(event.key === 'Escape') {
    closeModal();
  }
})