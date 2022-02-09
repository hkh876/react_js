const INIT_MOVIE_DATA = {
    'movie_data': [],
}

function MovieReducer(state=INIT_MOVIE_DATA, action) {
    if(action.type === 'GET_MOVIE_DATA') {
        state['movie_data'] = action.payload
        return { ...state }
    }
    else{
        return state
    }
}

export default MovieReducer