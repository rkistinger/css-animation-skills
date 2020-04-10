const anchors = document.querySelectorAll('.anchor-tooltip')

anchors.forEach((anchor) => {
  const tooltip = document.createElement('span')
  tooltip.classList.add('title-tooltip')
  tooltip.innerHTML = anchor.getAttribute('title')

  anchor.appendChild(tooltip)
})
