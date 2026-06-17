export function calculateDiscount(price: number, fullPrice: number) {
    return Math.round((1 - price / fullPrice) * 100)
}
