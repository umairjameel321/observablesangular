export interface OrderBook {
    BuyOrders: Array<{
        OrderType: string,
        Price: number,
        Volume: number
    }>;
    CreatedTimestampUtc: string;
    SellOrders: Array<{
        OrderType: string,
        Price: number,
        Volume: number
    }>;
}