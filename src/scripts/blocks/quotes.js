// This file initializes a fade slider.
const impure = {
  removeClassFromAll: (container, elementSelector, classToRemove) => {
    const elements = container.querySelectorAll(elementSelector);

    // Element lists are only array-like, so we have to force mapping here.
    [].map.call(elements, element => element.classList.remove(classToRemove));
  },

  setClassBySelector: (container, elementSelector, classToAdd) => {
    const element = container.querySelector(elementSelector);
    element.classList.add(classToAdd);
  },

  setNextActive: (container, slideClass, slideActive, linkClass, linkActive) => {
    let nextSlide = container.querySelector(`.${slideActive}`).nextElementSibling;
    if (!nextSlide || !nextSlide.classList || !nextSlide.classList.contains(slideClass)) {
      nextSlide = container.querySelector(`.${slideClass}`);
    }

    impure.removeClassFromAll(container, `.${slideClass}`, slideActive);
    impure.removeClassFromAll(container, `.${linkClass}`, linkActive);

    nextSlide.classList.add(slideActive);
    impure.setClassBySelector(container, `a[href="#${nextSlide.id}"]`, linkActive);
  },

  startInterval: (container, slideClass, slideActive, linkClass, linkActive, interval) => {
    return setInterval(
      impure.setNextActive.bind(
        null,
        container,
        slideClass,
        slideActive,
        linkClass,
        linkActive,
        interval
      ),
      interval
    );
  },
};

export default function initialize({
  containerClass = 'js--fade-slider',
  slideClass = 'js--fade-slider__slide',
  slideActiveClass = 'js--fade-slider__slide--active',
  linkClass = 'js--fade-slider__nav-link',
  linkActiveClass = 'js--fade-slider__nav--active',
  timeoutInterval = 3000,
} = {}) {
  const container = document.querySelector(`.${containerClass}`);

  if (!container) {
    return;
  }

  // Alias these functions and bind the container for brevity.
  const setClass = impure.setClassBySelector.bind(null, container);
  const removeClassFromAll = impure.removeClassFromAll.bind(null, container);

  const startLoop = impure.startInterval.bind(
    null,
    container,
    slideClass,
    slideActiveClass,
    linkClass,
    linkActiveClass,
    timeoutInterval
  );

  let looper = startLoop();

  // Find the first slide and nav item and activates them.
  setClass(`.${slideClass}`, slideActiveClass);
  setClass(`.${linkClass}`, linkActiveClass);

  // Add a click handler for the nav.
  container.addEventListener('click', event => {
    if (event.target.classList.contains(linkClass)) {
      const targetSlideId = event.target.href.split('#')[1];

      if (targetSlideId) {
        event.preventDefault();

        // Reset the active classes on slides and nav links.
        removeClassFromAll(`.${slideClass}`, slideActiveClass);
        removeClassFromAll(`.${linkClass}`, linkActiveClass);

        // Add active classes to the selected slide and nav link.
        setClass(`#${targetSlideId}`, slideActiveClass);
        setClass(`a[href="#${targetSlideId}"]`, linkActiveClass);

        // Restart the interval.
        clearInterval(looper);
        looper = startLoop();
      }
    }
  });
}
