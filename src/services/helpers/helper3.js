function formatPriceToNumber(price) {
    return price.replace('$', '').replace(',', '.');
}

module.exports = (products) => {
    if (!products) throw new Error("argument products does't exist");

    return products.map((product) => ({
        ...product,
        price: Number(
            product.pricePerKilo && product.weight
                ? product.weight * formatPriceToNumber(product.pricePerKilo)
                : product.quantity * formatPriceToNumber(product.pricePerItem),
        ),
    }));
};
