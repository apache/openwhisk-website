import fadeSliderInit from './blocks/quotes';

// To start, remove the `no-js` class to enable JS-only styles.
document.body.classList.remove('no-js');

fadeSliderInit({
  containerClass: 'quotes--js-fader',
  slideClass: 'quotes__quote--js-fader',
  slideActiveClass: 'quotes__quote--active',
  linkClass: 'quotes__nav-link',
  linkActiveClass: 'quotes__nav-link--active',
  timeoutInterval: 8000,
});
