import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetailAPI } from 'api/MovieAPI.js'
import styles from './Detail.module.css'

function Detail() {
    const { id:movieID } = useParams()
    const [ movie, setMovie ] = useState({})
    const [ isLoading, setLoading ] = useState(true)
    const genres = movie.genres
    
    // function
    const getMovie = (data) => {
        setMovie(data)
        setLoading(false)
    }

    useEffect(() => {
        getMovieDetailAPI(movieID, getMovie)
    }, [])

    return (
        isLoading ? (
            <div className="loader">
                <span>Loading...</span>
            </div> 
        ): (
            <div className={ styles.detail }>
                <img src={ movie.large_cover_image } alt={ movie.id } className={ styles.detail__img }/>
                <div>
                    <h2>{ movie.title }</h2>
                    <h3>{ movie.year }</h3>
                    <p>{ movie.description_full }</p>
                    <p>rating : { movie.rating}</p>
                    <div>
                        <ul className={ styles.detail__genres }>
                            genres : &nbsp;
                            {
                                genres.map((item, index) => {
                                    return <li key={ `genre_${ index }` }>{ item }</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    )
}

export default Detail