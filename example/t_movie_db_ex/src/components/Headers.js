import { Link } from 'react-router-dom'
import './Headers.css'

function Headers() {
    const handleClick = (e) => {
        alert('Not implement, because of databases')
        e.preventDefault()
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            alert('Not implement, because of databases')
        }

        e.preventDefault()
    }

    return (
        <header>
            <nav className="bg-red-700">
                <ul className="sm:flex-row">
                    <li className="sm:mb-0">
                        <Link to="/">TMovieDB</Link>
                    </li>
                    <li>
                        <form>
                            <input 
                                className="text-black" 
                                type="text" 
                                placeholder="Search for a movie..."
                                onKeyPress={ handleKeyPress }/>
                            <button 
                                className="text-white border-white" 
                                type="submit"
                                onClick={ handleClick }
                                >Search</button>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers