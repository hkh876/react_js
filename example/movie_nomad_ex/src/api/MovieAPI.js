import axios from 'axios'

function defaultCallback() {
    console.error("You must input function")
}

async function getMoviesAPI(callback=defaultCallback) {
    const res = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    const data = res.data.data
    
    callback(data.movies)
}

async function getMovieDetailAPI(id=0, callback=defaultCallback) {
    const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const data = res.data.data
    
    callback(data.movie)
}

export { getMoviesAPI, getMovieDetailAPI }