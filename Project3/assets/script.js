const docElm = document.documentElement;
const cardElm = document.querySelector('#card');
const titleElm = document.querySelector('#title');

const { clientWidth, clientHeight } = docElm;

// Stream of all mousemove events
const mouseMove$ = Rx.Observable
  .fromEvent(docElm, 'mousemove')
  .map(event => ({ x: event.clientX, y: event.clientY }));

// Stream of all touchmove events
const touchMove$ = Rx.Observable
  .fromEvent(docElm, 'touchmove')
  .map(event => ({
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  }));

// Combination of mousemove and touchmove streams
const move$ = Rx.Observable
  .merge(mouseMove$, touchMove$);

// Stream of requestAnimationFrame ticks
const animationFrame$ = Rx.Observable
  .interval(0, Rx.Scheduler.animationFrame);

// Linear interpolation function
function lerp(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const rate = 0.05;

  return {
    x: start.x + dx * rate,
    y: start.y + dy * rate,
  };
}

// Mouse/touch moves linearly interpolated
// on every animation frame
const smoothMove$ = animationFrame$
  .withLatestFrom(move$, (tick, move) => move)
  .scan(lerp);

// Apply values to styles
smoothMove$.subscribe(pos => {
  const rotX = (pos.y / clientHeight * -50) + 25;
  const rotY = (pos.x / clientWidth * 50) - 25;

  cardElm.style.cssText = `
    transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
  `;
});
