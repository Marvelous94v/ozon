// Получение данных
const postData = (data) => {

    /*  return fetch('http://localhost:3000/goods/73aa', {
         method: 'DELETE'
     })
         .then(res => res.json()) */

    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
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