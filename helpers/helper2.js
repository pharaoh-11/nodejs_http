const data = require('../data.json');
const formatter = require('./helper3');

module.exports = (sourceProducts) => {
    const products = sourceProducts || formatter(data);

    let theMostExpensiveProduct;
    let topPrice = 0;

    products.forEach((product) => {
        if (product.price) {
            if (product.price > topPrice) {
                topPrice = product.price;
                theMostExpensiveProduct = product;
            }
        }
    });

    return theMostExpensiveProduct;
};
