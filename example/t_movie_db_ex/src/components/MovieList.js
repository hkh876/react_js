import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { getMovies } from '../api/MovieAPI.js'
import './MovieList.css'

function MovieList() {
    const movieData = useSelector((state) => state.movie_data)
    const dispatch = useDispatch()

    useEffect(() => {
        getMovies().then((state) => {
            dispatch(state)   
        })
    }, [dispatch])

    if(movieData.length === 0) {
        return null
    }

    return (
        <div>
            <section>
                <h1>The most popular</h1>
                <hr/>
            </section>
            <div className="movie-list-container">
                <section className="2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    { movieData.map((item, index) => {
                        return (
                            <Link to={ "/movie/" + item.id } key={ item.id }>
                                <article className="border-red-700">
                                    <section>
                                        <div className="bg-red-700">{ item.rating }</div>
                                        <img 
                                            className="border-red-700" 
                                            src={ item.image_path } 
                                            alt={ 'Poster ' + item.title }/>
                                    </section>
                                    <section className="bg-red-700">
                                        <h1>{ item.title }</h1>
                                    </section>
                                </article>
                            </Link>
                        )
                    }) }
                </section>
            </div>
        </div>
    )
}

export default MovieList