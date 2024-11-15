export const normalizeImageQuantity = (quantity: string) => {
    return Math.floor(+quantity / 15) * 15 || 15;
};
