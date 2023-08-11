export const generateUniqueId = (): number => {
    const randomPart = Math.random() * Math.pow(36, 10);
    const timestampPart = Date.now() % Math.pow(36, 5);

    return Math.floor(randomPart) + timestampPart;
};