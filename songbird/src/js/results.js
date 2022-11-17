const score = sessionStorage.getItem('score');
const mainSection = document.querySelector('main')
const resultBlock = document.querySelector('.result-quantity')

window.onload = function () {
  console.log('results page');
  resultBlock.textContent = score;
  const isMaxResult = checkMaxResults();

  if (!isMaxResult) {
    createBtnRestart()
  }

}

function createEl(tag, ...classes) {
  const node = document.createElement(tag);
  node.classList.add(...classes);
  return node;
}

function createBtnRestart() {
  const restartBtn = createEl('button', 'results-block__button')
  restartBtn.textContent = 'restart quiz'
  restartBtn.addEventListener('click', restartGame)
  mainSection.append(restartBtn)
}

function restartGame() {
  sessionStorage.removeItem('score');
  window.location.href = '../pages/quiz.html';
}

//?? to set in session max result as a function
function checkMaxResults() {
  return (score === '30')
}