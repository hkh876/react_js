function getNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.sort(() => Math.random() - 0.5);

    return numbers.slice(0, 4);
}

export { getNumbers };