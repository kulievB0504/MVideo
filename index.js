const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-btn__burger')
let menuOpen = false;
menuBtn.onclick = () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBurger.style.setProperty('--before-bg-color', 'white');
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        menuBurger.style.setProperty('--before-bg-color', 'white');
        menuOpen = false;


    }
};



const slides = document.querySelectorAll('.slides')
const prev_btn = document.querySelector('.prv_b')
const next_btn = document.querySelector('.nxt_b')

let slide_idx = 0

function SlideTransparent(n) {
    if (n === slides.length) {
        slide_idx = 0
    }
    if (n < 0) {
        slide_idx = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide', 'fade'))
    slides[slide_idx].classList.remove('hide')


}
slides.forEach((el, idx) => {
    if (idx !== 0) {
        el.classList.add('hide')
    }
})


next_btn.onclick = () => {
    slide_idx++
    SlideTransparent(slide_idx)
}
prev_btn.onclick = () => {
    slide_idx--
    SlideTransparent(slide_idx)
}


const trans = document.createElement('div')
const cashback = document.createElement('button')
const arrowLink = document.createElement('a')
const arrowImg = document.createElement('img')

let smartphones = document.querySelector('.smartphones')

trans.classList.add('trans')
cashback.classList.add('btn')
cashback.innerHTML = "Кешбэк 20%"
arrowLink.setAttribute('href', "#")
arrowImg.setAttribute('src', './img/8445642_right_arrow_icon.svg')

smartphones.append(trans)
trans.append(cashback, arrowLink)
arrowLink.append(arrowImg)


const product = document.createElement('div')
const productImg = document.createElement('img')

product.classList.add('product')
productImg.setAttribute('src', './img/50170400bb-removebg-preview.png')

smartphones.append(product)
product.append(productImg)

const rating = document.createElement('div')
const starImg = document.createElement('img')
const starsRate = document.createElement('div')
const personsReviews = document.createElement('p')

rating.classList.add('rating')
starImg.setAttribute('src', './img/216411_star_icon.svg')
starsRate.classList.add('stars_rate')
starsRate.innerHTML = "4.4"
personsReviews.classList.add('reviews')
personsReviews.innerHTML = '129 отзывов'

smartphones.append(rating)
rating.append(starImg, starsRate, personsReviews)

const shipmentLink = document.createElement('a')
shipmentLink.setAttribute('href', "#")
shipmentLink.classList.add('shipment_two')
shipmentLink.innerHTML = 'Смартфон HONOR X8 6/128GB Midnight Black'

smartphones.append(shipmentLink)

const priceMain = document.createElement('div')
const price = document.createElement('p')
const realPrice = document.createElement('span')

priceMain.classList.add('price__main')
price.classList.add('price')
price.innerHTML = '13 999 ₽'
realPrice.classList.add('realprice')
realPrice.innerHTML = '23 999'

smartphones.append(priceMain)
priceMain.append(price, realPrice)


const cashbackBox = document.createElement('div')
const cashbackImg = document.createElement('img')
const cashbackB = document.createElement('b')
const cashbackP = document.createElement('p')

cashbackBox.classList.add('cashback_box')
cashbackImg.setAttribute('src', 'https://assets-cdn.mvideo.ru/773a414f39127493023ef4ac0d059daece6ee628/assets/icons/m-club.svg')
cashbackB.classList.add('cashback')
cashbackP.classList.add('cashbk')
cashbackB.innerHTML = 'Кешбэк'
cashbackP.innerHTML = '+ 8 000'

smartphones.append(cashbackBox)
cashbackBox.append(cashbackImg, cashbackB, cashbackP)


const cartBoxAdd = document.createElement('div')
const addCartTwoBtn = document.createElement('button')
const cartImg = document.createElement('img')
const heartImg = document.createElement('img')
const chartImg = document.createElement('img')

cartBoxAdd.classList.add('cart_box_add')
addCartTwoBtn.classList.add('add_cart_two')
cartImg.setAttribute('src', './img/4280487_cart_outlined_shopping_trolley_icon (1).svg')
heartImg.setAttribute('src', './img/8664909_heart_like_icon.svg')
chartImg.setAttribute('src', './img/9069626_chart_histogram_icon.svg')

smartphones.append(cartBoxAdd)
cartBoxAdd.append(addCartTwoBtn, cartImg, heartImg, chartImg)
addCartTwoBtn.append(cartImg)