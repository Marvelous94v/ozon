import getData from "./getData";
import scriptRenderGoogs from "./renderGoods";
import { scriptSearchFilter } from "./filters";

const scriptSearch = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value
        console.log(value);

        getData().then((data) => {
            scriptRenderGoogs(scriptSearchFilter(data, value));
        })

    })
}

export default scriptSearch