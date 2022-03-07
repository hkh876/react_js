import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Headers.css'

function Headers() {
    const { burger_is_active:burgerIsActive, main_color:mainColor, title } = useSelector((state) => state.common)
    const dispatch = useDispatch()

    function handleBurgerClick() {
        dispatch({
            type: 'UPDATE_BURGER_IS_ACTIVE',
            payload: !burgerIsActive,
        })
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <span className="icon-text">
                        <span className="icon fa-stack fa-lg">
                            <i className={ `fas fa-circle fa-stack-2x has-text-${mainColor}` } aria-hidden="true"></i>
                            <i className="fas fa-asterisk fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                        <span>
                            <h3 className="title is-5 pl-1 pt-3">{ title }</h3>
                        </span>
                    </span>
                </Link>
                <div 
                    className={ "navbar-burger " + (burgerIsActive ? "is-active" : "") }
                    onClick={ handleBurgerClick }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={ "navbar-menu " + (burgerIsActive ? "is-active" : "") }>
                <div className="navbar-start">
                    <Link to="/example-1" className="navbar-item">Example 1</Link>
                    <Link to="/example-2" className="navbar-item">Example 2</Link>
                    <Link to="/example-3" className="navbar-item">Example 3</Link>
                    <Link to="/example-4" className="navbar-item">Example 4</Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to="#" className="navbar-link"> Extra </Link>
                        <div className="navbar-dropdown is-boxed">
                            <Link to="#" className="navbar-item">Bulma Blocks</Link>
                            <Link to="#" className="navbar-item">Bulma Github</Link>
                            <hr className="navbar-divider"/>
                            <Link to="#" className="navbar-item">Bulma Previews Github</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link to="#" className="bd-tw-button button">
                                    <span>Github</span>
                                    <span className="icon">
                                        <i className="fab fa-github" aria-hidden="true"></i>
                                    </span>
                                </Link>    
                            </p>
                            <p className="control">
                                <Link to="#" className={ `button is-${mainColor}` }>
                                    <span className="icon">
                                        <i className="fas fa-star-of-life" aria-hidden="true"></i>
                                    </span>
                                    <span>Bulma Blocks</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Headers