module.exports = (products, sortKey, sortValue) => {
    if (!products) throw new Error("argument products does't exist");

    return products.filter((product) => {
        if (product[sortKey] && product[sortKey] === sortValue) {
            return true;
        }
        return false;
    });
};
