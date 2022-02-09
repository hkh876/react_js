import axios from 'axios'

async function getMovies() {
    const response = await axios.get(
        'http://192.168.35.3:5001/api/v1/movies/'
    )

    return {
        type: 'GET_MOVIE_DATA',
        payload: response.data
    }
}

async function getMovieDetail(id) {
    const response = await axios.get(
        'http://192.168.35.3:5001/api/v1/movies/' + id
    )

    return response.data
}

export { getMovies, getMovieDetail }