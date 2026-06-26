export function getPrice(matrix, currency, plan, yearly) {

    const data = matrix[currency];

    let price = data[plan] * data.tariff;

    if (currency !== "INR")
        price = Math.round(price);

    if (yearly)
        price = Math.round(price * 12 * 0.8);

    return {
        symbol: data.symbol,
        value: price,
    };

}