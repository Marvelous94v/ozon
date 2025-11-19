import getData from "./getData";
import scriptRenderGoogs from "./renderGoods";
import scriptSearch from "./search";

const scriptLoad = () => {

    scriptSearch();

    getData().then((data) => {
        scriptRenderGoogs(data);
    })

    /*  
        import postData from "./postData";

        const cartBtn = document.getElementById('cart')

        cartBtn.addEventListener('click', () => {
    
            postData().then((data) => {
                console.log(data);
            })
    
            getData().then((data) => {
                console.log(data);
            })
        }) */

}

export default scriptLoad