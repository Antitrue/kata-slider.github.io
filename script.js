const btn = document.querySelector('.trademarks-btn')
const list = document.querySelector('.list')
const effect = document.querySelector('.trademarks-btn::after')

btn.addEventListener('click', () => {
  if (list.classList.contains('list--open')) {
    list.classList.remove('list--open')
    btn.classList.remove('trademarks-btn--open')
    btn.textContent = 'Показать всё'
  } else {
    list.classList.add('list--open')
    btn.classList.add('trademarks-btn--open')
    btn.textContent = 'Скрыть'
  }
})

var init = false
var swiper
function swiperCard() {
  if (window.innerWidth <= 750) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        freeMode: true,
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)
