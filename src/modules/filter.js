import getData from "./getData";
import scriptRenderGoogs from "./renderGoods";
import { scriptHotSaleFilter } from "./filters";
import { scriptPriceFilter } from "./filters"

const scriptFilter = () => {

    const filterMin = document.getElementById('min')
    const filterMax = document.getElementById('max')
    const filterSale = document.getElementById('discount-checkbox')
    const filterCheckBox = document.querySelector('.filter-check_checkmark')

    // console.dir(filterSale);


    filterMin.addEventListener('input', (event) => {
        getData().then((data) => {
            scriptRenderGoogs(scriptPriceFilter(scriptHotSaleFilter(data, filterSale.checked), filterMin.value, filterMax.value));
        })
    })

    filterMax.addEventListener('input', (event) => {
        getData().then((data) => {
            scriptRenderGoogs(scriptPriceFilter(scriptHotSaleFilter(data, filterSale.checked), filterMin.value, filterMax.value));
        })
    })

    filterSale.addEventListener('change', () => {
        console.log('change');
        console.log(filterSale.checked);
        filterSale.checked ? filterCheckBox.classList.add('checked') : filterCheckBox.classList.remove('checked')

        getData().then((data) => {
            scriptRenderGoogs(scriptPriceFilter(scriptHotSaleFilter(data, filterSale.checked), filterMin.value, filterMax.value));
        })

    })


}

export default scriptFilter