export interface LatestPrices {
    status: string;
    prices: {
        btc: {
            bid: string,
            ask: string,
            last: string
        },
        ltc: {
            bid: string,
            ask: string,
            last: string
        },
        doge: {
            bid: string,
            ask: string,
            last: string
        }
    };
}
