interface RatesObject {
    CurrencyCodeA: string,
    CurrencyCodeB: string,
    Rate: number
}

export interface Rates extends Array<RatesObject>{}