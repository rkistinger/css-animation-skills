window.addEventListener('load', () => {
  document.addEventListener('mouseleave', (event) => {
    if (!event.relatedTarget) {
      // !event.relatedTarget = mouse left the window
      document.documentElement.classList.add('mouse-out')
    }
  })
  document.addEventListener('mouseenter', () => {
    document.documentElement.classList.remove('mouse-out')
  })
})
