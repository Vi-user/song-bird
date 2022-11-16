console.log('main page')
const paragraphList = document.querySelectorAll('.main-paragraph')
const container = document.querySelector('.main-index-block')
const startQuizBtn = document.querySelector('.start-quiz__btn')


for (let i = 0; i < paragraphList.length; i++) {
  setTimeout(() => {
    paragraphList[i].classList.add('show-paragraph')
  } , i*1000)
}

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function createSymbol() {
  const newEl = document.createElement('div');
  newEl.textContent = '?';
  const size = getRandomSize(10, 100)
  const incline = getRandomSize(0, 360)
  const {width, height} = container.getBoundingClientRect()
  const x = getRandomSize(0, width-size)
  const y = getRandomSize(0, height-size)

  newEl.classList.add('symbol-question');
  newEl.style.fontSize = `${size}px`
  newEl.style.transform  = `rotate(${incline}deg)`
  newEl.style.top = `${y}px`
  newEl.style.left = `${x}px`
  setTimeout(() => {
    newEl.remove()
  }, 1500)
  container.append(newEl)
}

setInterval(() => {
  createSymbol()
}, 600);

startQuizBtn.addEventListener('click', () => {
  window.location.href = './src/pages/quiz.html'
})