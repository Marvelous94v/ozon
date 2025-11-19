import getData from "./getData";
import scriptRenderGoogs from "./renderGoods";
import { scriptCategoryFilter } from "./filters";

const scriptCatalog = () => {

    const btnCatalog = document.querySelector('.catalog-button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog li')

    let isOpen = false;



    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen
        isOpen ? catalogModal.style.display = 'block' : catalogModal.style.display = 'none'
    })



    catalogModalItems.forEach(item => {

        item.addEventListener('click', () => {
            const text = item.textContent
            console.log(text);

            getData().then((data) => {
                scriptRenderGoogs(scriptCategoryFilter(data, text));
            })
        })

    })

}

export default scriptCatalog 