export const scriptSearchFilter = (goods, value) => {

    return goods.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    });
}

export const scriptCategoryFilter = (goods, value) => {

    return goods.filter((item) => {
        return item.category === value
    });
}


export const scriptPriceFilter = (goods, min, max) => {

    return goods.filter((item) => {
        if (min === '' && max === '') {
            return goods
        } else if (min !== '' && max !== '') {
            return item.price > +min && item.price < +max
        } else if (min !== '' && max === '') {
            return item.price > +min
        } else if (min === '' && max !== '') {
            return item.price < +max
        }
    });
}

export const scriptHotSaleFilter = (goods, value) => {

    return goods.filter((item) => {
        return value ? item.sale === true : item
    });
}

