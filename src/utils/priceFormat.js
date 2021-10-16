export const priceFormat = (price) => {
    const priceArr = price.toString().split('');
    const item = ' ';
    priceArr.length > 4
        ? priceArr.splice(2, 0, item)
        : priceArr.splice(1, 0, item);
    return priceArr.join('');
}
