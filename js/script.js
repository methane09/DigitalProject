const btnRight = document.querySelector('.btn__arrow--right');
const btnLeft = document.querySelector('.btn__arrow--left');
const images = document.querySelectorAll('.image img');
const pageSpan = document.querySelector('.navigation-page span:first-child');

let currentIndex = 0;

function updateDisplay() {
  for (let i = 0; i < images.length; i++) {
    images[i].hidden = i !== currentIndex;
  }
  pageSpan.textContent = `0${currentIndex + 1}`;

  if (currentIndex === 0) {
    btnLeft.classList.add('active');
  } else {
    btnLeft.classList.remove('active');
  }
  if (currentIndex === 1) {
    btnRight.classList.add('active');
  } else {
    btnRight.classList.remove('active');
  }
}

btnRight.addEventListener('click', ()=> {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateDisplay();
  }
});

btnLeft.addEventListener('click', ()=> {
  if (currentIndex > 0) {
    currentIndex--;
    updateDisplay();
  }
});

updateDisplay();