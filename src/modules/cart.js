import scriptRenderCart from "./renderCart"
import postData from "./postData"

// Модальное окно корзины scriptModalCard
const scriptModalCard = () => {

    // Инкапсуляция кода

    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartClose = cartModal.querySelector('.cart-close')
    const cartTotal = cartModal.querySelector('.cart-total > span')
    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartSend = document.querySelector('.cart-confirm')

    console.log(cartTotal);




    const openCard = () => {

        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        scriptRenderCart(cart);
        cartTotal.textContent = cart.reduce((sum, item) => {
            return sum + item.price
        }, 0)

        cartModal.style.display = 'flex'


    }

    const closeCard = () => {
        cartModal.style.display = 'none'
    }

    // Вариант 1 (можно навешивать много событий на одно действие)
    cartBtn.addEventListener('click', openCard)

    // Вариант 2 (это свойство объекто и оно может быть только одно)
    cartClose.onclick = closeCard;

    goodsWrapper.addEventListener('click', (event) => {

        // console.log(event.target);
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return +item.id === +key
            })
            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))
            // console.log(goodItem);
        }


    })

    cartWrapper.addEventListener('click', (event) => {

        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goodItem = cart.find((item) => {
                return +item.id === +key
            })
            cart.splice(goodItem, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            scriptRenderCart(cart);
            cartTotal.textContent = cart.reduce((sum, item) => {
                return sum + item.price
            }, 0)

        }
    })


    // Отправка заказа
    cartSend.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        if (cart.length !== 0) {
            postData(cart)
                .then(() => {
                    localStorage.removeItem('cart')
                    scriptRenderCart([])
                    cartTotal.textContent = 0
                });
        }

    })

}

/* scriptModalCard(); */

export default scriptModalCard

