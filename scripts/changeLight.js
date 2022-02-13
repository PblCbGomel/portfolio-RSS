const buttonLight = document.querySelector('.light')
const divButtons1 = document.querySelector('.portfolio-buttons')
const containerButtons1 = divButtons1.querySelectorAll('button')

document.querySelector('.hamburger-menu').querySelector('input').addEventListener('click', () => {
    if(document.querySelector('.hamburger-menu').querySelector('input').checked && buttonLight.classList.contains('moon')) {
        document.querySelector('label').classList.remove('mbh-moon')
        document.querySelector('label').classList.add('mbh-sun')
    }
    else {
        document.querySelector('label').classList.remove('mbh-sun')
        document.querySelector('label').classList.add('mbh-moon')
    }
})

if(localStorage.getItem('light-sun') == 'sun') {
    buttonLight.classList.toggle('sun')
    buttonLight.classList.toggle('moon')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.querySelectorAll('.section-title').forEach((h) => {
        h.classList.remove('section-title')
        h.classList.add('section-title-black')
    })
    containerButtons1.forEach((b) => {
        b.classList.remove('moon-btn')
        b.classList.add('sun-btn')
        b.addEventListener('mouseover', () => {
            b.style.color = 'white'
            b.style.backgroundColor = '#BDAE82'
        })
        b.addEventListener('mouseout', () => {
            b.removeAttribute('style')
        })
    })
    document.querySelector('.burger-nav').style.backgroundColor = 'white'
    document.querySelector('.burger-nav').querySelectorAll('a').forEach((a) => {
        a.style.color = 'black'
    })    
}

buttonLight.addEventListener('click', () => {
    buttonLight.classList.toggle('sun')
    buttonLight.classList.toggle('moon')
    if(buttonLight.classList.contains('moon')) { 
        localStorage.setItem('light-sun', 'sun') 
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        document.querySelectorAll('.section-title').forEach((h) => {
            h.classList.remove('section-title')
            h.classList.add('section-title-black')
        })
        containerButtons1.forEach((b) => {
            b.classList.remove('moon-btn')
            b.classList.add('sun-btn')
            b.addEventListener('mouseover', () => {
                b.style.color = 'white'
                b.style.backgroundColor = '#BDAE82'
            })
            b.addEventListener('mouseout', () => {
                b.removeAttribute('style')
            })
        })
        document.querySelector('.burger-nav').style.backgroundColor = 'white'
        document.querySelector('.burger-nav').querySelectorAll('a').forEach((a) => {
            a.style.color = 'black'
        })
    } else {
        localStorage.removeItem('light-sun')
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        document.querySelectorAll('.section-title-black').forEach((h) => {
            h.classList.remove('section-title-black')
            h.classList.add('section-title')
        })
        containerButtons1.forEach((b) => {
            b.classList.add('moon-btn')
            b.classList.remove('sun-btn')
            b.addEventListener('mouseover', () => {
                b.style.color = 'white'
            })
            b.addEventListener('mouseout', () => {
                b.removeAttribute('style')
            })
        })
        document.querySelector('.burger-nav').style.backgroundColor = 'black'
        document.querySelector('.burger-nav').querySelectorAll('a').forEach((a) => {
            a.style.color = 'white'
        })
    }
})
