import { useEffect, useState } from 'react'
import { getMoviesAPI } from 'api/MovieAPI.js'
import styles from './Home.module.css'
import Movie from 'components/Movie.js'

function Home() {
    const [ movies, setMovies] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    
    // functions
    const getMovies = (data) => {
        setMovies(...movies, data)
        setLoading(false)
    }

    useEffect(() => {
        getMoviesAPI(getMovies)
    }, [])
    
    return (
        <div className={ styles.container }>
            { isLoading ? (
                    <div className="loader">
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div className={ styles.movies }>
                        {
                            movies.map((item) => {
                                return <Movie key={ item.id } data={ item }/>
                            })
                        }
                    </div>                    
                )
            }
        </div>
    )
}

export default Home