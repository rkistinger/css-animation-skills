const options = document.querySelectorAll('.option')

options.forEach((option) => {
  option.addEventListener('mouseover', (event) => {
    option.classList.add('highlighted')
  })

  option.addEventListener('mouseleave', () => {
    option.classList.remove('highlighted')
  })
})
