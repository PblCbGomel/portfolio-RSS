const divImg = document.querySelector('.images')
const containerImg = divImg.querySelectorAll('img')

const divButtons = document.querySelector('.portfolio-buttons')
const containerButtons = divButtons.querySelectorAll('button')
const timeYear = ['winter', 'spring', 'summer', 'autumn']

containerButtons.forEach((thisButton) => {
    thisButton.addEventListener('click', () => {
        containerButtons.forEach((b) => {
            if(b.classList.contains('active')) {
                b.classList.remove('active')
                b.classList.add('photo-button')

            }
        })
        thisButton.classList.remove('photo-button')
        thisButton.classList.add('active')
        for(let i = 0; i < 4; ++i) {
            if(thisButton.classList.contains(timeYear[i])) {
                for(let j = 1; j <= 6; ++j) {
                    containerImg[j - 1].src = './assets/img/' + timeYear[i] + '/' + j + '.jpg'
                }
            }
        }
    })
    
})