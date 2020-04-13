window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.show-on-scroll')

  /* Method 1 - continually check if the elements are in view */
  // function markVisibleElements(elements) {
  //   function isElementInViewport(el) {
  //     const rect = el.getBoundingClientRect()

  //     return (
  //       (rect.top <= 0 && rect.bottom >= 0) ||
  //       (rect.bottom >=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //         rect.top <=
  //           (window.innerHeight || document.documentElement.clientHeight)) ||
  //       (rect.top >= 0 &&
  //         rect.bottom <=
  //           (window.innerHeight || document.documentElement.clientHeight))
  //     )
  //   }

  //   elements.forEach((element) => {
  //     if (isElementInViewport(element)) {
  //       element.classList.add('is-visible')
  //     } else {
  //       element.classList.remove('is-visible')
  //     }
  //   })

  //   // rAF executes the callback when the browser is ready to prevent paint/layout disruption.
  //   // We usually want to recursively call this.
  //   requestAnimationFrame(() => {
  //     markVisibleElements(elements)
  //   })
  // }

  // // Call the loop for the first time
  // markVisibleElements(elements)

  /* Method 2 - IntersectionObserver */
  const observer = new IntersectionObserver((entries) => {
    // handle intersection changes
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      } else {
        entry.target.classList.remove('is-visible')
      }
    })
  })

  elements.forEach((element) => {
    observer.observe(element)
  })
})
