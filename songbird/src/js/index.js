console.log('main page')
const paragraphList = document.querySelectorAll('.main-paragraph')


for (let i = 0; i < paragraphList.length; i++) {
  setTimeout(() => {
    paragraphList[i].classList.add('show-paragraph')
  } , i*1000)
}