const nav = document.querySelector('.nav');

let pageScroll;
let lastPageScroll;

export function shouldNavDisplay() {
  lastPageScroll = pageScroll;
  pageScroll = window.pageYOffset;

  if (pageScroll === 0) {
    nav.classList.remove('scrolled');
  } else if (lastPageScroll > pageScroll) {
    nav.classList.add('scrolled');
  } else if (lastPageScroll < pageScroll) {
    nav.classList.remove('scrolled');
  }
}
