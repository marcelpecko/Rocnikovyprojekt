
/*
import { PATH_APP } from './state'

export const toggleButtonText = () => ({
  type: 'Toggle button text',
  path: [...PATH_APP, 'buttonText'],
  reducer: (state) => (state === 'Hello' ? 'World!' : 'Hello'),
})
*/

document.body.className += ' js'

let raf = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  setTimeout

let nextElementSibling = function(el) {
  do {
    el = el.nextSibling
  } while (el && el.nodeType !== 1)
  return el
}

let show = function(content) {
  content.style.display = 'block'
  content.style.height = ''
  let height = content.offsetHeight
  content.style.height = 0
  content.offsetHeight // layout trigger

  raf(() => {
    content.style.height = height + 'px'
  })
  content.setAttribute('data-open', '1')
}

let hide = function(content) {
  content.style.height = 0
  content.removeAttribute('data-open')
}

let toggle = function() {
  let content = nextElementSibling(this)

  if (content.getAttribute('data-open')) {
    hide(content)
  } else {
    show(content)
  }
}

let headers = document.querySelectorAll('.toggle-header')
for (let i = 0; i < headers.length; i++) {
  headers[i].onclick = toggle
}
