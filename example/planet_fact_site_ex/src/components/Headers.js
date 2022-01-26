import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Headers.css'

function Headers() {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const page = useSelector((state) => state.current_page)

    function handleTitleClick(title='') {
        if(title === '') {
            dispatch({ type: 'update_page', payload: "earth" })
            navigation('/')
            
        }
        else {
            dispatch({ type: 'update_page', payload: title })
            navigation('/' + title)
        }
    }

    return (
        <div className="nav">
            <p className="title" onClick={ () => handleTitleClick() }>THE PLANETS</p>
            <nav>
                <ul className="nav-links">
                    <li>
                        <p 
                            className={ page === "mercury" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('mercury') }
                        >Mercury</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "venus" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('venus') }
                        >Venus</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "earth" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('earth') }
                        >Earth</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "mars" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('mars') }
                        >Mars</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "jupiter" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('jupiter') }
                        >Jupiter</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "saturn" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('saturn') }
                        >Saturn</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "uranus" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('uranus') }
                        >Uranus</p>
                    </li>
                    <li>
                        <p 
                            className={ page === "neptune" ? "router-link-active" : "" } 
                            onClick={ () => handleTitleClick('neptune') }
                        >Neptune</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Headers