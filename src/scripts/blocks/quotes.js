// This file initializes a fade slider.
const removeClassFromAll = (container, commonClass, classToRemove) => {
  const allSlides = container.getElementsByClassName(commonClass);
  [].map.call(allSlides, slide => slide.classList.remove(classToRemove));
}

export default function initialize({
  containerClass = 'js--fade-slider',
  slideClass = 'js--fade-slider__slide',
  slideActiveClass = 'js--fade-slider__slide--active',
  navClass = 'js--fade-slider__nav',
  navLinkClass = 'js--fade-slider__nav-link',
  navLinkActiveClass = 'js--fade-slider__nav--active',
  timeout = 3000,
} = {}) {
  const container = document.querySelector(`.${containerClass}`);
  container.querySelector(`.${slideClass}`).classList.add(slideActiveClass);
  container.querySelector(`.${navLinkClass}`).classList.add(navLinkActiveClass);

  // Add a click handler for the nav.
  container.addEventListener('click', event => {
    let element = event.target;

    do {
      if (typeof element.classList === 'undefined') {
        continue;
      }

      if (element.classList.contains(navClass)) {
        event.preventDefault();

        const targetSlideID = event.target.href.split('#')[1];
        const targetSlide = document.getElementById(targetSlideID);

        if (targetSlide) {

          // Reset the active classes on slides and nav links.
          removeClassFromAll(container, slideClass, slideActiveClass);
          removeClassFromAll(container, navLinkClass, navLinkActiveClass);

          // Add active classes to the selected slide and nav link.
          targetSlide.classList.add(slideActiveClass);
          event.target.classList.add(navLinkActiveClass);
        }

        return;
      }
    } while ((element = element.parentNode));
  });
}

/*
 * 1. Find the slider container
 * 2. Identify the slides
 * 3. Set the first slide to active
 * 4. Add a click handler to the nav
 * 5. Set a timeout to move between the slides
 */
