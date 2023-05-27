export default function ({ app }) {
  function adjustRem () {
    const rootElement = document.documentElement
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const fontSize = 16 / 18 * (windowWidth * windowHeight / 100 / 1000)
    rootElement.style.fontSize = fontSize + 'px'
  }

  window.addEventListener('resize', adjustRem)

  window.addEventListener('DOMContentLoaded', adjustRem)

  app.router.afterEach((to, from) => {
    adjustRem()
  })
}
