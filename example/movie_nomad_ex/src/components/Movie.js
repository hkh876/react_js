import { Link } from 'react-router-dom'
import styles from './Movie.module.css'

function Movie({ data }) {
    const genres = data.genres
    const summary = data.summary
    const summaryLength = summary.length

    return (
        <div className={styles.movie}>
            <img src={ data.medium_cover_image } alt={ data.id } className={ styles.movie__img }/>
            <div>
                <h2 className={ styles.movie__title }>
                    <Link to={`/movie/${ data.id }`}>{ data.title }</Link>
                </h2>
                <h3 className={ styles.movie__year }>{ data.year }</h3>
                <p title={ summary }>{ summaryLength > 235 ? `${summary.slice(0, 235)}...` : summary }</p>
                <ul className={ styles.movie__genres }>
                    {
                        genres.map((item, index) => {
                            return <li key={ `genre_${ index }` }>{ item }</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Movie