import { createEffect, onCleanup } from "solid-js";

/**
 * A directive to trigger animations when an element becomes visible in the viewport
 * @param el The element to observe
 * @param options Options for the IntersectionObserver
 */
export const useIntersectionObserver = (
  el: HTMLElement,
  options: IntersectionObserverInit = { threshold: 0.1 },
) => {
  // Create an IntersectionObserver to detect when the element is visible
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // When the element is visible, remove the 'invisible' class
        // This will trigger the animation
        el.classList.remove("invisible");

        // Add a class to indicate that the element is visible
        // This will be used to trigger child animations
        el.classList.add("in-view");

        // Once the animation has been triggered, we don't need to observe anymore
        observer.unobserve(el);
      }
    }
  }, options);

  // Start observing the element
  observer.observe(el);

  // Clean up the observer when the component is unmounted
  onCleanup(() => {
    observer.disconnect();
  });
};

/**
 * A directive to apply the intersection observer to an element
 */
export const createIntersectionObserver = (
  options: IntersectionObserverInit = { threshold: 0.1 },
) => {
  return (el: HTMLElement) => {
    createEffect(() => {
      useIntersectionObserver(el, options);
    });
  };
};
