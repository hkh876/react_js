function getImageSrc(filename) {
    return process.env.PUBLIC_URL + '/assets/img/' + filename
}

export { getImageSrc }