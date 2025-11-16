// Получение данных
const postData = (data) => {

    /*  return fetch('http://localhost:3000/goods/73aa', {
         method: 'DELETE'
     })
         .then(res => res.json()) */

    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Ведьмак 3",
            price: 3500,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg",
            /*                 hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1024822128.jpg", */
            category: "Игровая приставка"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(res => res.json())



    /*         .then((response) => response.json())
            .then((json) => console.log(json)); */



    /* fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            return response.json();
        }) */


    /*         .then((response) => response.json())
            .then((json) => console.log(json)); */
}

export default postData