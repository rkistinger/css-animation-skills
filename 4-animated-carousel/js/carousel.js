window.addEventListener('load', () => {
  function showNextQuote() {}

  function showQuote() {}

  function updateState(index) {}

  function updateCarouselPosition() {}

  function generatePips() {}

  function updatePips() {}

  function showFromPip() { }

  function setLeftClass()

  generatePips()

  const prevIndex = 0
  const currentIndex = 1
  const nextIndex = 2
  const lastIndex = document.querySelectorAll('.quote').length - 1
  const carouselRunning = true
  const interval = setInterval(() => {
    if (carouselRunning) {
      showNextQuote()
    }
  }, 4000)

  document.querySelector('.quote.previous').addEventListener('click', showQuote)
  document.querySelector('.quote.next').addEventListener('click', showQuote)
  document.querySelector('.pip.next').addEventListener('click', showFromPip)
})
