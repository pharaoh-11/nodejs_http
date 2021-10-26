const {
    helper3: formatter,
    helper2: getMostExpensive,
    helper1: sorter,
} = require('./helpers');

const products = require('./data.json');

function boot() {
    const formattedProducts = formatter(products);
    console.log(formattedProducts);

    const filteredByItemProducts = sorter(formattedProducts, 'item', 'orange');
    console.log(filteredByItemProducts);

    const filteredByWeightProducts = sorter(formattedProducts, 'weight', 4);
    console.log(filteredByWeightProducts);

    const theMostExpensiveProduct = getMostExpensive([
        ...filteredByItemProducts,
        ...filteredByWeightProducts,
    ]);
    console.log(theMostExpensiveProduct);

    const theMostExpensiveProductFromAll = getMostExpensive();
    console.log(theMostExpensiveProductFromAll);
}

boot();
