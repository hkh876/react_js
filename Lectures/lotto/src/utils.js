function getNumbers() {
    const numbers = Array(45).fill().map((value, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);
    
    return numbers.slice(0, 7).sort((a, b) => a - b);
}

export { getNumbers };