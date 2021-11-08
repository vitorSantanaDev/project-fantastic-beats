export default function outSideClick(element, events, callback) {
  const html = document.documentElement
  const dataOutside = 'data-outside'

  if(!element.hasAttribute(dataOutside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutSideClick)
    })
    element.setAttribute(dataOutside, '')
  }
 
  function handleOutSideClick(event) {
    if(!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutSideClick)
      })
      callback()
      element.removeAttribute(dataOutside, '')
    }
  }
}