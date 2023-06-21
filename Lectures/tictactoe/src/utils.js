function checkWins(data, currentCell, turn) {
    let win = false;
    let count = [0, 0, 0, 0];

    if (currentCell[0] < 0 && currentCell[1] < 0) {
        return false;
    }

    // 1. 가로
    for (let i=0; i<data[0].length; i++) {
        if (data[currentCell[0]][i] === turn) {
            count[0] += 1;
        }
    }

    // 2. 세로
    for (let i=0; i<data.length; i++) {
        if (data[i][currentCell[1]] === turn) {
            count[1] += 1;
        }
    }

    // 3. 대각선 - 좌상우하
    for (let i=0; i<data.length; i++) {
        if (data[i][i] === turn) {
            count[2] += 1;
        }
    }

    // 4. 대각선 - 우상좌하
    for (let i=0; i<data.length; i++) {
        if (data[i][data.length - 1 - i] === turn) {
            count[3] += 1;
        }
    }

    if (count[0] === data.length 
        || count[1] === data.length 
        || count[2] === data.length
        || count[3] === data.length) {
        win = true;
    }

    return win;
}

export { checkWins };