function Shuffle(originList) {
    if (originList.length > 0) {
        originList.sort(() => Math.random() - 0.5);
    }
}

function SetDefaultScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export { Shuffle, SetDefaultScreenSize };