const elementsToShow = document.querySelectorAll('.show-on-scroll');

initialise();

function initialise() {
  elementsToShow.forEach(element => {
    element.classList.add('waiting-to-animate');
  });
}

export function shouldElementsAnimate() {
  elementsToShow.forEach(element => {
    if (isElementInViewport(element)) {
      if (element.tagName === 'IMG') {
        element.style.animationName = 'fadeIn';
      } else {
        element.style.animationName = 'fadeInSlideUp';
      }
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const positionToShow = (window.innerHeight / 100) * 80;

  if (rect.top < positionToShow) return true;
  return false;
}
