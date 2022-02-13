const languageUl = document.querySelector('.lang').querySelectorAll('li')
const navRus = ['Навыки', 'Портфолио', 'Видео', 'Цены', 'Контакты']
const navEn = ['Skills', 'Portfolio', 'Video', 'Price', 'Contacts']
const h2Rus = ['Навыки', 'Портфолио', 'Видео', 'Цены', 'Связь со мной']
const h2En = ['Skills', 'Portfolio', 'Video', 'Price', 'Contact me']
const skillsNameRu = ['Фотография', 'Видеосъемка', 'Ретушь', 'Звук']
const skillsDescriptionRu = ['Высококачественные фото в студии и на природе', 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами', 'Я стремлюсь к тому, чтобы фотография превосходила реальность', 'Профессиональная запись звука для видео, рекламы, портфолио']
const skillsNameEn = ['Digital photography', 'Video shooting', 'Rotouch', 'Audio']
const skillsDescriptionEn = ['High-quality photos in the studio and on the nature', 'Capture your moments so that they always stay with you', 'I strive to make photography surpass reality', 'Professional sounds recording for video, advertising, portfolio']
const timeButtonRu = ['Зима', 'Весна', 'Лето', 'Осень']
const timeButtonEn = ['Winter', 'Spring', 'Summer', 'Autumn']
const stdPriceRu = {
    'l1': 'Одна локация',
    'l2': '120 цветных фото',
    'l3': '12 отретушированных фото',
    'l4': 'Готовность через 2-3 недели',
    'l5': 'Макияж, визаж'
}
const premPriceRu = {
    'l1': 'Одна-две локации',
    'l2': '200 цветных фото',
    'l3': '20 отретушированных фото',
    'l4': 'Готовность через 1-2 недели',
    'l5': 'Макияж, визаж'
}
const goldPriceRu = {
    'l1': 'Три локации и больше',
    'l2': '300 цветных фото',
    'l3': '50 отретушированных фото',
    'l4': 'Готовность через 1 неделю',
    'l5': 'Макияж, визаж, прическа'
}
const stdPriceEn = {
    'l1': 'One location',
    'l2': '120 photos in color',
    'l3': '12 photos in retouch',
    'l4': 'Readiness 2-3 weeks',
    'l5': 'Make up, visage',
}
const premPriceEn = {
    'l1': 'One or two locations',
    'l2': '200 photos in color',
    'l3': '20 photos in retouch',
    'l4': 'Readiness 1-2 weeks',
    'l5': 'Make up, visage',
}
const goldPriceEn = {
    'l1': 'Three locations or more',
    'l2': '300 photos in color',
    'l3': '50 photos in retouch',
    'l4': 'Readiness 1 week',
    'l5': 'Make up, visage, hairstyle',
}

const allPriceBlockRu = [stdPriceRu, premPriceRu, goldPriceRu]
const allPriceBlockEn = [stdPriceEn, premPriceEn, goldPriceEn]
const allTypePriceRu = ['Стандарт', 'Премиум', 'Золотой']
const allTypePriceEn = ['Standard', 'Premium', 'Gold']

if(localStorage.getItem('lang') == ('ru')) {
    document.title = 'Портфолио'
    document.querySelector('h1').textContent = 'Алекса Райс'
    for(let i = 0; i < 5; ++i) {
        document.querySelector('nav').querySelectorAll('a')[i].textContent = navRus[i]
    }
    document.querySelector('.hero').querySelector('p').textContent = 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом'
    document.querySelector('.hero').querySelector('button').textContent = 'Пригласить'
    for(let i = 0; i < 5; ++i) {
        document.querySelectorAll('h2')[i].textContent = h2Rus[i]
    }
    for(let i = 0; i < 4; ++i) {
        document.querySelector('.skills-items').querySelectorAll('span')[i].textContent = skillsNameRu[i]
        document.querySelector('.skills-items').querySelectorAll('p')[i].textContent = skillsDescriptionRu[i]
    }
    for(let i = 0; i < 4; ++i) {
        document.querySelector('.portfolio-buttons').querySelectorAll('button')[i].textContent = timeButtonRu[i]
    }
    for(let i = 0; i < 3; ++i) {
        for(let j = 0; j < 5; ++j) {
            document.querySelectorAll('.price-block')[i].querySelectorAll('li')[j].textContent = allPriceBlockRu[i]['l' + (j + 1)]
        }
        document.querySelectorAll('.price-block')[i].querySelector('button').textContent = 'Заказать съемку'
        document.querySelectorAll('.price-block')[i].querySelector('h3').textContent = allTypePriceRu[i]
    }
    document.querySelector('.contacts').querySelector('button').textContent = 'Отправить'
    languageUl[0].classList.remove('active-text')
    languageUl[2].classList.add('active-text')
    document.querySelector('form').querySelector('.phone').placeholder = 'Телефон'
    document.querySelector('textarea').placeholder = 'Сообщение'
}

languageUl.forEach((lang) => {
    if(lang.classList.contains('slash')) {
        return
    }
    lang.addEventListener('click', () => {
        if(!lang.classList.contains('active-text')) {
            languageUl.forEach((lang1) => {
                if(lang1.classList.contains('slash')) {
                    return
                }
                lang1.classList.toggle('active-text')
                if(lang1.classList.contains('active-text') && lang1.textContent == 'ru') {
                    localStorage.removeItem('lang')
                    localStorage.setItem('lang', 'ru')
                    document.title = 'Портфолио'
                    document.querySelector('h1').textContent = 'Алекса Райс'
                    for(let i = 0; i < 5; ++i) {
                        document.querySelector('nav').querySelectorAll('a')[i].textContent = navRus[i]
                    }
                    document.querySelector('.hero').querySelector('p').textContent = 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом'
                    document.querySelector('.hero').querySelector('button').textContent = 'Пригласить'
                    for(let i = 0; i < 5; ++i) {
                        document.querySelectorAll('h2')[i].textContent = h2Rus[i]
                    }
                    for(let i = 0; i < 4; ++i) {
                        document.querySelector('.skills-items').querySelectorAll('span')[i].textContent = skillsNameRu[i]
                        document.querySelector('.skills-items').querySelectorAll('p')[i].textContent = skillsDescriptionRu[i]
                    }
                    for(let i = 0; i < 4; ++i) {
                        document.querySelector('.portfolio-buttons').querySelectorAll('button')[i].textContent = timeButtonRu[i]
                    }
                    for(let i = 0; i < 3; ++i) {
                        for(let j = 0; j < 5; ++j) {
                            document.querySelectorAll('.price-block')[i].querySelectorAll('li')[j].textContent = allPriceBlockRu[i]['l' + (j + 1)]
                        }
                        document.querySelectorAll('.price-block')[i].querySelector('button').textContent = 'Заказать съемку'
                        document.querySelectorAll('.price-block')[i].querySelector('h3').textContent = allTypePriceRu[i]
                    }
                    document.querySelector('.contacts').querySelector('button').textContent = 'Отправить'
                    document.querySelector('form').querySelector('.phone').placeholder = 'Телефон'
                    document.querySelector('textarea').placeholder = 'Сообщение'
                }
                if(lang1.classList.contains('active-text') && lang1.textContent == 'en') {
                    localStorage.removeItem('lang')
                    document.title = 'Portfolio'
                    document.querySelector('h1').textContent = 'Alexa Rise'
                    for(let i = 0; i < 5; ++i) {
                        document.querySelector('nav').querySelectorAll('a')[i].textContent = navEn[i]
                    }
                    document.querySelector('.hero').querySelector('p').textContent = 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise'
                    document.querySelector('.hero').querySelector('button').textContent = 'Hire me'
                    for(let i = 0; i < 5; ++i) {
                        document.querySelectorAll('h2')[i].textContent = h2En[i]
                    }
                    for(let i = 0; i < 4; ++i) {
                        document.querySelector('.skills-items').querySelectorAll('span')[i].textContent = skillsNameEn[i]
                        document.querySelector('.skills-items').querySelectorAll('p')[i].textContent = skillsDescriptionEn[i]
                    }
                    for(let i = 0; i < 4; ++i) {
                        document.querySelector('.portfolio-buttons').querySelectorAll('button')[i].textContent = timeButtonEn[i]
                    }
                    for(let i = 0; i < 3; ++i) {
                        for(let j = 0; j < 5; ++j) {
                            document.querySelectorAll('.price-block')[i].querySelectorAll('li')[j].textContent = allPriceBlockEn[i]['l' + (j + 1)]
                        }
                        document.querySelectorAll('.price-block')[i].querySelector('button').textContent = 'Order shooting'
                        document.querySelectorAll('.price-block')[i].querySelector('h3').textContent = allTypePriceEn[i]
                    }
                    document.querySelector('.contacts').querySelector('button').textContent = 'Send message'
                    document.querySelector('form').querySelector('.phone').placeholder = 'Phone'
                    document.querySelector('textarea').placeholder = 'Message'
                }
            })
        }
    })
})