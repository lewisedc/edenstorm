import { shouldElementsAnimate } from './animation';
import { shouldNavDisplay } from './navbar';

loop();

function loop() {
  shouldElementsAnimate();
  shouldNavDisplay();

  window.requestAnimationFrame(loop);
}
