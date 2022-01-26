function getImageSrc(fileName) {
    return process.env.PUBLIC_URL + "/assets/img/" + fileName
}

function isEmpty(data) {
    if(Object.keys(data).length === 0) {
        return true
    }
    else{
        return false
    }
}

export { getImageSrc, isEmpty }