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

