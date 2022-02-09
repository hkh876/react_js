import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../api/MovieAPI.js'
import './MovieInfo.css'

function MovieInfo() {
    const { movieID } = useParams()
    const [ movieData, setMovieData ] = useState({})

    useEffect(() => {
        getMovieDetail(movieID).then((state) => {
            setMovieData(state)
        })
    }, [movieID])

    if(typeof(movieData) === 'object' && Object.keys(movieData).length === 0) {
        return null
    }

    return (
        <div>
            <section className="md:flex">
                <img src={ movieData.image_path } alt={ "poster " + movieData.title }/>
                <article className="md:mt-0">
                    <h1>{ movieData.title }</h1>
                    <hr/>
                    <p>
                        <strong>Rating: </strong>
                        { movieData.rating }
                    </p>
                    <p>
                        <strong>Release Date: </strong>
                        { movieData.release_date }
                    </p>
                    <p>
                        <strong>Overview: </strong>
                        { movieData.overview }
                    </p>
                    <p>
                        <strong>Genres: </strong>
                    </p>
                    <section>
                        <ul>
                            { movieData.movie_genre.map((item, index) => {
                                return(
                                    <li className="text-white bg-red-700" key={ item.id }>{ item.name }</li>
                                )
                            }) }
                        </ul>
                    </section>
                </article>
            </section>
        </div>
    )
}

export default MovieInfo