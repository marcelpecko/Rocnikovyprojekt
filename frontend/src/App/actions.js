/*
import { PATH_APP } from './state'

export const toggleButtonText = () => ({
  type: 'Toggle button text',
  path: [...PATH_APP, 'buttonText'],
  reducer: (state) => (state === 'Hello' ? 'World!' : 'Hello'),
})
*/

document.body.className += ' js'

const raf =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  setTimeout

const nextElementSibling = function(el) {
  do {
    el = el.nextSibling
  } while (el && el.nodeType !== 1)
  return el
}

const show = function(content) {
  content.style.display = 'block'
  content.style.height = ''
  const height = content.offsetHeight
  content.style.height = 0
  content.offsetHeight // layout trigger

  raf(() => {
    content.style.height = `${height}px`
  })
  content.setAttribute('data-open', '1')
}

const hide = function(content) {
  content.style.height = 0
  content.removeAttribute('data-open')
}

const toggle = function() {
  const content = nextElementSibling(this)

  if (content.getAttribute('data-open')) {
    hide(content)
  } else {
    show(content)
  }
}

const headers = document.querySelectorAll('.toggle-header')
for (let i = 0; i < headers.length; i++) {
  headers[i].onclick = toggle
}
