
export function createCursor() {
  const body = document.getElementById('body')
  const customCursor = document.createElement('div')
  customCursor.classList.add('custom-cursor')
  body.appendChild(customCursor)
}

export function getCoordinates(e) {
  const customCursor = document.querySelector('.custom-cursor')
  const cursorX = e.clientX
  const cursorY = e.clientY
  setTimeout(() => {
    customCursor.style.left = cursorX + 'px'
    customCursor.style.top = cursorY + 'px'
  },150)
}