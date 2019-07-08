const nav = document.querySelector('.nav');

let pageScroll;
let lastPageScroll;

export function shouldNavDisplay() {
  lastPageScroll = pageScroll;
  pageScroll = window.pageYOffset;

  if (lastPageScroll > pageScroll && pageScroll > 100) {
    nav.style.position = 'fixed';
    nav.style.animationName = 'slideDown';
  } else if (lastPageScroll < pageScroll) {
    nav.style.position = 'absolute';
    nav.style.animationName = '';
  }
}
