// Модальное окно корзины scriptModalCard
const scriptModalCard = () => {

    // Инкапсуляция кода

    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartClose = cartModal.querySelector('.cart-close')


    const openCard = () => {
        cartModal.style.display = 'flex'
    }

    const closeCard = () => {
        cartModal.style.display = 'none'
    }

    // Вариант 1 (можно навешивать много событий на одно действие)
    cartBtn.addEventListener('click', openCard)

    // Вариант 2 (это свойство объекто и оно может быть только одно)
    cartClose.onclick = closeCard;

}

/* scriptModalCard(); */

export default scriptModalCard

