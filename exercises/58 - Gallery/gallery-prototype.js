function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  //references the instance of the gallery we created
  this.gallery = gallery; 

  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  function openModal() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (this.modal.matches('.open')) {
      console.info('Madal already open');
      return; // stop the function from running
    }
    this.modal.classList.add('open');

    // Event listeners to be bound when we open the modal:
    window.addEventListener('keyup', handleKeyUp);
    this.nextButton.addEventListener('click', showNextImage);
    this.prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    this.modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard..
    window.removeEventListener('keyup', handleKeyUp);
    this.nextButton.removeEventListener('click', showNextImage);
    this.prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    // update the modal with this info
    console.log(el);
    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p').textContent = el.dataset.description;
    this.currentImage = el;
    openModal();
  }

  // These are our Event Listeners!
  this.images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );

  // loop over each image
  this.images.forEach(image => {
    // attach an event listener for each image
    image.addEventListener('keyup', e => {
      // when that is keyup'd, check if it was enter
      if (e.key === 'Enter') {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', handleClickOutside);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
