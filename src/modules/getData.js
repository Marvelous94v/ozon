// Получение данных
const getData = (str) => {

    return fetch(`
        https://test-ozon-148a7-default-rtdb.firebaseio.com/goods.json
        `)
        .then((response) => {
            return response.json();
        })

    /*         .then((response) => response.json())
            .then((json) => console.log(json)); 
            
            
            `https://test-ozon-148a7-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
            
            */
}

export default getData