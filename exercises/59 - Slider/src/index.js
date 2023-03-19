//Step 1-define function and constants
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));

function Slider(slider) {
  //add check whether someone has passed slider or not
  if(!slider instanceof Element) {
    throw new Error('No slider passed in');
  }

  //define constants to keep track of current, next, and previous slides
  let prev;
  let current;
  let next;

//define each of two sliders on page
//when we use querySelector, it always returns an element
//when we create a div or span, it inherits all base attributes from Element in browser
  const slides = slider.querySelector('.slides');

  //define buttons that select HTML element buttons on page
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  //Step 2--build out start Slider function to begin populating variables
  function startSlider() {
    //set current variable to be either first slide or where slider has class of 'current'
    current = slider.querySelector('.current') || slides.firstElementChild;
    //in prev, nextSibling gives us a 'node' but nextElementSibling only returns Elements
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  //Step 3-create function applyClasses and take current slide and add class of 'current' to it
  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  //Step 4-create 'move' function that takes in direction like back or forward
  //will strip all current classes off slides
  function move(direction) {
    //add prev, current, and next as an array so we don't have to declare in each use
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();

  //step 5-add Event Listeners to buttons
  //pass 'back' argument to move function as 'direction'
  prevButton.addEventListener('click', ()=> move('back'));
  //for nextButton we don't have to pass argument because it hits 'else' condition
  nextButton.addEventListener('click', move);
}

